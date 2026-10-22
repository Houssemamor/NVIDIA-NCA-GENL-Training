const QUESTIONS_DB = {
  metadata: {
    totalQuestions: 116,
    topics: [
      "Attention Mechanisms",
      "Data Analysis",
      "Data Preprocessing",
      "Deployment",
      "Ethics & Alignment",
      "Fine-tuning",
      "Language Models",
      "Model Evaluation",
      "Model Optimization",
      "NVIDIA Tools",
      "NLP Applications",
      "Prompt Engineering",
      "Python Libraries",
      "Software Development",
      "Training Techniques",
      "Transformer Architecture"
    ],
    lastUpdated: "2026-03-07"
  },
  questions: [
    {
      id: 1,
      question: "What is the primary purpose of positional encoding in transformer models?",
      options: [
        "To reduce computational complexity",
        "To provide information about token order in sequences",
        "To compress input representations",
        "To handle variable-length sequences"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Transformers process all tokens in parallel (unlike RNNs which process sequentially), so they lack inherent knowledge of token order. Positional encoding adds information about each token's position in the sequence, enabling the model to understand relationships based on position.",
      topic: "Transformer Architecture",
      multiSelect: false
    },
    {
      id: 2,
      question: "In the self-attention mechanism, which matrix represents the token seeking relevant information?",
      options: [
        "Key (K)",
        "Value (V)",
        "Query (Q)",
        "Output (O)"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "In attention mechanism, Query (Q) represents the token that is \"asking\" for information. Key (K) is used to compute compatibility with other tokens, and Value (V) contains the actual information to be retrieved. Think of it as Q=\"what am I looking for?\", K=\"what do I have?\", V=\"the actual content.\"",
      topic: "Attention Mechanisms",
      multiSelect: false
    },
    {
      id: 3,
      question: "When comparing two LLMs using BLEU score, a higher BLEU indicates:",
      options: [
        "The model has a broader vocabulary",
        "The model understands complex sentence structures better",
        "The model produces text more similar to reference text",
        "The model has higher computational efficiency"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "BLEU (Bilingual Evaluation Understudy) measures n-gram overlap between generated text and reference text. Higher BLEU specifically indicates greater lexical similarity to reference, NOT broader vocabulary or deeper understanding. It's a surface-level similarity metric.",
      topic: "Model Evaluation",
      multiSelect: false
    },
    {
      id: 4,
      question: "What is the main benefit of model quantization?",
      options: [
        "Increasing model accuracy",
        "Reducing memory usage and inference latency",
        "Improving training stability",
        "Enhancing model interpretability"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Quantization reduces numerical precision (e.g., from FP32 to INT8), which significantly reduces memory footprint and speeds up inference. This comes with a small trade-off in accuracy but massive gains in efficiency and cost reduction for deployment.",
      topic: "Model Optimization",
      multiSelect: false
    },
    {
      id: 5,
      question: "Which NVIDIA tool is specifically designed for high-performance model inference serving?",
      options: [
        "NeMo Framework",
        "CUDA Toolkit",
        "Triton Inference Server",
        "TensorRT"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Triton Inference Server is NVIDIA's dedicated platform for deploying AI models at scale in production. It handles multiple frameworks, dynamic batching, model versioning, and monitoring. TensorRT optimizes models, NeMo is for development, CUDA is low-level programming.",
      topic: "NVIDIA Tools",
      multiSelect: false
    },
    {
      id: 6,
      question: "In A/B testing for LLM deployment, what is the recommended traffic distribution approach?",
      options: [
        "Send all traffic to the new model immediately",
        "Deploy both models and serve traffic equally",
        "Use only internal testing",
        "Gradually increase traffic over months"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Equal (50/50) traffic distribution ensures fair comparison between models and enables statistically significant performance measurement. This approach minimizes bias and provides reliable data for decision-making about which model to fully deploy.",
      topic: "Deployment",
      multiSelect: false
    },
    {
      id: 7,
      question: "What is the primary advantage of transfer learning in LLM development?",
      options: [
        "Eliminates need for labeled data",
        "Reduces training time and computational requirements",
        "Guarantees better performance",
        "Removes all biases from models"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Transfer learning leverages knowledge learned from large-scale pre-training, dramatically reducing the time and computational resources needed for task-specific fine-tuning. It doesn't eliminate the need for labeled data entirely or guarantee performance, but makes training much more efficient.",
      topic: "Fine-tuning",
      multiSelect: false
    },
    {
      id: 8,
      question: "Which evaluation metric is most commonly used for text summarization tasks?",
      options: [
        "BLEU",
        "ROUGE",
        "Perplexity",
        "F1-Score"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is specifically designed for evaluating summarization quality. It measures overlap between generated and reference summaries. BLEU is for translation, perplexity for language modeling, F1 for classification.",
      topic: "Model Evaluation",
      multiSelect: false
    },
    {
      id: 9,
      question: "What does masked multi-head attention in BERT enable?",
      options: [
        "Faster training speed",
        "Bidirectional context understanding",
        "Reduced memory usage",
        "Better long sequence handling"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "BERT's masked attention allows tokens to attend to all other tokens in both directions (past and future), unlike GPT which only attends to previous tokens. This bidirectional context enables better understanding tasks but prevents autoregressive generation.",
      topic: "Language Models",
      multiSelect: false
    },
    {
      id: 10,
      question: "Why is Exploratory Data Analysis (EDA) essential when fine-tuning LLMs?",
      options: [
        "To increase model parameters",
        "To uncover patterns and anomalies in the dataset",
        "To reduce training time",
        "To eliminate pre-training requirements"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "EDA helps understand data distribution, identify biases, assess data quality, and detect anomalies before fine-tuning. This analysis is crucial for determining appropriate preprocessing steps and ensuring successful adaptation to the target domain.",
      topic: "Data Analysis",
      multiSelect: false
    },
    {
      id: 11,
      question: "What is the main purpose of layer normalization in transformers?",
      options: [
        "To reduce overfitting",
        "To stabilize training and enable deeper networks",
        "To compress model size",
        "To speed up inference"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Layer normalization normalizes inputs to each layer, reducing internal covariate shift and stabilizing gradients. This enables training of very deep networks (like transformers with many layers) and often leads to faster convergence.",
      topic: "Transformer Architecture",
      multiSelect: false
    },
    {
      id: 12,
      question: "Which architecture type is GPT based on?",
      options: [
        "Encoder-only transformer",
        "Decoder-only transformer",
        "Encoder-decoder transformer",
        "Recurrent neural network"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "GPT uses only the decoder part of the transformer, with masked self-attention that prevents looking at future tokens. This autoregressive design enables text generation by predicting the next token based on previous tokens.",
      topic: "Language Models",
      multiSelect: false
    },
    {
      id: 13,
      question: "What is the key difference between BERT and GPT training objectives?",
      options: [
        "BERT uses autoregressive modeling, GPT uses masked language modeling",
        "BERT uses masked language modeling, GPT uses autoregressive modeling",
        "Both use the same training objective",
        "BERT uses supervised learning, GPT uses unsupervised learning"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "BERT masks random tokens and predicts them using bidirectional context (Masked Language Modeling). GPT predicts the next token given previous tokens (autoregressive). This difference makes BERT better for understanding tasks, GPT better for generation.",
      topic: "Language Models",
      multiSelect: false
    },
    {
      id: 14,
      question: "In Named Entity Recognition (NER), what type of information is typically extracted?",
      options: [
        "Sentiment polarity",
        "Topic categories",
        "Person, organization, location names",
        "Grammar structures"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "NER identifies and classifies named entities in text into predefined categories like PERSON (John Smith), ORGANIZATION (Google), LOCATION (New York), DATE, etc. It's a key information extraction task used in search, content analysis, and privacy protection.",
      topic: "NLP Applications",
      multiSelect: false
    },
    {
      id: 15,
      question: "What is the purpose of the attention mask in transformer models?",
      options: [
        "To hide irrelevant tokens during computation",
        "To reduce computational complexity",
        "To prevent attention to padding tokens or future tokens",
        "To compress attention weights"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Attention masks ensure tokens don't attend to padding tokens (in batched sequences) or future tokens (in autoregressive models like GPT). This maintains the intended information flow and prevents the model from \"cheating\" by seeing future information during training.",
      topic: "Attention Mechanisms",
      multiSelect: false
    },
    {
      id: 16,
      question: "Which NVIDIA framework provides pre-trained models for NLP tasks?",
      options: [
        "Triton",
        "TensorRT",
        "NeMo",
        "CUDA"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "NeMo (Neural Modules) is NVIDIA's framework for building AI applications, providing pre-trained models for NLP, speech, and vision tasks with easy customization and fine-tuning capabilities. Triton serves models, TensorRT optimizes them, CUDA is low-level programming.",
      topic: "NVIDIA Tools",
      multiSelect: false
    },
    {
      id: 17,
      question: "What is Retrieval-Augmented Generation (RAG)?",
      options: [
        "A training technique for transformers",
        "A method combining retrieval and generation for responses",
        "A model compression technique",
        "An evaluation metric for language models"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "RAG combines information retrieval with text generation. It first retrieves relevant documents from a knowledge base, then uses that context to generate more accurate, up-to-date responses. This reduces hallucination and enables access to external knowledge beyond training data.",
      topic: "NLP Applications",
      multiSelect: false
    },
    {
      id: 18,
      question: "In multi-head attention, why are multiple attention heads used?",
      options: [
        "To reduce computational cost",
        "To focus on different types of relationships simultaneously",
        "To handle longer sequences",
        "To improve memory efficiency"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Multiple attention heads allow the model to attend to different types of relationships simultaneously - one head might focus on syntactic relationships, another on semantic similarity, etc. Each head learns different attention patterns, providing richer representations.",
      topic: "Attention Mechanisms",
      multiSelect: false
    },
    {
      id: 19,
      question: "What is the typical range of BLEU scores?",
      options: [
        "-1 to 1",
        "0 to 100",
        "0 to 1",
        "1 to 10"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "BLEU scores range from 0 to 1, where 0 means no overlap with reference text and 1 means perfect match. Scores are often reported as percentages (0-100), but the underlying scale is 0-1. Higher scores indicate better similarity to reference text.",
      topic: "Model Evaluation",
      multiSelect: false
    },
    {
      id: 20,
      question: "Which technique is most effective for reducing LLM inference costs in production?",
      options: [
        "Increasing batch size only",
        "Using larger models",
        "Model quantization and optimization",
        "Adding more GPUs"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Model quantization and optimization techniques (like TensorRT) reduce memory usage and computational requirements, directly lowering infrastructure costs. While batch size helps throughput, and more GPUs increase capacity, optimization reduces the fundamental resource requirements per inference.",
      topic: "Deployment",
      multiSelect: false
    },
    {
      id: 21,
      question: "What is the main advantage of Parameter-Efficient Fine-tuning (PEFT) methods like LoRA?",
      options: [
        "Better accuracy than full fine-tuning",
        "Reduces computational requirements while maintaining performance",
        "Eliminates need for pre-trained models",
        "Faster inference speed"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "PEFT methods like LoRA (Low-Rank Adaptation) fine-tune only a small subset of parameters, dramatically reducing memory and computational requirements while achieving performance comparable to full fine-tuning. This makes fine-tuning accessible with limited resources.",
      topic: "Fine-tuning",
      multiSelect: false
    },
    {
      id: 22,
      question: "In transformer architecture, what connects different layers?",
      options: [
        "Attention mechanisms only",
        "Feed-forward networks only",
        "Residual connections",
        "Pooling layers"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Residual connections (skip connections) add the input of each sub-layer to its output, enabling gradient flow in deep networks and preventing vanishing gradients. They're combined with layer normalization in the \"Add & Norm\" operations throughout the transformer.",
      topic: "Transformer Architecture",
      multiSelect: false
    },
    {
      id: 23,
      question: "What is the purpose of the softmax function in attention computation?",
      options: [
        "To normalize attention weights to sum to 1",
        "To increase computational speed",
        "To reduce memory usage",
        "To handle negative values"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Softmax converts raw attention scores into a probability distribution where all weights sum to 1. This ensures that attention is properly distributed across tokens and creates a weighted average when applied to values. The normalization is essential for stable training.",
      topic: "Attention Mechanisms",
      multiSelect: false
    },
    {
      id: 24,
      question: "Which model format is supported by TensorRT for optimization?",
      options: [
        "Only PyTorch models",
        "Only TensorFlow models",
        "Multiple formats including ONNX",
        "Only custom NVIDIA formats"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "TensorRT supports multiple model formats including ONNX (Open Neural Network Exchange), TensorFlow, PyTorch, and others. ONNX is particularly important as it enables model portability across different frameworks and deployment platforms.",
      topic: "NVIDIA Tools",
      multiSelect: false
    },
    {
      id: 25,
      question: "What is the key benefit of dynamic batching in Triton Inference Server?",
      options: [
        "Reduces model size",
        "Optimizes throughput by combining requests",
        "Improves model accuracy",
        "Reduces latency for all requests"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Dynamic batching automatically combines multiple incoming requests into batches to maximize GPU utilization and overall throughput. While individual request latency might increase slightly, the system can handle many more requests per second.",
      topic: "Deployment",
      multiSelect: false
    },
    {
      id: 26,
      question: "In text classification tasks, what does F1-score measure?",
      options: [
        "Only precision",
        "Only recall",
        "Harmonic mean of precision and recall",
        "Arithmetic mean of precision and recall"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "F1-score is the harmonic mean of precision and recall: F1 = 2 x (precision x recall) / (precision + recall). It provides a single metric that balances both precision (correct positive predictions) and recall (finding all positive cases), especially useful for imbalanced datasets.",
      topic: "Model Evaluation",
      multiSelect: false
    },
    {
      id: 27,
      question: "What is the main challenge that positional encoding solves in transformers?",
      options: [
        "Handling variable sequence lengths",
        "Lack of inherent sequential order in parallel processing",
        "Memory limitations",
        "Computational complexity"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Unlike RNNs that process tokens sequentially, transformers process all tokens simultaneously in parallel. This parallel processing loses information about token order, which is crucial for language understanding. Positional encoding restores this positional information.",
      topic: "Transformer Architecture",
      multiSelect: false
    },
    {
      id: 28,
      question: "Which training paradigm involves learning from massive unlabeled text corpora?",
      options: [
        "Supervised learning",
        "Pre-training",
        "Fine-tuning",
        "Transfer learning"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Pre-training involves learning general language representations from large-scale unlabeled text (like web pages, books) using self-supervised objectives like predicting masked tokens or next tokens. This creates foundation models that can then be fine-tuned for specific tasks.",
      topic: "Training Techniques",
      multiSelect: false
    },
    {
      id: 29,
      question: "What is the purpose of teacher forcing in sequence generation?",
      options: [
        "To speed up inference",
        "To use ground truth tokens during training",
        "To reduce model size",
        "To improve model interpretability"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Teacher forcing feeds the ground truth token at each time step during training instead of the model's own prediction. This stabilizes training and speeds convergence, though it can create a mismatch between training and inference (exposure bias).",
      topic: "Training Techniques",
      multiSelect: false
    },
    {
      id: 30,
      question: "In question answering tasks, what distinguishes extractive from generative approaches?",
      options: [
        "Model architecture used",
        "Whether answers are extracted from text or generated",
        "Training data requirements",
        "Computational complexity"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Extractive QA finds and extracts the answer span from the given passage (like highlighting text). Generative QA creates new text as the answer, potentially combining information from multiple sources or paraphrasing. Both can use similar architectures but have different output strategies.",
      topic: "NLP Applications",
      multiSelect: false
    },
    {
      id: 31,
      question: "What is the main advantage of using pre-trained embeddings?",
      options: [
        "Faster training speed only",
        "Capturing semantic relationships learned from large corpora",
        "Reduced memory usage",
        "Better interpretability"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Pre-trained embeddings (like Word2Vec, GloVe) capture semantic relationships between words learned from large text corpora. Words with similar meanings have similar embeddings, providing rich representations that improve downstream task performance, especially with limited training data.",
      topic: "Training Techniques",
      multiSelect: false
    },
    {
      id: 32,
      question: "In the context of LLMs, what does \"few-shot learning\" refer to?",
      options: [
        "Training with very few parameters",
        "Learning tasks with minimal examples",
        "Fast inference speed",
        "Short sequence processing"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Few-shot learning enables LLMs to perform new tasks by providing just a few examples in the input prompt, without additional training or fine-tuning. For example, showing 2-3 examples of sentiment classification in the prompt to classify new text.",
      topic: "Prompt Engineering",
      multiSelect: false
    },
    {
      id: 33,
      question: "What is the role of the feed-forward network in each transformer layer?",
      options: [
        "To compute attention weights",
        "To apply non-linear transformations to representations",
        "To normalize layer outputs",
        "To handle positional information"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "The feed-forward network applies non-linear transformations (typically two linear layers with ReLU activation) to each position independently. This adds modeling capacity and non-linearity to the otherwise linear attention operations, enabling complex pattern learning.",
      topic: "Transformer Architecture",
      multiSelect: false
    },
    {
      id: 34,
      question: "Which metric is most appropriate for evaluating machine translation quality?",
      options: [
        "ROUGE",
        "F1-score",
        "BLEU",
        "Perplexity"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "BLEU (Bilingual Evaluation Understudy) was specifically designed for machine translation evaluation. It measures n-gram precision between translated text and reference translations. ROUGE is for summarization, F1 for classification, perplexity for language modeling.",
      topic: "Model Evaluation",
      multiSelect: false
    },
    {
      id: 35,
      question: "What is the purpose of beam search in sequence generation?",
      options: [
        "To speed up generation",
        "To explore multiple candidate sequences simultaneously",
        "To reduce memory usage",
        "To handle longer sequences"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Beam search maintains multiple candidate sequences (beams) during generation, exploring different paths to find higher-quality outputs. It balances between greedy search (fast but potentially suboptimal) and exhaustive search (optimal but computationally prohibitive).",
      topic: "Language Models",
      multiSelect: false
    },
    {
      id: 36,
      question: "In distributed training, what is the purpose of gradient accumulation?",
      options: [
        "To speed up training",
        "To simulate larger batch sizes with limited memory",
        "To improve model accuracy",
        "To reduce communication overhead"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Gradient accumulation allows training with larger effective batch sizes when memory is limited. Instead of updating parameters after each small batch, gradients are accumulated over multiple mini-batches before the parameter update, simulating a larger batch.",
      topic: "Training Techniques",
      multiSelect: false
    },
    {
      id: 37,
      question: "What is the main difference between autoregressive and autoencoding language models?",
      options: [
        "Model size",
        "Training data requirements",
        "Generation vs. understanding focus",
        "Computational complexity"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Autoregressive models (like GPT) predict the next token sequentially, making them excellent for generation tasks. Autoencoding models (like BERT) use bidirectional context to understand masked tokens, making them better for understanding tasks like classification and question answering.",
      topic: "Language Models",
      multiSelect: false
    },
    {
      id: 38,
      question: "Which NVIDIA technology is specifically designed for inference optimization?",
      options: [
        "NeMo",
        "TensorRT",
        "DGX",
        "CUDA"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "TensorRT is NVIDIA's inference optimization library that accelerates deep learning models through techniques like layer fusion, precision calibration (INT8/FP16), and kernel auto-tuning. It specifically focuses on making inference faster and more efficient.",
      topic: "NVIDIA Tools",
      multiSelect: false
    },
    {
      id: 39,
      question: "What is the purpose of dropout in neural networks?",
      options: [
        "To speed up training",
        "To prevent overfitting by randomly setting neurons to zero",
        "To reduce model size",
        "To improve interpretability"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Dropout randomly sets a percentage of neurons to zero during training, preventing the model from becoming too dependent on specific neurons. This regularization technique reduces overfitting and improves generalization to unseen data.",
      topic: "Training Techniques",
      multiSelect: false
    },
    {
      id: 40,
      question: "In the context of attention mechanisms, what does \"scaled\" refer to in scaled dot-product attention?",
      options: [
        "Scaling by sequence length",
        "Scaling by square root of key dimension",
        "Scaling by number of heads",
        "Scaling by batch size"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "The attention scores (QK transposed) are divided by the square root of d_k (the key dimension) to prevent extremely large values that would cause the softmax to have very small gradients. This scaling ensures stable training.",
      topic: "Attention Mechanisms",
      multiSelect: false
    },
    {
      id: 41,
      question: "What is the main advantage of using ONNX format for models?",
      options: [
        "Better accuracy",
        "Faster training",
        "Model portability across frameworks",
        "Reduced model size"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "ONNX (Open Neural Network Exchange) is a standard format that enables models trained in one framework (PyTorch, TensorFlow, etc.) to be deployed in another framework or runtime. This portability simplifies deployment and enables optimization tools like TensorRT.",
      topic: "Deployment",
      multiSelect: false
    },
    {
      id: 42,
      question: "In fine-tuning scenarios, what is catastrophic forgetting?",
      options: [
        "Model losing pre-trained knowledge during fine-tuning",
        "Model forgetting current task",
        "Memory overflow during training",
        "Gradient explosion problem"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Catastrophic forgetting occurs when fine-tuning on new tasks causes the model to lose previously learned knowledge from pre-training or other tasks. This is why techniques like parameter-efficient fine-tuning (PEFT) and careful learning rate scheduling are important.",
      topic: "Fine-tuning",
      multiSelect: false
    },
    {
      id: 43,
      question: "What is the purpose of nucleus sampling (top-p) in text generation?",
      options: [
        "To speed up generation",
        "To control randomness by sampling from top probability mass",
        "To reduce memory usage",
        "To handle longer sequences"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Nucleus sampling (top-p) samples from the smallest set of tokens whose cumulative probability exceeds p (e.g., 0.9). This dynamically adjusts the candidate pool size based on the probability distribution, balancing diversity and quality better than fixed top-k sampling.",
      topic: "Language Models",
      multiSelect: false
    },
    {
      id: 44,
      question: "Which component of BERT is responsible for handling different sentence pairs?",
      options: [
        "Multi-head attention",
        "Positional encoding",
        "Segment embeddings",
        "Layer normalization"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Segment embeddings (also called token type embeddings) distinguish between different sentences in tasks like Next Sentence Prediction. They add learned embeddings to indicate whether each token belongs to sentence A or sentence B in sentence pair tasks.",
      topic: "Language Models",
      multiSelect: false
    },
    {
      id: 45,
      question: "What is the main purpose of knowledge distillation in model compression?",
      options: [
        "To transfer knowledge from larger to smaller models",
        "To improve training speed",
        "To reduce inference latency",
        "To handle longer sequences"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Knowledge distillation trains a smaller \"student\" model to mimic the behavior of a larger \"teacher\" model by learning from the teacher's soft outputs (probability distributions) rather than just hard labels. This creates compact models with better performance than training from scratch.",
      topic: "Model Optimization",
      multiSelect: false
    },
    {
      id: 46,
      question: "In the context of LLMs, what does \"hallucination\" refer to?",
      options: [
        "Model generating factually incorrect information",
        "Model processing images",
        "Model compression artifacts",
        "Training instability"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Hallucination occurs when LLMs generate plausible-sounding but factually incorrect information. This happens because models learn patterns from training data but may not truly \"understand\" facts, leading to confident-sounding but false statements.",
      topic: "Language Models",
      multiSelect: false
    },
    {
      id: 47,
      question: "What is the key innovation of the Transformer architecture over RNNs?",
      options: [
        "Better memory efficiency",
        "Parallel processing capability",
        "Smaller model size",
        "Faster inference only"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Transformers can process all tokens in a sequence simultaneously (parallel processing), unlike RNNs which must process tokens sequentially. This parallelization enables much faster training and better utilization of modern hardware like GPUs.",
      topic: "Transformer Architecture",
      multiSelect: false
    },
    {
      id: 48,
      question: "Which technique is commonly used to handle out-of-vocabulary words in modern NLP?",
      options: [
        "Word-level tokenization only",
        "Subword tokenization (BPE, WordPiece)",
        "Character-level processing only",
        "Dictionary lookup"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Subword tokenization (like BPE - Byte Pair Encoding, WordPiece) breaks words into smaller subword units, allowing models to handle unseen words by combining known subword pieces. This reduces vocabulary size while maintaining semantic meaning.",
      topic: "Data Preprocessing",
      multiSelect: false
    },
    {
      id: 49,
      question: "What is the purpose of warm-up in learning rate scheduling?",
      options: [
        "To speed up training",
        "To gradually increase learning rate at training start",
        "To reduce memory usage",
        "To prevent overfitting"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Learning rate warm-up gradually increases the learning rate from a small value to the target value over the first few epochs/steps. This helps stabilize training of large models by preventing large gradient updates when parameters are randomly initialized.",
      topic: "Training Techniques",
      multiSelect: false
    },
    {
      id: 50,
      question: "In production LLM deployment, what is the most critical consideration for cost optimization?",
      options: [
        "Model accuracy only",
        "Balancing performance, latency, and computational costs",
        "Using the largest available model",
        "Maximum throughput regardless of cost"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Production deployment requires balancing multiple factors: model performance (accuracy), latency requirements (user experience), and computational costs (infrastructure expenses). The optimal solution rarely maximizes just one dimension but finds the best trade-off for business requirements.",
      topic: "Deployment",
      multiSelect: false
    },
    {
      id: 51,
      question: "How does A/B testing contribute to the optimization of deep learning models' performance and effectiveness in real-world applications? (Pick the 2 correct responses)",
      options: [
        "A/B testing helps validate the impact of changes or updates to deep learning models by statistically analyzing the outcomes of different versions to make informed decisions for model optimization.",
        "A/B testing allows for the comparison of different model configurations or hyperparameters to identify the most effective setup for improved performance.",
        "A/B testing in deep learning models is primarily used for selecting the best training dataset without requiring a model architecture or parameters.",
        "A/B testing guarantees immediate performance improvements in deep learning models without the need for further analysis or experimentation.",
        "A/B testing is irrelevant in deep learning as it only applies to traditional statistical analysis and not complex neural network models."
      ],
      correctAnswer: 0,
      correctAnswers: [0, 1],
      explanation: "A/B testing is a controlled experimentation technique used to compare two versions of a system to determine which performs better. In the context of deep learning, it validates changes (e.g., model updates or new features) by statistically comparing outcomes (e.g., accuracy or user engagement), enabling data-driven optimization decisions. It also allows comparison of different model configurations or hyperparameters to identify the most effective setup.",
      topic: "Model Evaluation",
      multiSelect: true
    },
    {
      id: 52,
      question: "In neural networks, the vanishing gradient problem refers to what problem or issue?",
      options: [
        "The problem of overfitting in neural networks, where the model performs well on the training data but poorly on new, unseen data.",
        "The issue of gradients becoming too large during backpropagation, leading to unstable training.",
        "The problem of underfitting in neural networks, where the model fails to capture the underlying patterns in the data.",
        "The issue of gradients becoming too small during backpropagation, resulting in slow convergence or stagnation of the training process."
      ],
      correctAnswer: 3,
      correctAnswers: [3],
      explanation: "The vanishing gradient problem occurs in deep neural networks when gradients become too small during backpropagation, causing slow convergence or stagnation in training, particularly in deeper layers. This issue is common in architectures like RNNs or deep feedforward networks with certain activation functions (e.g., sigmoid). Techniques like ReLU activation, batch normalization, or residual connections (used in transformers) mitigate this problem.",
      topic: "Training Techniques",
      multiSelect: false
    },
    {
      id: 53,
      question: "In the context of fine-tuning LLMs, which of the following metrics is most commonly used to assess the performance of a fine-tuned model?",
      options: [
        "Model size",
        "Accuracy on a validation set",
        "Training duration",
        "Number of layers"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "When fine-tuning large language models, the primary goal is to improve the model's performance on a specific task. The most common metric for assessing this performance is accuracy on a validation set, as it directly measures how well the model generalizes to unseen data. Options like model size, training duration, and number of layers are architectural characteristics or training parameters that do not directly reflect effectiveness.",
      topic: "Fine-tuning",
      multiSelect: false
    },
    {
      id: 54,
      question: "Which of the following is a key characteristic of Rapid Application Development (RAD)?",
      options: [
        "Iterative prototyping with active user involvement.",
        "Extensive upfront planning before any development.",
        "Linear progression through predefined project phases.",
        "Minimal user feedback during the development process."
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Rapid Application Development (RAD) is a software development methodology that emphasizes iterative prototyping and active user involvement to accelerate development and ensure alignment with user needs. RAD involves creating prototypes, gathering user feedback, and refining the application iteratively, unlike traditional waterfall models that require extensive upfront planning.",
      topic: "Software Development",
      multiSelect: false
    },
    {
      id: 55,
      question: "Which Python library is specifically designed for working with large language models (LLMs)?",
      options: [
        "NumPy",
        "Pandas",
        "HuggingFace Transformers",
        "Scikit-learn"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "The HuggingFace Transformers library is specifically designed for working with large language models, providing tools for model training, fine-tuning, and inference with transformer-based architectures (e.g., BERT, GPT, T5). NumPy is for numerical computations, Pandas is for data manipulation, and Scikit-learn is for traditional machine learning.",
      topic: "Python Libraries",
      multiSelect: false
    },
    {
      id: 56,
      question: "What is the primary purpose of applying various image transformation techniques (e.g., flipping, rotation, zooming) to a dataset?",
      options: [
        "To simplify the model's architecture, making it easier to interpret the results.",
        "To artificially expand the dataset's size and improve the model's ability to generalize.",
        "To ensure perfect alignment and uniformity across all images in the dataset.",
        "To reduce the computational resources required for training deep learning models."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Image transformation techniques such as flipping, rotation, and zooming are forms of data augmentation used to artificially increase the size and diversity of a dataset. Data augmentation improves a model's ability to generalize by exposing it to varied versions of the training data, thus reducing overfitting. Transformations do not simplify architecture, introduce variability rather than uniformity, and typically increase computational requirements.",
      topic: "Data Preprocessing",
      multiSelect: false
    },
    {
      id: 57,
      question: "Which feature of the HuggingFace Transformers library makes it particularly suitable for fine-tuning large language models on NVIDIA GPUs?",
      options: [
        "Built-in support for CPU-based data preprocessing pipelines.",
        "Seamless integration with PyTorch and TensorRT for GPU-accelerated training and inference.",
        "Automatic conversion of models to ONNX format for cross-platform deployment.",
        "Simplified API for classical machine learning algorithms like SVM."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "The HuggingFace Transformers library is widely used for fine-tuning large language models due to its seamless integration with PyTorch and NVIDIA's TensorRT, enabling GPU-accelerated training and inference. This includes support for CUDA and features like mixed-precision training and dynamic shape inference, making it ideal for scaling LLM fine-tuning on GPU clusters.",
      topic: "Python Libraries",
      multiSelect: false
    },
    {
      id: 58,
      question: "When designing prompts for a large language model to perform a complex reasoning task, such as solving a multi-step mathematical problem, which advanced prompt engineering technique is most effective in ensuring robust performance across diverse inputs?",
      options: [
        "Zero-shot prompting with a generic task description.",
        "Few-shot prompting with randomly selected examples.",
        "Chain-of-thought prompting with step-by-step reasoning examples.",
        "Retrieval-augmented generation with external mathematical databases."
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Chain-of-thought (CoT) prompting is an advanced prompt engineering technique that significantly enhances a large language model's performance on complex reasoning tasks. By including examples that explicitly demonstrate step-by-step reasoning in the prompt, CoT guides the model to break down the problem into intermediate steps, improving accuracy and robustness. Zero-shot is less effective for complex tasks, few-shot with random examples is suboptimal without structured reasoning, and RAG is useful for factual queries but less relevant for pure reasoning tasks.",
      topic: "Prompt Engineering",
      multiSelect: false
    },
    {
      id: 59,
      question: "In the development of trustworthy AI systems, what is the primary purpose of implementing red-teaming exercises during the alignment process of large language models?",
      options: [
        "To optimize the model's inference speed for production deployment.",
        "To identify and mitigate potential biases, safety risks, and harmful outputs.",
        "To increase the model's parameter count for better performance.",
        "To automate the collection of training data for fine-tuning."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Red-teaming exercises involve systematically testing a large language model by probing it with adversarial or challenging inputs to uncover vulnerabilities, such as biases, unsafe responses, or harmful outputs. Red-teaming is a critical step in the alignment process to ensure LLMs adhere to ethical standards and societal values. By simulating worst-case scenarios, it helps developers identify and mitigate risks before deployment.",
      topic: "Ethics & Alignment",
      multiSelect: false
    },
    {
      id: 60,
      question: "In the context of preparing a multilingual dataset for fine-tuning an LLM, which preprocessing technique is most effective for handling text from diverse scripts (e.g., Latin, Cyrillic, Devanagari) to ensure consistent model performance?",
      options: [
        "Normalizing all text to a single script using transliteration.",
        "Applying Unicode normalization to standardize character encodings.",
        "Removing all non-Latin characters to simplify the input.",
        "Converting text to phonetic representations for cross-lingual alignment."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Applying Unicode normalization (e.g., NFKC or NFC forms) is the most effective preprocessing technique for handling text from diverse scripts. Unicode normalization standardizes character encodings, ensuring that visually identical characters (e.g., precomposed vs. decomposed forms) are represented consistently, which improves model performance across languages. Transliteration may lose linguistic nuances, removing non-Latin characters discards critical information, and phonetic conversion is impractical for text-based LLMs.",
      topic: "Data Preprocessing",
      multiSelect: false
    },
    {
      id: 61,
      question: "Which technique is used in prompt engineering to guide LLMs in generating more accurate and contextually appropriate responses?",
      options: [
        "Training the model with additional data.",
        "Choosing another model architecture.",
        "Increasing the model's parameter count.",
        "Leveraging the system message."
      ],
      correctAnswer: 3,
      correctAnswers: [3],
      explanation: "Prompt engineering involves designing inputs to guide large language models to produce desired outputs without modifying the model itself. Leveraging the system message is a key technique, where a predefined instruction or context is provided to the LLM to set the tone, role, or constraints for its responses. Training with additional data, changing architecture, and increasing parameters involve model modifications, which are not part of prompt engineering.",
      topic: "Prompt Engineering",
      multiSelect: false
    },
    {
      id: 62,
      question: "When designing an experiment to compare the performance of two LLMs on a question-answering task, which statistical test is most appropriate to determine if the difference in their accuracy is significant, assuming the data follows a normal distribution?",
      options: [
        "Chi-squared test",
        "Paired t-test",
        "Mann-Whitney U test",
        "ANOVA test"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "The paired t-test is the most appropriate statistical test to compare the performance (e.g., accuracy) of two large language models on the same question-answering dataset, assuming the data follows a normal distribution. This test evaluates whether the mean difference in paired observations is statistically significant. Chi-squared is for categorical data, Mann-Whitney U is for non-normal data, and ANOVA is for comparing more than two groups.",
      topic: "Model Evaluation",
      multiSelect: false
    },
    {
      id: 63,
      question: "Which of the following contributes to the ability of RAPIDS to accelerate data processing? (Pick the 2 correct responses)",
      options: [
        "Ensuring that CPUs are running at full clock speed.",
        "Subsampling datasets to provide rapid but approximate answers.",
        "Using the GPU for parallel processing of data.",
        "Enabling data processing to scale to multiple GPUs.",
        "Providing more memory for data analysis."
      ],
      correctAnswer: 2,
      correctAnswers: [2, 3],
      explanation: "RAPIDS is an open-source suite of GPU-accelerated data science libraries developed by NVIDIA to speed up data processing and machine learning workflows. Its key advantages include using GPUs for parallel processing, which significantly accelerates computations compared to CPU-based processing, and enabling data processing to scale to multiple GPUs for even greater throughput.",
      topic: "NVIDIA Tools",
      multiSelect: true
    },
    {
      id: 64,
      question: "Which calculation is most commonly used to measure the semantic closeness of two text passages?",
      options: [
        "Hamming distance",
        "Jaccard similarity",
        "Cosine similarity",
        "Euclidean distance"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Cosine similarity is the most commonly used metric to measure the semantic closeness of two text passages in NLP. It calculates the cosine of the angle between two vectors (e.g., word embeddings or sentence embeddings) in a high-dimensional space, focusing on direction rather than magnitude. Hamming distance is for binary data, Jaccard similarity is for set-based comparisons, and Euclidean distance is less common for text due to its sensitivity to vector magnitude.",
      topic: "Data Analysis",
      multiSelect: false
    },
    {
      id: 65,
      question: "When preprocessing text data for an LLM fine-tuning task, why is it critical to apply subword tokenization (e.g., Byte-Pair Encoding) instead of word-based tokenization for handling rare or out-of-vocabulary words?",
      options: [
        "Subword tokenization reduces the model's computational complexity by eliminating embeddings.",
        "Subword tokenization creates a fixed-size vocabulary to prevent memory overflow.",
        "Subword tokenization breaks words into smaller units, enabling the model to generalize to unseen words.",
        "Subword tokenization removes punctuation and special characters to simplify text input."
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Subword tokenization, such as Byte-Pair Encoding (BPE) or WordPiece, is critical for preprocessing text data because it breaks words into smaller subword units, enabling the model to handle rare or out-of-vocabulary words effectively. This allows the model to represent unseen words by combining known subwords (e.g., \"unseen\" as \"un\" + \"seen\"), improving generalization compared to word-based tokenization.",
      topic: "Data Preprocessing",
      multiSelect: false
    },
    {
      id: 66,
      question: "What are the main advantages of instructed large language models over traditional, small language models (< 300M parameters)? (Pick the 2 correct responses)",
      options: [
        "Trained without the need for labeled data.",
        "Smaller latency, higher throughput.",
        "It is easier to explain the predictions.",
        "Cheaper computational costs during inference.",
        "Single generic model can do more than one task."
      ],
      correctAnswer: 3,
      correctAnswers: [3, 4],
      explanation: "Instructed large language models have significant advantages over smaller traditional models. They often have cheaper computational costs during inference for certain tasks because they can generalize across multiple tasks without requiring task-specific retraining. Additionally, a single generic model can perform more than one task, reducing the need for multiple specialized models.",
      topic: "Language Models",
      multiSelect: true
    },
    {
      id: 67,
      question: "Which aspect in the development of ethical AI systems ensures they align with societal values and norms?",
      options: [
        "Achieving the highest possible level of prediction accuracy in AI models.",
        "Implementing complex algorithms to enhance AI's problem-solving capabilities.",
        "Developing AI systems with autonomy from human decision-making.",
        "Ensuring AI systems have explicable decision-making processes."
      ],
      correctAnswer: 3,
      correctAnswers: [3],
      explanation: "Ensuring explicable decision-making processes, often referred to as explainability or interpretability, is critical for aligning AI systems with societal values and norms. Explainable AI allows stakeholders to understand how decisions are made, fostering trust and ensuring compliance with ethical standards. Prediction accuracy alone does not guarantee ethical alignment, and autonomy from human oversight can conflict with ethical principles.",
      topic: "Ethics & Alignment",
      multiSelect: false
    },
    {
      id: 68,
      question: "What is the fundamental role of LangChain in an LLM workflow?",
      options: [
        "To act as a replacement for traditional programming languages.",
        "To reduce the size of AI foundation models.",
        "To orchestrate LLM components into complex workflows.",
        "To directly manage the hardware resources used by LLMs."
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "LangChain is a framework designed to simplify the development of applications powered by large language models by orchestrating various components, such as LLMs, external data sources, memory, and tools, into cohesive workflows. It enables developers to build complex applications by chaining together prompts, retrieval systems (e.g., for RAG), and memory modules to maintain context across interactions.",
      topic: "Deployment",
      multiSelect: false
    },
    {
      id: 69,
      question: "What distinguishes BLEU scores from ROUGE scores when evaluating natural language processing models?",
      options: [
        "BLEU scores determine the fluency of text generation, while ROUGE scores rate the uniqueness of generated text.",
        "BLEU scores analyze syntactic structures, while ROUGE scores evaluate semantic accuracy.",
        "BLEU scores evaluate the precision of translations, while ROUGE scores focus on the recall of summarized text.",
        "BLEU scores measure model efficiency, whereas ROUGE scores assess computational complexity."
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "BLEU primarily measures the precision of n-gram overlaps between generated and reference translations, making it suitable for assessing translation quality. ROUGE focuses on recall, measuring the overlap of n-grams, longest common subsequences, or skip-bigrams between generated and reference summaries, making it ideal for summarization tasks. Neither metric evaluates fluency, uniqueness, syntax, semantics, efficiency, or complexity directly.",
      topic: "Model Evaluation",
      multiSelect: false
    },
    {
      id: 70,
      question: "What are some methods to overcome limited throughput between CPU and GPU? (Pick the 2 correct responses)",
      options: [
        "Increase the clock speed of the CPU.",
        "Using techniques like memory pooling.",
        "Upgrade the GPU to a higher-end model.",
        "Increase the number of CPU cores."
      ],
      correctAnswer: 1,
      correctAnswers: [1, 2],
      explanation: "Limited throughput between CPU and GPU often results from data transfer bottlenecks or inefficient resource utilization. Memory pooling techniques, such as pinned memory or unified memory, reduce data transfer overhead by optimizing how data is staged between CPU and GPU. Upgrading to a higher-end GPU provides more bandwidth and processing power to alleviate the bottleneck.",
      topic: "Deployment",
      multiSelect: true
    },
    {
      id: 71,
      question: "What is 'chunking' in Retrieval-Augmented Generation (RAG)?",
      options: [
        "Rewrite blocks of text to fill a context window.",
        "A method used in RAG to generate random text.",
        "A concept in RAG that refers to the training of large language models.",
        "A technique used in RAG to split text into meaningful segments."
      ],
      correctAnswer: 3,
      correctAnswers: [3],
      explanation: "Chunking in Retrieval-Augmented Generation refers to the process of splitting large text documents into smaller, meaningful segments (or chunks) to facilitate efficient retrieval and processing by the LLM. Chunking ensures that retrieved text fits within the model's context window and is relevant to the query, improving the quality of generated responses.",
      topic: "NLP Applications",
      multiSelect: false
    },
    {
      id: 72,
      question: "When using NVIDIA RAPIDS to accelerate data preprocessing for an LLM fine-tuning pipeline, which specific feature of RAPIDS cuDF enables faster data manipulation compared to traditional CPU-based Pandas?",
      options: [
        "Automatic parallelization of Python code across CPU cores.",
        "GPU-accelerated columnar data processing with zero-copy memory access.",
        "Integration with cloud-based storage for distributed data access.",
        "Conversion of Pandas DataFrames to SQL tables for faster querying."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "NVIDIA RAPIDS cuDF is a GPU-accelerated library that mimics Pandas' API but performs data manipulation on GPUs, significantly speeding up preprocessing tasks for LLM fine-tuning. The key feature is GPU-accelerated columnar data processing with zero-copy memory access, which leverages the parallel processing power of GPUs and avoids unnecessary data transfers between CPU and GPU memory.",
      topic: "Data Analysis",
      multiSelect: false
    },
    {
      id: 73,
      question: "In the context of developing an AI application using NVIDIA's NGC containers, how does the use of containerized environments enhance the reproducibility of LLM training and deployment workflows?",
      options: [
        "Containers automatically optimize the model's hyperparameters for better performance.",
        "Containers encapsulate dependencies and configurations, ensuring consistent execution across systems.",
        "Containers reduce the model's memory footprint by compressing the neural network.",
        "Containers enable direct access to GPU hardware without driver installation."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "NVIDIA's NGC containers provide pre-configured environments for AI workloads, enhancing reproducibility by encapsulating dependencies, libraries, and configurations. Containers ensure that LLM training and deployment workflows run consistently across different systems by isolating the environment from host system variations. Containers do not optimize hyperparameters, compress models, or eliminate the need for GPU drivers.",
      topic: "Software Development",
      multiSelect: false
    },
    {
      id: 74,
      question: "What type of model would you use in emotion classification tasks?",
      options: [
        "Auto-encoder model",
        "Siamese model",
        "Encoder model",
        "SVM model"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Encoder models, such as those based on transformer architectures (e.g., BERT, RoBERTa), are well-suited for emotion classification tasks because they generate contextualized representations of input text, capturing semantic and syntactic information for downstream classification. Auto-encoders are for unsupervised learning or reconstruction, Siamese models are for similarity tasks, and SVMs are traditional ML models less effective than modern encoders for NLP.",
      topic: "NLP Applications",
      multiSelect: false
    },
    {
      id: 75,
      question: "What is a Tokenizer in Large Language Models (LLM)?",
      options: [
        "A method to remove stop words and punctuation marks from text data.",
        "A machine learning algorithm that predicts the next word/token in a sequence of text.",
        "A tool used to split text into smaller units called tokens for analysis and processing.",
        "A technique used to convert text data into numerical representations called tokens for machine learning."
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "A tokenizer in the context of large language models is a tool that splits text into smaller units called tokens (e.g., words, subwords, or characters) for processing by the model. Algorithms like WordPiece, Byte-Pair Encoding (BPE), or SentencePiece break text into manageable units to handle vocabulary constraints and out-of-vocabulary words. Removing stop words is a separate preprocessing step, and converting text to numerical representations is the role of embeddings.",
      topic: "Data Preprocessing",
      multiSelect: false
    },
    {
      id: 76,
      question: "In the context of machine learning model deployment, how can Docker be utilized to enhance the process?",
      options: [
        "To automatically generate features for machine learning models.",
        "To provide a consistent environment for model training and inference.",
        "To reduce the computational resources needed for training models.",
        "To directly increase the accuracy of machine learning models."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Docker is a containerization platform that ensures consistent environments for machine learning model training and inference by packaging dependencies, libraries, and configurations into portable containers. This eliminates environment discrepancies between development and production, ensuring reproducibility. Docker does not generate features, reduce computational requirements, or affect model accuracy.",
      topic: "Deployment",
      multiSelect: false
    },
    {
      id: 77,
      question: "In the context of a natural language processing application, which approach is most effective for implementing zero-shot learning to classify text data into categories that were not seen during training?",
      options: [
        "Use rule-based systems to manually define the characteristics of each category.",
        "Use a large, labeled dataset for each possible category.",
        "Train the new model from scratch for each new category encountered.",
        "Use a pre-trained language model with semantic embeddings."
      ],
      correctAnswer: 3,
      correctAnswers: [3],
      explanation: "Pre-trained language models (e.g., BERT, GPT) with semantic embeddings are highly effective for zero-shot learning because they encode general linguistic knowledge and can generalize to new tasks by leveraging semantic similarity. Rule-based systems lack scalability, using labeled data contradicts zero-shot learning, and training from scratch is impractical and defeats the purpose.",
      topic: "Language Models",
      multiSelect: false
    },
    {
      id: 78,
      question: "When comparing and contrasting the ReLU and sigmoid activation functions, which statement is true?",
      options: [
        "ReLU is a linear function while sigmoid is non-linear.",
        "ReLU is less computationally efficient than sigmoid, but it is more accurate than sigmoid.",
        "ReLU and sigmoid both have a range of 0 to 1.",
        "ReLU is more computationally efficient, but sigmoid is better for predicting probabilities."
      ],
      correctAnswer: 3,
      correctAnswers: [3],
      explanation: "ReLU (Rectified Linear Unit), defined as f(x) = max(0, x), is computationally efficient because it involves simple thresholding, avoiding expensive exponential calculations required by sigmoid, f(x) = 1/(1 + e^(-x)). Sigmoid outputs values in the range [0, 1], making it suitable for predicting probabilities in binary classification tasks. ReLU has an unbounded positive range [0, infinity), making it less suited for direct probability prediction but effective at mitigating vanishing gradient issues. ReLU is non-linear (piecewise linear), not linear.",
      topic: "Training Techniques",
      multiSelect: false
    },
    {
      id: 79,
      question: "Transformers are useful for language modeling because their architecture is uniquely suited for handling which of the following?",
      options: [
        "Long sequences",
        "Embeddings",
        "Class tokens",
        "Translations"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "The transformer architecture is particularly effective for language modeling due to its ability to handle long sequences. Unlike RNNs, which struggle with long-term dependencies due to sequential processing, transformers use self-attention mechanisms to process all tokens simultaneously, capturing relationships across long distances. Embeddings are a component, class tokens are specific to certain models like BERT, and translations are an application rather than a structural advantage.",
      topic: "Transformer Architecture",
      multiSelect: false
    },
    {
      id: 80,
      question: "You have access to training data but no access to test data. What evaluation method can you use to assess the performance of your AI model?",
      options: [
        "Cross-validation",
        "Randomized controlled trial",
        "Average entropy approximation",
        "Greedy decoding"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "When test data is unavailable, cross-validation is the most effective method to assess an AI model's performance using only the training dataset. Cross-validation involves splitting the training data into multiple subsets (folds), training the model on some folds, and validating it on others, repeating this process to estimate generalization performance. Randomized controlled trials are clinical methods, average entropy approximation is not a standard evaluation method, and greedy decoding is a generation strategy.",
      topic: "Model Evaluation",
      multiSelect: false
    },
    {
      id: 81,
      question: "Which principle of Trustworthy AI primarily concerns the ethical implications of AI's impact on society and includes considerations for both potential misuse and unintended consequences?",
      options: [
        "Certification",
        "Data Privacy",
        "Accountability",
        "Legal Responsibility"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Accountability is a core principle of Trustworthy AI that addresses the ethical implications of AI's societal impact, including potential misuse and unintended consequences. It ensures that AI systems are transparent, responsible, and answerable for their outcomes, including mitigating risks of bias and ensuring fairness. Certification refers to compliance processes, Data Privacy focuses on protecting user data, and Legal Responsibility is related but narrower in scope.",
      topic: "Ethics & Alignment",
      multiSelect: false
    },
    {
      id: 82,
      question: "Which tool would you use to select training data with specific keywords?",
      options: [
        "ActionScript",
        "Tableau dashboard",
        "JSON parser",
        "Regular expression filter"
      ],
      correctAnswer: 3,
      correctAnswers: [3],
      explanation: "Regular expression (regex) filters are widely used in data preprocessing to select text data containing specific keywords or patterns. A regex pattern can efficiently filter datasets based on textual criteria, enabling targeted data curation. ActionScript is a multimedia programming language, Tableau is for visualization, and JSON parsers handle structured data rather than keyword-based text selection.",
      topic: "Data Preprocessing",
      multiSelect: false
    },
    {
      id: 83,
      question: "Which of the following claims is correct about quantization in the context of Deep Learning? (Pick the 2 correct responses)",
      options: [
        "Quantization might help in saving power and reducing heat production.",
        "It consists of removing a quantity of weights whose values are zero.",
        "It leads to a substantial loss of model accuracy.",
        "Helps reduce memory requirements and achieve better cache utilization.",
        "It only involves reducing the number of bits of the parameters."
      ],
      correctAnswer: 0,
      correctAnswers: [0, 3],
      explanation: "Quantization in deep learning involves reducing the precision of model weights and activations (e.g., from 32-bit floating-point to 8-bit integers) to optimize performance. It reduces power consumption and heat production by lowering computational intensity, and it helps reduce memory requirements while achieving better cache utilization. Removing zero-valued weights is pruning, not quantization. Quantization typically causes only a small accuracy loss, not a substantial one.",
      topic: "Model Optimization",
      multiSelect: true
    },
    {
      id: 84,
      question: "In the context of evaluating a fine-tuned LLM for a text classification task, which experimental design technique ensures robust performance estimation when dealing with imbalanced datasets?",
      options: [
        "Single hold-out validation with a fixed test set.",
        "Stratified k-fold cross-validation.",
        "Bootstrapping with random sampling.",
        "Grid search for hyperparameter tuning."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Stratified k-fold cross-validation is a robust experimental design technique for evaluating machine learning models, especially on imbalanced datasets. It divides the dataset into k folds while preserving the class distribution in each fold, ensuring that the model is evaluated on representative samples of all classes. Single hold-out validation is less robust, bootstrapping introduces variability, and grid search is for hyperparameter tuning rather than performance estimation.",
      topic: "Model Evaluation",
      multiSelect: false
    },
    {
      id: 85,
      question: "You are working on a fraud detection model for a financial institution. The dataset contains 10,000 transactions, with only 2% labeled as fraudulent. Which technique would be most effective for handling this class imbalance?",
      options: [
        "Increase the learning rate to prioritize minority class learning.",
        "Apply SMOTE (Synthetic Minority Over-sampling Technique) to generate synthetic fraudulent transaction examples.",
        "Use a larger batch size during training to ensure both classes are represented.",
        "Reduce the number of features in the dataset to simplify the model."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "SMOTE generates synthetic examples of the minority class (fraudulent transactions) by interpolating between existing minority samples, creating a more balanced dataset without losing information. Increasing learning rate, batch size, or reducing features do not directly address the core problem of class imbalance.",
      topic: "Data Preprocessing",
      multiSelect: false
    },
    {
      id: 86,
      question: "You are preparing a dataset to train a neural network. The features in your dataset have different scales: one feature ranges from 0-1, another from 0-1000. Which NumPy function would be most appropriate to normalize these features?",
      options: [
        "np.random.shuffle()",
        "np.linalg.norm()",
        "np.interp()",
        "np.clip()"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "np.linalg.norm() computes vector norms, which can be used to normalize feature vectors so all features fall on a comparable scale. np.random.shuffle() randomizes order, np.interp() interpolates values, and np.clip() truncates values to a range but doesn't normalize them.",
      topic: "Data Preprocessing",
      multiSelect: false
    },
    {
      id: 87,
      question: "As a data scientist analyzing a transformer model's behavior, you need to visualize the attention weights across different heads. Which visualization would best help you understand which tokens attend to each other?",
      options: [
        "Bar chart of average attention weights.",
        "Scatter plot of Query vs Key vectors.",
        "Heatmap showing attention scores between all token pairs for each head.",
        "Line graph of attention weight changes across layers."
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "A heatmap of attention scores between all token pairs provides the most comprehensive view of which tokens the model focuses on when processing each token. It reveals patterns like syntactic or semantic relationships across different attention heads. Bar charts, scatter plots, and line graphs offer less detailed views of token-to-token attention dynamics.",
      topic: "Data Analysis",
      multiSelect: false
    },
    {
      id: 88,
      question: "You need to develop a multilingual customer support chatbot that can understand queries in English, Spanish, and Mandarin. Which model selection approach would be most effective?",
      options: [
        "Train separate monolingual models for each language and route queries accordingly.",
        "Use a pre-trained multilingual model like mBERT or XLM-RoBERTa and fine-tune on your multilingual support data.",
        "Train a single English model and use machine translation for other languages.",
        "Use a rule-based system with multilingual dictionaries."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Pre-trained multilingual models like mBERT or XLM-RoBERTa have been trained on text from many languages and capture cross-lingual representations. Fine-tuning on domain-specific multilingual data is the most effective approach, as it leverages shared linguistic knowledge across languages while adapting to the specific customer support domain.",
      topic: "Language Models",
      multiSelect: false
    },
    {
      id: 89,
      question: "You're working with a large e-commerce dataset containing over 50 million transaction records. You need to perform complex joins and aggregations. Which NVIDIA RAPIDS component would best accelerate this task?",
      options: [
        "cuML for machine learning operations.",
        "cuGraph for graph analytics.",
        "cuDF for GPU-accelerated dataframe operations.",
        "cuSignal for signal processing."
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "cuDF is the RAPIDS component specifically designed for GPU-accelerated dataframe operations, including complex joins and aggregations on large datasets. It provides a Pandas-like API accelerated by CUDA for massive throughput. cuML handles ML algorithms, cuGraph handles graph analytics, and cuSignal handles signal processing.",
      topic: "Data Analysis",
      multiSelect: false
    },
    {
      id: 90,
      question: "You are fine-tuning a sentiment analysis model and notice that the model performs well on positive and negative sentiments but poorly on neutral sentiment. The training data shows that neutral examples make up only 5% of the dataset. Which approach would best address this?",
      options: [
        "Remove neutral examples to simplify the classification task to binary.",
        "Apply loss function weighting to give higher importance to neutral class predictions.",
        "Increase the model size to capture more nuanced patterns.",
        "Reduce the learning rate to make the model converge more slowly."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Loss function weighting assigns higher penalties for misclassifying underrepresented classes (neutral sentiment), forcing the model to pay more attention to these examples during training. Removing neutral examples eliminates a valid category, larger models don't solve imbalance, and lower learning rates don't address class distribution issues.",
      topic: "Fine-tuning",
      multiSelect: false
    },
    {
      id: 91,
      question: "You're training a deep neural network for image classification and notice the model performs significantly better on the training set than the validation set. Which regularization technique would be most effective for addressing this?",
      options: [
        "Increase the number of layers in the network.",
        "Apply dropout with a rate of 0.5 to hidden layers.",
        "Use a larger learning rate to escape local minima.",
        "Add more training data augmentation without any regularization."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "The performance gap between training and validation indicates overfitting. Dropout with a rate of 0.5 randomly sets half of the hidden layer neurons to zero during training, forcing the network to learn more robust features that generalize better. Adding layers increases complexity (worsening overfitting), larger learning rates cause instability, and augmentation alone without regularization may not sufficiently address the issue.",
      topic: "Training Techniques",
      multiSelect: false
    },
    {
      id: 92,
      question: "You're building an AI-powered application that needs to make asynchronous API calls to multiple language model endpoints. Which Python approach would best handle concurrent requests while managing timeout and error handling?",
      options: [
        "Use sequential requests with try-except blocks for each call.",
        "Use asyncio with aiohttp for concurrent API calls with timeout handling.",
        "Use multiprocessing to spawn separate processes for each API call.",
        "Use a simple for loop with the requests library and sleep intervals."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "asyncio with aiohttp provides efficient asynchronous I/O-bound concurrency, ideal for making multiple API calls simultaneously without blocking. It handles timeouts and errors gracefully through async/await patterns. Sequential requests are slow, multiprocessing is overkill for I/O-bound tasks, and a for loop with sleep is the least efficient approach.",
      topic: "Software Development",
      multiSelect: false
    },
    {
      id: 93,
      question: "You are developing an AI recruitment tool for a large corporation. During testing, you discover the model shows bias against certain demographic groups. Which approach would be most appropriate for ensuring fair AI practices?",
      options: [
        "Deploy the model as-is and monitor for complaints.",
        "Remove all demographic information from the training data only.",
        "Implement bias detection metrics and apply debiasing techniques such as adversarial debiasing, then conduct regular fairness audits.",
        "Limit the model's use to only demographic groups where it performs well."
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "A comprehensive approach combining bias detection metrics, debiasing techniques (like adversarial debiasing), and regular fairness audits ensures the model is equitable. Simply removing demographic features may not eliminate proxy bias, deploying biased models is unethical, and limiting use groups does not solve the fundamental issue.",
      topic: "Ethics & Alignment",
      multiSelect: false
    },
    {
      id: 94,
      question: "You are building a data preprocessing pipeline for a large-scale image dataset. The pipeline needs to apply complex transformations (resizing, normalization, augmentation) to millions of images. Which approach would be most efficient?",
      options: [
        "Process images sequentially using PIL/Pillow on CPU.",
        "Use GPU-accelerated preprocessing with NVIDIA DALI for parallel image transformations.",
        "Load all images into memory first, then apply transformations.",
        "Use basic NumPy operations for all image manipulations."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "NVIDIA DALI (Data Loading Library) is specifically designed for GPU-accelerated data preprocessing pipelines, providing parallel image loading and transformation that significantly outperforms CPU-based approaches. Sequential PIL processing is slow, loading everything to memory is impractical for millions of images, and NumPy lacks GPU acceleration for image operations.",
      topic: "Data Analysis",
      multiSelect: false
    },
    {
      id: 95,
      question: "You have deployed an LLM-based customer service chatbot. After 3 months, user satisfaction has dropped due to the model providing outdated information. Which approach would best address this while maintaining model quality?",
      options: [
        "Retrain the entire model from scratch with updated data every month.",
        "Implement a continuous fine-tuning pipeline with user feedback and updated knowledge bases.",
        "Replace the model with a rule-based system for more controlled responses.",
        "Simply increase the model temperature to generate more diverse responses."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "A continuous fine-tuning pipeline incorporating user feedback and updated knowledge bases allows the model to stay current while maintaining quality. Full retraining is expensive and slow, rule-based systems lack the flexibility of LLMs, and increasing temperature adds randomness rather than accuracy.",
      topic: "Fine-tuning",
      multiSelect: false
    },
    {
      id: 96,
      question: "You are building a question-answering system that needs to provide accurate answers from a large corporate knowledge base of 100,000+ documents. Which combination of techniques would most effectively enhance your RAG pipeline? (Pick the 2 correct responses)",
      options: [
        "Use a basic keyword search for document retrieval.",
        "Fine-tune the embedding model on domain-specific corporate documents.",
        "Implement a vector database with semantic search for efficient retrieval.",
        "Rely solely on the LLM's parametric knowledge without retrieval."
      ],
      correctAnswer: 1,
      correctAnswers: [1, 2],
      explanation: "Fine-tuning the embedding model on domain-specific documents improves retrieval relevance, and using a vector database with semantic search enables efficient similarity-based retrieval from large document collections. Keyword search is less precise for semantic queries, and relying solely on parametric knowledge leads to outdated or hallucinated answers.",
      topic: "NLP Applications",
      multiSelect: true
    },
    {
      id: 97,
      question: "You are building a text classification pipeline for customer reviews. Which combination of preprocessing steps using Python NLP libraries would be most effective?",
      options: [
        "Use only regex for tokenization and classification.",
        "Apply spaCy for tokenization and lemmatization, then use scikit-learn's TF-IDF vectorizer for feature extraction.",
        "Use NLTK for sentiment analysis without any preprocessing.",
        "Apply basic string splitting and feed raw text directly to the model."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Using spaCy for linguistic preprocessing (tokenization, lemmatization) combined with scikit-learn's TF-IDF vectorizer creates a robust feature extraction pipeline. spaCy handles text normalization while TF-IDF captures term importance. Regex alone is insufficient, skipping preprocessing reduces accuracy, and raw text feeding ignores linguistic structure.",
      topic: "Data Preprocessing",
      multiSelect: false
    },
    {
      id: 98,
      question: "You are developing a machine learning model to predict customer behavior in an e-commerce platform. The dataset has 200 features. Which approach would be most effective for feature selection to improve model performance?",
      options: [
        "Use all 200 features to maximize the amount of information.",
        "Randomly select a subset of features to reduce dimensionality.",
        "Apply Recursive Feature Elimination (RFE) to identify the most predictive features.",
        "Use only the first 10 features in the dataset alphabetically."
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Recursive Feature Elimination (RFE) systematically removes less important features by training the model, ranking features by importance, and removing the least important ones iteratively. This produces an optimal subset of predictive features. Using all features risks overfitting, random selection is arbitrary, and alphabetical selection has no statistical basis.",
      topic: "Data Preprocessing",
      multiSelect: false
    },
    {
      id: 99,
      question: "You are building an AI model for a financial trading platform that needs to make predictions about stock price movements. The model needs to account for uncertainty in its predictions. Which approach would best address this requirement?",
      options: [
        "Use a simple regression model and report point estimates.",
        "Add a probabilistic layer to your neural network that outputs prediction distributions rather than single values.",
        "Round all predictions to the nearest whole number.",
        "Use ensemble averaging of multiple identical models."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "A probabilistic layer outputs prediction distributions (mean and variance) rather than single point estimates, allowing the system to quantify uncertainty. This is crucial for financial applications where understanding prediction confidence informs risk management. Point estimates lack uncertainty information, rounding removes precision, and identical model ensembles don't capture epistemic uncertainty well.",
      topic: "Deployment",
      multiSelect: false
    },
    {
      id: 100,
      question: "You are optimizing an LLM for deployment on edge devices with limited computational resources. The current model has 7 billion parameters and needs to achieve sub-100ms latency. Which optimization strategy would be most effective?",
      options: [
        "Increase the batch size to process more tokens simultaneously.",
        "Use model distillation to create a smaller model, then apply quantization to reduce precision to INT4/INT8.",
        "Simply reduce the number of transformer layers without any other optimization.",
        "Deploy the full model and increase the device's cooling capacity."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Combining model distillation (training a smaller student model from the larger teacher) with quantization (reducing numerical precision to INT4/INT8) provides the most significant size and latency reduction while maintaining acceptable performance. Larger batch sizes increase memory usage, naively removing layers degrades quality, and cooling doesn't reduce computational requirements.",
      topic: "Model Optimization",
      multiSelect: false
    },
    {
      id: 101,
      question: "You have deployed an LLM-based code review tool that occasionally flags correct code as buggy (false positives). Which approach would most effectively reduce these false positives while maintaining detection accuracy?",
      options: [
        "Increase the model temperature to generate more varied responses.",
        "Remove the model and use only rule-based static analysis.",
        "Add a secondary validation layer that cross-references flagged issues with known code patterns and unit test results.",
        "Simply increase the confidence threshold, ignoring all low-confidence predictions."
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "A secondary validation layer that cross-references with known patterns and test results adds a verification step that filters false positives while retaining true bugs. Higher temperature increases randomness, pure rule-based systems miss subtle issues, and raising the confidence threshold alone may miss genuine bugs.",
      topic: "Deployment",
      multiSelect: false
    },
    {
      id: 102,
      question: "You are building an LLM-powered virtual assistant that needs to maintain context across long multi-turn conversations. The model has a 4096-token context window. Which approach would best handle conversations that exceed this limit?",
      options: [
        "Simply truncate older messages when the context window is full.",
        "Implement a sliding window mechanism with summarization of older context to maintain conversation coherence.",
        "Restart the conversation when the context limit is reached.",
        "Increase the temperature to compensate for lost context."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "A sliding window with summarization condenses older conversation turns into summaries while keeping recent messages in full, maintaining coherence within the limited context window. Simple truncation loses important context, restarting disrupts conversations, and temperature has nothing to do with context management.",
      topic: "Deployment",
      multiSelect: false
    },
    {
      id: 103,
      question: "You need to cluster a large collection of unlabeled customer support tickets into meaningful categories. Which approach would be most effective?",
      options: [
        "Manually read each ticket and assign categories.",
        "Use regex pattern matching to categorize tickets by keywords.",
        "Generate text embeddings using a pre-trained model, then apply KMeans clustering to identify natural groupings.",
        "Sort tickets alphabetically and divide them into equal-sized groups."
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Generating embeddings with a pre-trained model captures semantic meaning of tickets, and KMeans clustering groups semantically similar tickets together without needing labels. Manual categorization doesn't scale, regex misses semantic nuance, and alphabetical sorting has no semantic basis.",
      topic: "Data Analysis",
      multiSelect: false
    },
    {
      id: 104,
      question: "You are developing a Named Entity Recognition (NER) system for medical records using spaCy. Which combination of techniques would best improve entity recognition accuracy? (Pick the 2 correct responses)",
      options: [
        "Use only spaCy's default English model without any customization.",
        "Apply NumPy's vectorized operations for efficient batch processing of text features.",
        "Fine-tune spaCy's NER model on a domain-specific medical annotated dataset.",
        "Use basic string matching for all entity detection."
      ],
      correctAnswer: 1,
      correctAnswers: [1, 2],
      explanation: "NumPy's vectorized operations enable efficient batch processing of text features at scale, and fine-tuning spaCy's NER on domain-specific annotated medical data teaches the model to recognize specialized medical entities. Default models lack medical domain knowledge, and basic string matching is too rigid for the variability of medical terminology.",
      topic: "NLP Applications",
      multiSelect: true
    },
    {
      id: 105,
      question: "You are developing an AI system that processes personal health records. Which data handling approach would best ensure compliance with privacy regulations while maintaining model effectiveness?",
      options: [
        "Store all data in plain text for easy access.",
        "Implement data anonymization techniques, including de-identification of personal information and differential privacy during model training.",
        "Only collect data from users who provide verbal consent.",
        "Use data encryption at rest only, without any anonymization."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Data anonymization through de-identification (removing PII) combined with differential privacy during training provides comprehensive privacy protection while allowing the model to learn patterns from the data. Plain text storage is insecure, verbal consent alone is insufficient, and encryption at rest without anonymization still exposes data during processing.",
      topic: "Ethics & Alignment",
      multiSelect: false
    },
    {
      id: 106,
      question: "You are developing a healthcare AI system that needs to make treatment recommendations. Which approach would best ensure the model makes ethical and unbiased recommendations across different patient demographics?",
      options: [
        "Train the model exclusively on data from the largest demographic group for consistency.",
        "Build the training dataset to include diverse, representative patient demographics, and implement regular bias audits on the model's outputs.",
        "Deploy the model without bias testing to get it to market faster.",
        "Use only clinical trial data, which may not reflect real-world patient diversity."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "A diverse, representative training dataset combined with regular bias audits ensures equitable treatment recommendations across demographics. Training on a single group introduces bias, skipping bias testing is irresponsible for healthcare AI, and clinical trial data alone may not reflect real-world diversity.",
      topic: "Ethics & Alignment",
      multiSelect: false
    },
    {
      id: 107,
      question: "You are designing a chatbot for a travel agency that needs to handle dynamic, multi-turn conversations about trip planning. Which architecture would be most suitable for maintaining context and generating coherent responses?",
      options: [
        "A rule-based chatbot with predefined conversation flows.",
        "A transformer-based architecture with attention mechanisms for context retention across conversation turns.",
        "A simple bag-of-words model for intent classification only.",
        "A recurrent neural network without attention mechanisms."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Transformer-based architectures with attention mechanisms excel at maintaining context across multi-turn conversations by attending to all previous relevant tokens. Rule-based systems lack flexibility, bag-of-words loses word order, and RNNs without attention struggle with long-range dependencies in extended conversations.",
      topic: "Transformer Architecture",
      multiSelect: false
    },
    {
      id: 108,
      question: "You are building an image generation system using a diffusion model. During the denoising process, the model needs to iteratively refine a noisy image into a coherent output. Which description best captures what happens at each denoising step?",
      options: [
        "The model adds more noise to explore a wider variety of possible outputs.",
        "The model predicts and removes a portion of noise, gradually revealing the underlying image structure.",
        "The model compresses the image to reduce dimensionality before reconstruction.",
        "The model applies a fixed filter to sharpen the image at each step."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "At each denoising step, the diffusion model predicts the noise component in the current image and removes it, progressively uncovering the image structure. This iterative refinement from pure noise to coherent output is the core of reverse diffusion. Adding noise is the forward process, compression is unrelated, and a fixed filter doesn't adapt to content.",
      topic: "Training Techniques",
      multiSelect: false
    },
    {
      id: 109,
      question: "A startup needs to deploy a multilingual chatbot capable of handling 10+ languages with real-time response requirements. Their budget is limited. Which deployment approach would be most cost-effective while maintaining quality?",
      options: [
        "Build custom models for each language from scratch.",
        "Use a cloud-based LLM API with GPU acceleration and a multilingual model, combined with caching for common queries.",
        "Deploy separate servers for each language in different regions.",
        "Use a single CPU-based server with a monolingual model."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "A cloud-based LLM API with GPU acceleration and a multilingual model provides cost-effective scalability, and caching common queries reduces API calls and latency. Building custom models is expensive, separate servers per language is overengineered, and a CPU monolingual server can't handle the requirements.",
      topic: "Deployment",
      multiSelect: false
    },
    {
      id: 110,
      question: "You are building a RAG-based legal document analysis system. The system needs to retrieve relevant legal clauses from a database of contracts. Which approach would most effectively improve retrieval accuracy?",
      options: [
        "Use generic word embeddings trained on Wikipedia data.",
        "Fine-tune the embedding model on a corpus of legal documents to capture domain-specific terminology and relationships.",
        "Use keyword matching with legal terms only.",
        "Index documents by their creation date for chronological retrieval."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Fine-tuning embeddings on legal documents teaches the model to understand domain-specific terminology, clause structures, and legal relationships, significantly improving retrieval precision. Generic embeddings miss legal nuances, keyword matching is too rigid, and date-based indexing is irrelevant to semantic content.",
      topic: "Fine-tuning",
      multiSelect: false
    },
    {
      id: 111,
      question: "You are deploying an LLM for a real-time language translation service in a mobile app. Users in remote areas experience high latency. Which optimization would most effectively reduce response time?",
      options: [
        "Increase the server's RAM to handle more concurrent requests.",
        "Deploy a smaller, optimized model on edge computing devices closer to users.",
        "Switch to a larger model for better translation quality.",
        "Add more logging to track the source of latency."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Deploying a smaller, optimized model on edge computing devices reduces network latency by processing translations closer to users rather than routing to distant servers. More RAM doesn't reduce network latency, larger models increase processing time, and logging is diagnostic rather than a solution.",
      topic: "Deployment",
      multiSelect: false
    },
    {
      id: 112,
      question: "You are building a data preprocessing pipeline for a machine learning model that predicts customer behavior. The dataset contains numerical features (age, income) and categorical features (region, product_category). Which combination of preprocessing steps would be most appropriate? (Pick the 2 correct responses)",
      options: [
        "Apply standard text tokenization to all features regardless of type.",
        "Normalize numerical features using Min-Max scaling or StandardScaler.",
        "Apply one-hot encoding to categorical features (region, product_category).",
        "Convert all features to string format for uniformity."
      ],
      correctAnswer: 1,
      correctAnswers: [1, 2],
      explanation: "Normalizing numerical features ensures they are on comparable scales for model training, and one-hot encoding converts categorical features into binary vectors the model can process. Text tokenization is for NLP data, not structured features, and converting everything to strings loses numerical information.",
      topic: "Data Preprocessing",
      multiSelect: true
    },
    {
      id: 113,
      question: "What is Generative AI?",
      options: [
        "A type of AI focused on classifying existing data into categories.",
        "A type of AI that can create new content, such as text, images, audio, and video, based on patterns learned from training data.",
        "A type of AI focused on optimizing hardware performance.",
        "A type of AI that is exclusively used for data analysis and visualization."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Generative AI refers to AI systems capable of creating new content (text, images, audio, video, code) by learning patterns and structures from training data. Unlike discriminative models that classify or predict, generative models produce novel outputs. It is not limited to classification, hardware optimization, or data visualization.",
      topic: "Language Models",
      multiSelect: false
    },
      {
      id: 114,
      question: "Why do we need positional encoding in transformer-based models?",
      options: [
        "To represent the order of elements in a sequence.",
        "To prevent overfitting of the model.",
        "To reduce the dimensionality of the input data.",
        "To increase the throughput of the model."
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Positional encoding is a critical component in transformer-based models because, unlike recurrent neural networks (RNNs), transformers process input sequences in parallel and lack an inherent sense of word order. Positional encoding addresses this by embedding information about the position of each token in the sequence, enabling the model to understand the sequential relationships between tokens. According to the original transformer paper ('Attention is All You Need' by Vaswani et al., 2017), positional encodings are added to the input embeddings to provide the model with information about the relative or absolute position of tokens. NVIDIA's documentation on transformer-based models, such as those supported by the NeMo framework, emphasizes that positional encodings are typically implemented using sinusoidal functions or learned embeddings to preserve sequence order, which is essential for tasks like natural language processing (NLP). Options B, C, and D are incorrect because positional encoding does not address overfitting, dimensionality reduction, or throughput directly; these are handled by other techniques like regularization, dimensionality reduction methods, or hardware optimization.",
      topic: "Training Techniques",
      multiSelect: false
      },
      {
      id: 115,
      question: "What is Retrieval Augmented Generation (RAG)?",
      options: [
        "RAG is an architecture used to optimize the output of an LLM by retraining the model with domain-specific data.",
        "RAG is a methodology that combines an information retrieval component with a response generator.",
        "RAG is a method for manipulating and generating text-based data using Transformer-based LLMs.",
        "RAG is a technique used to fine-tune pre-trained LLMs for improved performance."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Retrieval-Augmented Generation (RAG) is a methodology that enhances the performance of large language models (LLMs) by integrating an information retrieval component with a generative model. As described in the seminal paper by Lewis et al. (2020), RAG retrieves relevant documents from an external knowledge base (e.g., using dense vector representations) and uses them to inform the generative process, enabling more accurate and contextually relevant responses. NVIDIA's documentation on generative AI workflows, particularly in the context of NeMo and Triton Inference Server, highlights RAG as a technique to improve LLM outputs by grounding them in external data, especially for tasks requiring factual accuracy or domain-specific knowledge. Option A is incorrect because RAG does not involve retraining the model but rather augments it with retrieved data. Option C is too vague and does not capture the retrieval aspect, while Option D refers to fine-tuning, which is a separate process.",
      topic: "NLP Applications",
      multiSelect: false
      },
      {
      id: 116,
      question: "In the context of fine-tuning LLMs, which of the following metrics is most commonly used to assess the performance of a fine-tuned model?",
      options: [
        "Model size.",
        "Accuracy on a validation set.",
        "Training duration.",
        "Number of layers."
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "When fine-tuning large language models (LLMs), the primary goal is to improve the model's performance on a specific task. The most common metric for assessing this performance is accuracy on a validation set, as it directly measures how well the model generalizes to unseen data.",
      topic: "Fine-tuning",
      multiSelect: false
      }
  ]
};

// Top-level const does not create a window property. The per-track scripts
// look banks up by configurable global name, so expose this one explicitly.
if (typeof window !== "undefined") {
  window.QUESTIONS_DB = QUESTIONS_DB;
}
