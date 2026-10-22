# NVIDIA NCA Study Hub

A lightweight web-based study hub for two NVIDIA Certified Associate tracks:

- NCA-GENL: Generative AI with LLMs
- NCA-AIIO: AI Infrastructure and Operations

## What This Project Includes

- Study mode with a quick reference sheet and practice questions
- Mock exam mode with timer, randomization, and answer review
- Progress tracking using browser `localStorage`
- Separate GENL and AIIO tracks with independent saved progress
- 116 GENL questions and 125 AIIO questions

## Project Structure

```text
NVIDIA-NCA-GENL-Training/
├── docs/
│   ├── index.html                 GENL home
│   ├── study.html                 GENL study mode
│   ├── exam.html                  GENL mock exam
│   ├── aiio.html                  AIIO home
│   ├── aiio-study.html            AIIO study mode
│   ├── aiio-exam.html             AIIO mock exam
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── questions.js           GENL bank
│       ├── questions-aiio.js      Original AIIO bank
│       ├── questions-aiio-community.js  CC BY 4.0 AIIO bank
│       ├── questions-aiio-combined.js   Combined AIIO bank
│       ├── study.js
│       └── exam.js
└── tests/
    └── validate-question-banks.mjs
```

## Run Locally

1. Open `docs/index.html` in your browser, or serve the `docs` directory with any static HTTP server.
2. Use the GENL/AIIO switch in the navigation bar to choose a track.
3. Use `Study` for review mode and `Mock Exam` for timed practice.

## Validate Question Banks

```bash
node tests/validate-question-banks.mjs
```

## Credits

- NCA-GENL study content inspiration: [ednarvaez/nvidia-certified-associate-study-guide](https://github.com/ednarvaez/nvidia-certified-associate-study-guide).
- NCA-AIIO community questions: 50 questions adapted from [ziash/nvidia-nca-aiio-study-guide](https://github.com/ziash/nvidia-nca-aiio-study-guide) by Zia Zeeshan, Copyright (c) 2026 Zia Zeeshan, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes: converted to the site question schema, converted punctuation to ASCII, added explanations, mapped questions to NCA-AIIO domains and topics, and clarified selected questions for accuracy.

## Disclaimer

This project is for exam preparation and is not affiliated with NVIDIA Corporation. Third-party content remains subject to its original license.
