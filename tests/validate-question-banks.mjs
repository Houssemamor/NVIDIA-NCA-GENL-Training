/*
 * Validates every question bank used by the study hub.
 *
 * Run with: node tests/validate-question-banks.mjs
 *
 * The checks are intentionally data-focused: unique IDs, valid answer
 * indices, topic references, and blueprint counts. They catch the mistakes
 * that are easy to introduce when editing a large JavaScript question bank.
 */

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const banks = [
  {
    label: "NCA-GENL",
    files: [resolve(projectRoot, "docs/js/questions.js")],
    globalName: "QUESTIONS_DB",
    expectedTotal: 130
  },
  {
    label: "NCA-AIIO core",
    files: [resolve(projectRoot, "docs/js/questions-aiio.js")],
    globalName: "QUESTIONS_DB_AIIO_CORE",
    expectedTotal: 90,
    expectedDomains: {
      "Essential AI Knowledge": 34,
      "AI Infrastructure": 36,
      "AI Operations": 20
    }
  },
  {
    label: "NCA-AIIO community",
    files: [resolve(projectRoot, "docs/js/questions-aiio-community.js")],
    globalName: "QUESTIONS_DB_AIIO_COMMUNITY",
    expectedTotal: 50,
    expectedDomains: {
      "Essential AI Knowledge": 10,
      "AI Infrastructure": 24,
      "AI Operations": 16
    },
    expectedSourceId: "ziash-cc-by-4.0"
  },
  {
    label: "NCA-AIIO combined",
    files: [
      resolve(projectRoot, "docs/js/questions-aiio.js"),
      resolve(projectRoot, "docs/js/questions-aiio-community.js"),
      resolve(projectRoot, "docs/js/questions-aiio-combined.js")
    ],
    globalName: "QUESTIONS_DB_AIIO",
    expectedTotal: 140,
    expectedDomains: {
      "Essential AI Knowledge": 44,
      "AI Infrastructure": 60,
      "AI Operations": 36
    },
    // The AIIO mock exam draws 50 questions at 38/40/22 weighting.
    expectedDomainQuotas: {
      "Essential AI Knowledge": 19,
      "AI Infrastructure": 20,
      "AI Operations": 11
    },
    // The AIIO mock exam draws 50 questions at 38/40/22 weighting.
    expectedDomainQuotas: {
      "Essential AI Knowledge": 19,
      "AI Infrastructure": 20,
      "AI Operations": 11
    },
    expectedCommunityCount: 50
  }
];

function loadBank(bank) {
  const context = {};
  vm.createContext(context);
  for (const file of bank.files) {
    const source = readFileSync(file, "utf8");
    vm.runInContext(source, context, { filename: file });
  }
  vm.runInContext(
    "globalThis.__bank = " + bank.globalName + ";",
    context,
    { filename: bank.label }
  );
  assert.ok(context.__bank, bank.label + ": global " + bank.globalName + " was not defined");
  return context.__bank;
}

let checkedQuestions = 0;

