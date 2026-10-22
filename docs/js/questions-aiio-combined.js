/*
 * Combined NCA-AIIO question bank.
 *
 * The combined bank is assembled at page load from two source files:
 *   - questions-aiio.js: 75 original practice questions.
 *   - questions-aiio-community.js: 50 questions adapted from a CC BY 4.0
 *     source. See that file and the site credits for attribution.
 *
 * Load order matters: this file must be included after both source banks.
 */

const QUESTIONS_DB_AIIO = {
  metadata: {
    exam: "NCA-AIIO",
    examName: "NVIDIA Certified Associate: AI Infrastructure and Operations",
    totalQuestions: 125,
    lastUpdated: "2026-10-22",
    source: "Original practice questions plus CC BY 4.0 community questions",
    // Visible attribution is rendered from this list by the AIIO pages.
    sources: [
      {
        id: "original",
        title: "Original NCA-AIIO practice questions",
        author: "NVIDIA-NCA-GENL-Training contributors",
        url: "https://github.com/Houssemamor/NVIDIA-NCA-GENL-Training",
        license: "Original content",
        licenseUrl: ""
      },
      {
        id: "ziash-cc-by-4.0",
        title: "NVIDIA NCA-AIIO Study Guide - Self-Quiz",
        author: "Zia Zeeshan",
        copyright: "Copyright (c) 2026 Zia Zeeshan",
        url: "https://github.com/ziash/nvidia-nca-aiio-study-guide",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
        changes: "Converted to the site question schema, converted punctuation to ASCII, added explanations, mapped questions to NCA-AIIO domains and topics, and clarified selected questions for accuracy."
      }
    ],
    domains: [
      { name: "Essential AI Knowledge", weight: 38, count: 39 },
      { name: "AI Infrastructure", weight: 40, count: 54 },
      { name: "AI Operations", weight: 22, count: 32 }
    ],
    topics: QUESTIONS_DB_AIIO_CORE.metadata.topics
  },
  questions: QUESTIONS_DB_AIIO_CORE.questions.concat(QUESTIONS_DB_AIIO_COMMUNITY.questions)
};

// Top-level const does not create a window property. The per-track scripts
// look banks up by configurable global name, so expose this one explicitly.
if (typeof window !== "undefined") {
  window.QUESTIONS_DB_AIIO = QUESTIONS_DB_AIIO;
}