for (const bank of banks) {
  const db = loadBank(bank);
  const questions = db.questions;

  assert.ok(Array.isArray(questions), bank.label + ": questions must be an array");
  assert.ok(questions.length > 0, bank.label + ": question bank is empty");
  assert.equal(
    questions.length,
    bank.expectedTotal,
    bank.label + ": expected " + bank.expectedTotal + " questions"
  );
  assert.equal(
    db.metadata.totalQuestions,
    questions.length,
    bank.label + ": metadata.totalQuestions does not match the question array"
  );

  const seenIds = new Set();
  const topicCounts = Object.create(null);
  const domainCounts = {};

  for (const question of questions) {
    const where = bank.label + " question " + question.id;

    assert.ok(Number.isInteger(question.id), where + ": id must be an integer");
    assert.ok(!seenIds.has(question.id), where + ": duplicate id");
    seenIds.add(question.id);

    assert.ok(typeof question.question === "string" && question.question.length > 0, where + ": missing question text");
    assert.ok(Array.isArray(question.options) && question.options.length >= 2, where + ": needs at least two options");
    assert.ok(
      question.options.every((option) => typeof option === "string" && option.length > 0),
      where + ": every option must be a non-empty string"
    );
    assert.ok(
      typeof question.explanation === "string" && question.explanation.length > 0,
      where + ": explanation must be a non-empty string"
    );

    // The project stores content as ASCII. This catches smart quotes and
    // other characters that break the stated file convention.
    for (const text of [question.question, question.explanation, question.topic].concat(question.options)) {
      assert.ok(
        /^[\x00-\x7F]*$/.test(text),
        where + ": contains non-ASCII characters"
      );
    }

    assert.ok(
      Array.isArray(question.correctAnswers) && question.correctAnswers.length > 0,
      where + ": correctAnswers must be a non-empty array"
    );
    assert.ok(
      question.correctAnswers.every(
        (index) => Number.isInteger(index) && index >= 0 && index < question.options.length
      ),
      where + ": correctAnswers contains an invalid option index"
    );
    assert.equal(
      question.correctAnswer,
      question.correctAnswers[0],
      where + ": correctAnswer must equal the first entry of correctAnswers"
    );
    assert.equal(
      question.multiSelect,
      question.correctAnswers.length > 1,
      where + ": multiSelect must match the number of correct answers"
    );

    assert.ok(
      db.metadata.topics.includes(question.topic),
      where + ": topic is not listed in metadata.topics (" + question.topic + ")"
    );
    topicCounts[question.topic] = (topicCounts[question.topic] || 0) + 1;

    if (question.domain) {
      domainCounts[question.domain] = (domainCounts[question.domain] || 0) + 1;
    }

    checkedQuestions++;
  }

  for (const topic of db.metadata.topics) {
    assert.ok(topicCounts[topic] > 0, bank.label + ": metadata topic has no questions (" + topic + ")");
  }

  if (bank.expectedDomains) {
    assert.deepEqual(domainCounts, bank.expectedDomains, bank.label + ": domain counts do not match the blueprint");
    const weightTotal = db.metadata.domains.reduce((sum, domain) => sum + domain.weight, 0);
    assert.equal(weightTotal, 100, bank.label + ": domain weights must total 100");
    for (const domain of db.metadata.domains) {
      assert.equal(
        domain.count,
        domainCounts[domain.name],
        bank.label + ": metadata count is wrong for " + domain.name
      );
    }
  }

  if (bank.expectedDomainQuotas) {
    for (const [domain, quota] of Object.entries(bank.expectedDomainQuotas)) {
      assert.ok(
        domainCounts[domain] >= quota,
        bank.label + ": not enough " + domain + " questions for the mock exam quota"
      );
    }
  }

  if (bank.expectedSourceId) {
    const source = db.metadata.source;
    assert.ok(source, bank.label + ": metadata.source is required for a third-party bank");
    assert.equal(source.license, "CC BY 4.0", bank.label + ": third-party license must be recorded");
    assert.ok(
      typeof source.licenseUrl === "string" && source.licenseUrl.indexOf("creativecommons.org/licenses/by/4.0") > -1,
      bank.label + ": CC BY 4.0 license URL is missing"
    );
    for (const question of questions) {
      assert.equal(
        question.sourceId,
        bank.expectedSourceId,
        bank.label + " question " + question.id + ": sourceId is missing or wrong"
      );
    }
  }

  if (bank.expectedCommunityCount) {
    assert.ok(Array.isArray(db.metadata.sources), bank.label + ": metadata.sources must be an array");
    const sourceIds = db.metadata.sources.map((source) => source.id);
    assert.ok(
      sourceIds.indexOf("ziash-cc-by-4.0") > -1,
      bank.label + ": CC BY 4.0 source is not listed in metadata.sources"
    );
    const communityCount = questions.filter(
      (question) => question.sourceId === "ziash-cc-by-4.0"
    ).length;
    assert.equal(
      communityCount,
      bank.expectedCommunityCount,
      bank.label + ": community question count is wrong"
    );
  }

  console.log(
    bank.label + ": " + questions.length + " questions, " +
    db.metadata.topics.length + " topics, schema OK"
  );
}

console.log("Validated " + checkedQuestions + " questions across " + banks.length + " banks.");
