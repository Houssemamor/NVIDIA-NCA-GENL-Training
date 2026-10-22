/*
 * NVIDIA NCA-AIIO practice question bank.
 *
 * All questions are original practice material written against the public
 * NVIDIA NCA-AIIO exam blueprint and NVIDIA product documentation. They are
 * not copied from NVIDIA exam content or from third-party question banks.
 *
 * Blueprint reference:
 * https://www.nvidia.com/en-us/learn/certification/ai-infrastructure-operations-associate/
 *
 * Official domain weights:
 *   Essential AI Knowledge - 38 percent
 *   AI Infrastructure      - 40 percent
 *   AI Operations          - 22 percent
 *
 * Current question counts:
 *   Essential AI Knowledge - 34
 *   AI Infrastructure      - 36
 *   AI Operations          - 20
 *
 * Additional review references:
 *   - NVIDIA NCA-AIIO Exam Study Guide (January 2026)
 *   - NVIDIA DCGM, MIG, BlueField, DOCA, GPUDirect, NCCL, and TensorRT docs
 *   - Kubernetes, Slurm, and Prometheus documentation
 */

const QUESTIONS_DB_AIIO_CORE = {
  metadata: {
    exam: "NCA-AIIO",
    examName: "NVIDIA Certified Associate: AI Infrastructure and Operations",
    totalQuestions: 90,
    source: "NVIDIA NCA-AIIO Exam Study Guide and NVIDIA product documentation",
    lastUpdated: "2026-10-22",
    domains: [
      { name: "Essential AI Knowledge", weight: 38, count: 34 },
      { name: "AI Infrastructure", weight: 40, count: 36 },
      { name: "AI Operations", weight: 22, count: 20 }
    ],
    topics: [
      "AI, ML & DL Concepts",
      "GPU vs CPU Architecture",
      "NVIDIA Software Stack",
      "NVIDIA Solutions & Use Cases",
      "Training vs Inference",
      "AI Lifecycle & Adoption",
      "GPU Systems & Scaling",
      "Power & Cooling",
      "On-Prem vs Cloud",
      "Cluster Components",
      "AI Networking",
      "Data Center Protocols",
      "DPUs",
      "Data Center Monitoring",
      "Orchestration & Scheduling",
      "GPU Monitoring",
      "Virtualization"
    ]
  },
  questions: [
    // ---------------------------------------------------------------
    // Essential AI Knowledge: AI, ML and DL concepts
    // ---------------------------------------------------------------
    {
      id: 1,
      question: "Which statement correctly describes the relationship between AI, machine learning, and deep learning?",
      options: [
        "AI is the broad field, machine learning is a subset that learns from data, and deep learning is a subset of machine learning that uses multi-layer neural networks",
        "AI, machine learning, and deep learning are three unrelated technical fields",
        "Machine learning is the broadest field, AI is a subset of machine learning, and deep learning is a subset of AI",
        "Deep learning is the broadest field, while AI and machine learning are both subsets of deep learning"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "AI is the umbrella discipline concerned with intelligent behavior. Machine learning is the subset in which systems learn patterns from data instead of following only hand-written rules. Deep learning is a further subset of machine learning built on neural networks with many layers.",
      topic: "AI, ML & DL Concepts",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 2,
      question: "A team trains a model on thousands of images, and each image is labeled with its correct class. Which learning paradigm is this?",
      options: [
        "Unsupervised learning",
        "Reinforcement learning",
        "Supervised learning",
        "Self-supervised learning"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Supervised learning uses labeled input-output pairs, so the model learns to map each input to a known target. Unsupervised learning works without labels, and reinforcement learning learns from rewards and penalties rather than a fixed labeled dataset.",
      topic: "AI, ML & DL Concepts",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 3,
      question: "A retailer wants to group customers by purchasing behavior without using predefined segments or labels. Which approach fits best?",
      options: [
        "Supervised classification",
        "Unsupervised clustering",
        "Reinforcement learning",
        "Rule-based regression"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Clustering is an unsupervised learning technique that discovers groups in unlabeled data. Because no predefined segment labels exist, classification is not appropriate, and reinforcement learning requires an environment that returns rewards.",
      topic: "AI, ML & DL Concepts",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 4,
      question: "Which description best matches reinforcement learning?",
      options: [
        "A model learns from a fixed set of labeled examples",
        "An agent learns a policy by taking actions and receiving rewards or penalties from an environment",
        "A model compresses data by removing redundant columns",
        "A model groups unlabeled records by similarity"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Reinforcement learning trains an agent through interaction with an environment. The agent selects actions, observes resulting states, and adjusts its policy to maximize cumulative reward. Labeled examples and clustering describe other paradigms.",
      topic: "AI, ML & DL Concepts",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 5,
      question: "Which statement about generative AI is accurate?",
      options: [
        "It only retrieves stored documents and cannot produce new content",
        "It learns patterns in training data and can generate new text, images, audio, or other content",
        "It requires a hand-written rule for every possible output",
        "It is limited to tabular data and cannot model language"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Generative models learn the statistical structure of training data and sample from that learned distribution to create new content. Retrieval-augmented systems may add documents at run time, but generation itself is not simple retrieval, and the approach is not limited to tables.",
      topic: "AI, ML & DL Concepts",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // Essential AI Knowledge: GPU vs CPU architecture
    // ---------------------------------------------------------------
    {
      id: 6,
      question: "Why are GPUs generally preferred over CPUs for deep learning training?",
      options: [
        "GPUs run at much higher clock speeds than server CPUs",
        "GPUs execute thousands of parallel operations, which suits matrix and tensor math",
        "GPUs always have more system memory than CPUs",
        "GPUs run the operating system more efficiently than CPUs"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Deep learning is dominated by dense matrix and tensor operations that can be split into many independent calculations. A GPU has thousands of cores designed for parallel throughput, while a CPU has fewer, more complex cores optimized for sequential and branch-heavy work. GPUs typically run at lower clock speeds and do not hold more memory than the host system.",
      topic: "GPU vs CPU Architecture",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 7,
      question: "Which workload characteristic favors a CPU over a GPU?",
      options: [
        "Massive matrix multiplication with high data parallelism",
        "Branch-heavy, low-latency sequential logic with complex control flow",
        "Training a large transformer across thousands of GPU cores",
        "Rendering millions of independent pixels in parallel"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "CPUs are optimized for low-latency execution of complex, branch-heavy code and for managing system resources. GPUs excel when the same operation can be applied to many data elements at once, which is why matrix math, rendering, and neural network training map well to GPUs.",
      topic: "GPU vs CPU Architecture",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 8,
      question: "What is the primary role of NVIDIA Tensor Cores?",
      options: [
        "To store the GPU firmware and boot configuration",
        "To accelerate mixed-precision matrix multiply-accumulate operations used by AI",
        "To provide network connectivity between GPU nodes",
        "To manage power delivery to the GPU"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Tensor Cores are specialized execution units that perform matrix multiply-accumulate operations at high throughput, especially in lower precisions such as FP16, BF16, and FP8. They are central to modern deep learning performance. Firmware, networking, and power delivery are handled by other components.",
      topic: "GPU vs CPU Architecture",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 9,
      question: "What advantage does high-bandwidth memory (HBM) provide on a data center GPU?",
      options: [
        "It replaces the need for any system memory",
        "It provides very high memory bandwidth by stacking memory dies close to the GPU",
        "It permanently stores training datasets across reboots",
        "It allows the GPU to run without a power supply"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "HBM is stacked memory placed close to the GPU die, which shortens signal paths and delivers much higher bandwidth than conventional off-package memory. It is still volatile working memory, so it does not replace system memory, persistent storage, or power delivery.",
      topic: "GPU vs CPU Architecture",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 10,
      question: "What is the main purpose of NVLink in a multi-GPU system?",
      options: [
        "To supply redundant power to each GPU",
        "To provide a high-bandwidth, low-latency direct link between GPUs",
        "To connect the server to the external storage fabric",
        "To encrypt GPU memory at rest"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "NVLink is a direct GPU-to-GPU interconnect. It lets GPUs exchange data much faster than a general-purpose PCIe path, which matters when a model or its activations are split across multiple GPUs. It does not supply power, attach external storage, or encrypt memory.",
      topic: "GPU vs CPU Architecture",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // Essential AI Knowledge: NVIDIA software stack
    // ---------------------------------------------------------------
    {
      id: 11,
      question: "What is NVIDIA CUDA?",
      options: [
        "A storage protocol for attaching NVMe drives",
        "A parallel computing platform and programming model for NVIDIA GPUs",
        "A container orchestration system",
        "A network switch operating system"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "CUDA is NVIDIA's parallel computing platform and programming model. It exposes GPU execution to developers and underpins most NVIDIA AI libraries and frameworks. It is not a storage protocol, scheduler, or switch operating system.",
      topic: "NVIDIA Software Stack",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 12,
      question: "Which NVIDIA library provides GPU-accelerated primitives for deep neural networks, such as convolution and pooling?",
      options: [
        "NCCL",
        "cuDNN",
        "TensorRT",
        "DOCA"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "cuDNN is the CUDA Deep Neural Network library. It supplies highly tuned implementations of common deep learning operations. NCCL handles multi-GPU communication, TensorRT optimizes inference, and DOCA supports DPU infrastructure services.",
      topic: "NVIDIA Software Stack",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 13,
      question: "Which NVIDIA library is used for collective communication across multiple GPUs and nodes?",
      options: [
        "cuDNN",
        "NCCL",
        "RAPIDS",
        "Omniverse"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "NCCL (NVIDIA Collective Communications Library) implements collectives such as AllReduce, AllGather, and Broadcast across GPUs. It selects paths over NVLink, PCIe, InfiniBand, or RoCE depending on the system topology. cuDNN is for neural network primitives, RAPIDS is for data science, and Omniverse is a simulation platform.",
      topic: "NVIDIA Software Stack",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 14,
      question: "What is the main purpose of NVIDIA TensorRT?",
      options: [
        "To schedule batch jobs across cluster nodes",
        "To optimize and run trained models for low-latency, high-throughput inference",
        "To manage InfiniBand fabric links",
        "To label training images automatically"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "TensorRT applies optimizations such as layer fusion, kernel selection, and reduced precision to produce an efficient inference engine. It is not a cluster scheduler, fabric manager, or data-labeling tool.",
      topic: "NVIDIA Software Stack",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 15,
      question: "Which NVIDIA product serves trained models from multiple frameworks and supports features such as dynamic batching and concurrent model execution?",
      options: [
        "Triton Inference Server",
        "NVIDIA UFM",
        "NVIDIA DOCA",
        "NVIDIA Base Command Manager"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Triton Inference Server is a model-serving platform that supports multiple frameworks and optimizes throughput with batching and concurrent execution. UFM manages InfiniBand fabrics, DOCA supports DPU development, and Base Command Manager provisions and monitors clusters.",
      topic: "NVIDIA Software Stack",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // Essential AI Knowledge: NVIDIA solutions and use cases
    // ---------------------------------------------------------------
    {
      id: 16,
      question: "Which NVIDIA platform is designed to accelerate data science workloads such as dataframe processing and machine learning on GPUs?",
      options: [
        "RAPIDS",
        "Metropolis",
        "Clara",
        "Isaac"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "RAPIDS provides GPU-accelerated data science libraries, including cuDF for dataframe-style processing and cuML for machine learning. Metropolis targets vision AI, Clara targets healthcare, and Isaac targets robotics.",
      topic: "NVIDIA Solutions & Use Cases",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 17,
      question: "Which NVIDIA framework is intended for building and training large language models and speech AI models?",
      options: [
        "NeMo",
        "CUDA",
        "DOCA",
        "UFM"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "NVIDIA NeMo provides tools and frameworks for developing large language models, speech recognition, and speech synthesis. CUDA is the low-level compute platform, DOCA is for DPUs, and UFM manages InfiniBand fabrics.",
      topic: "NVIDIA Solutions & Use Cases",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 18,
      question: "Which NVIDIA platform is focused on vision AI and large-scale video analytics?",
      options: [
        "Metropolis",
        "RAPIDS",
        "Omniverse",
        "DRIVE"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "NVIDIA Metropolis is the vision AI platform used for applications such as video analytics, smart cities, and visual inspection. RAPIDS targets data science, Omniverse targets 3D simulation, and DRIVE targets autonomous vehicles.",
      topic: "NVIDIA Solutions & Use Cases",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 19,
      question: "A manufacturer wants a physically accurate 3D simulation and digital twin of a factory before changing the real production line. Which NVIDIA platform fits best?",
      options: [
        "Omniverse",
        "NCCL",
        "Triton Inference Server",
        "BlueField"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "NVIDIA Omniverse is a platform for building and operating 3D simulation and digital twin workflows. NCCL is a communication library, Triton serves models, and BlueField is a DPU platform.",
      topic: "NVIDIA Solutions & Use Cases",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 20,
      question: "Which NVIDIA platform is designed for embedded and edge AI devices with tight power and space constraints?",
      options: [
        "Jetson",
        "DGX SuperPOD",
        "HGX",
        "UFM"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Jetson is NVIDIA's embedded computing platform for edge AI and robotics. DGX SuperPOD and HGX are data center scale systems, and UFM is network management software.",
      topic: "NVIDIA Solutions & Use Cases",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // Essential AI Knowledge: training vs inference
    // ---------------------------------------------------------------
    {
      id: 21,
      question: "Which statement best describes a training workload?",
      options: [
        "It performs forward and backward passes over large datasets to update model weights",
        "It only performs forward passes and never changes model weights",
        "It requires no input data because the model is already trained",
        "It is optimized primarily for single-request response time"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Training runs forward and backward passes, computes gradients, and updates model parameters over many batches. Inference performs forward passes only, and latency optimization is more characteristic of serving than of training.",
      topic: "Training vs Inference",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 22,
      question: "An inference service must answer user requests with minimal delay while controlling cost per request. Which optimization approach is most appropriate?",
      options: [
        "Increase the training batch size and retrain the model for every request",
        "Use reduced-precision inference, batching, and an optimized runtime such as TensorRT",
        "Disable all model validation and monitoring",
        "Move the model to a CPU-only node regardless of latency requirements"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Inference optimization focuses on latency, throughput, and cost per request. Quantization, batching, and runtime optimization with TensorRT are standard techniques. Retraining on every request is not an inference strategy, and removing validation or ignoring CPU latency tradeoffs is unsound.",
      topic: "Training vs Inference",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 23,
      question: "What does quantization do in an inference pipeline?",
      options: [
        "It increases the number of model parameters to improve accuracy",
        "It reduces numeric precision, which can lower memory use and speed up inference at some accuracy risk",
        "It encrypts model weights for secure transmission",
        "It distributes training batches across multiple GPUs"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Quantization converts weights and sometimes activations to lower-precision formats such as FP16, INT8, or FP8. This reduces memory footprint and can increase throughput, but the team must validate that accuracy remains acceptable. It does not add parameters, encrypt weights, or split training batches.",
      topic: "Training vs Inference",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 24,
      question: "Which comparison of training and inference architecture is most accurate?",
      options: [
        "Training generally stresses memory capacity, memory bandwidth, and scale-out interconnect, while inference stresses latency and cost per request",
        "Training and inference always use identical hardware and software configurations",
        "Inference requires more gradient synchronization than training",
        "Training is always performed on CPUs, while inference is always performed on GPUs"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Training holds weights, gradients, optimizer state, and activations, so it tends to need more memory and communication bandwidth. Inference can often use smaller configurations and focuses on response time, throughput, and efficiency. The other statements are false or absolute overgeneralizations.",
      topic: "Training vs Inference",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // Essential AI Knowledge: AI lifecycle and adoption
    // ---------------------------------------------------------------
    {
      id: 25,
      question: "Which sequence best represents the AI development and deployment lifecycle?",
      options: [
        "Data preparation, model training, validation, deployment, monitoring, and retraining",
        "Deployment, data preparation, training, validation, and permanent shutdown",
        "Training, deployment, data collection, and deletion of all monitoring data",
        "Validation, deployment, training, and data preparation"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "A typical lifecycle prepares and validates data, trains the model, evaluates it, deploys it, monitors production behavior, and retrains when performance drifts. Deployment before training and validation is not a valid sequence, and monitoring is not a one-time step.",
      topic: "AI Lifecycle & Adoption",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 26,
      question: "What is the main purpose of MLOps?",
      options: [
        "To automate and govern the model lifecycle, including testing, deployment, monitoring, and reproducibility",
        "To replace all data scientists with hardware technicians",
        "To eliminate the need for version control in machine learning",
        "To guarantee that every model is accurate without validation"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "MLOps applies engineering discipline to machine learning: repeatable pipelines, versioning, testing, deployment automation, monitoring, and governance. It does not remove the need for validation or version control, and it does not guarantee accuracy by itself.",
      topic: "AI Lifecycle & Adoption",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 27,
      question: "Which combination best explains the rapid improvement and adoption of AI in recent years?",
      options: [
        "Accelerated computing, larger datasets, improved algorithms such as transformers, and broader access to cloud and open-source tools",
        "A sudden increase in single-core CPU clock speeds and a decline in data availability",
        "The replacement of neural networks with hand-written rules",
        "A reduction in model size and a ban on distributed computing"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Modern AI progress comes from the combination of much faster parallel hardware, very large datasets, better model architectures and training methods, and easier access to software and cloud infrastructure. CPU clock scaling alone stalled, and neural networks did not disappear.",
      topic: "AI Lifecycle & Adoption",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 28,
      question: "In data parallel training, how is work distributed across GPUs?",
      options: [
        "Each GPU receives a different slice of the batch and holds a replica of the model, then gradients are synchronized",
        "Each GPU holds a different layer of the model and no data is split",
        "Only one GPU performs all computation while the others idle",
        "Each GPU trains a completely different model on unrelated data"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Data parallelism splits each batch across workers that hold model replicas. After the backward pass, gradients are averaged or reduced across workers, typically with NCCL. Model parallelism instead splits layers or parameters across devices.",
      topic: "AI Lifecycle & Adoption",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 29,
      question: "What is transfer learning?",
      options: [
        "Starting from a pretrained model and adapting it to a new task with less task-specific data",
        "Moving a model file from one disk to another",
        "Transferring GPU memory to system memory during inference",
        "Converting a model from FP32 to FP16 without any evaluation"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Transfer learning reuses knowledge from a pretrained model and fine-tunes it for a related task, often reducing data and compute requirements. The other options describe file movement, memory transfer, or quantization, not transfer learning.",
      topic: "AI Lifecycle & Adoption",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Infrastructure: GPU systems and scaling
    // ---------------------------------------------------------------
    {
      id: 30,
      question: "How many NVIDIA H100 GPUs and how much total GPU memory does an NVIDIA DGX H100 system provide?",
      options: [
        "4 GPUs and 320 GB total GPU memory",
        "8 GPUs and 640 GB total GPU memory",
        "8 GPUs and 1,128 GB total GPU memory",
        "16 GPUs and 1.28 TB total GPU memory"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "The NVIDIA DGX H100 system contains eight H100 Tensor Core GPUs with 80 GB each, for 640 GB of total GPU memory. The 1,128 GB figure corresponds to the H200 configuration. DGX systems are integrated, validated platforms rather than bare GPU boards.",
      topic: "GPU Systems & Scaling",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 31,
      question: "What is the role of NVSwitch in a DGX-class GPU server?",
      options: [
        "It provides high-bandwidth all-to-all communication among the GPUs in the system",
        "It converts AC power to the voltages required by the GPUs",
        "It stores the operating system image for the server",
        "It connects the server to the management network only"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "NVSwitch works with NVLink to provide a high-bandwidth, low-latency fabric among GPUs inside a server, allowing every GPU to communicate with every other GPU. Power conversion, OS storage, and management connectivity are handled by other components.",
      topic: "GPU Systems & Scaling",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 32,
      question: "Which statement correctly distinguishes scale-up from scale-out?",
      options: [
        "Scale-up adds resources within a system, such as more GPUs connected by NVLink; scale-out adds more systems connected by a network",
        "Scale-up adds more network switches; scale-out adds more GPUs inside one server",
        "Scale-up means reducing model size; scale-out means reducing the number of users",
        "Scale-up and scale-out are identical terms with no architectural difference"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Scale-up increases capacity inside one system, often using high-speed interconnects such as NVLink and NVSwitch. Scale-out increases the number of nodes and relies on the cluster network, such as InfiniBand or RoCE. They address different bottlenecks and are often combined.",
      topic: "GPU Systems & Scaling",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 33,
      question: "A team keeps the total problem size fixed and adds more GPUs to finish the same job faster. Which scaling model is this?",
      options: [
        "Weak scaling",
        "Strong scaling",
        "Vertical scaling only",
        "Storage scaling"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Strong scaling measures how much faster a fixed-size problem runs as resources are added. Weak scaling instead grows the problem size along with the resources so that work per resource stays roughly constant.",
      topic: "GPU Systems & Scaling",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 34,
      question: "Which scenario is the best fit for NVIDIA Multi-Instance GPU (MIG)?",
      options: [
        "One very large training job that must occupy every GPU in the cluster",
        "Several smaller inference jobs that need isolated GPU slices with predictable quality of service",
        "A workload that requires more system memory than the server can hold",
        "A network fabric that must connect thousands of nodes"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "MIG partitions a supported GPU into as many as seven isolated instances, each with dedicated compute, memory, and cache. This is well suited to multiple smaller workloads that need isolation and predictable performance. It does not add system memory or provide a cluster network.",
      topic: "GPU Systems & Scaling",
      domain: "AI Infrastructure",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Infrastructure: power and cooling
    // ---------------------------------------------------------------
    {
      id: 35,
      question: "Why do high-density GPU racks often require liquid cooling rather than air cooling alone?",
      options: [
        "Liquid cooling eliminates the need for any power distribution",
        "Air has limited heat-removal capacity per unit of airflow, while dense GPU racks generate very high heat loads",
        "GPUs cannot operate in air at any temperature",
        "Liquid cooling is required only for storage servers"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "High-performance GPUs can draw hundreds of watts each, so a dense rack may produce far more heat than air cooling can remove economically. Liquid cooling transfers heat more efficiently. It does not replace power distribution, and GPUs can operate in air-cooled environments at lower density.",
      topic: "Power & Cooling",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 36,
      question: "What does Power Usage Effectiveness (PUE) measure?",
      options: [
        "The ratio of total facility power to IT equipment power, where a value closer to 1.0 is better",
        "The ratio of GPU memory to system memory in a server",
        "The number of training jobs completed per hour",
        "The percentage of network bandwidth used by storage traffic"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "PUE is total facility energy divided by IT equipment energy. It captures overhead such as cooling and power distribution losses. A PUE of 1.0 would mean all facility power reaches IT equipment, so lower values indicate better efficiency.",
      topic: "Power & Cooling",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 37,
      question: "How does direct-to-chip liquid cooling work?",
      options: [
        "The entire server is submerged in a tank of dielectric fluid",
        "Cold plates attached to GPUs and CPUs transfer heat to a coolant loop connected to a CDU",
        "The data center is cooled only by outside air through open windows",
        "The GPU fans are removed and replaced with larger heatsinks"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Direct-to-chip cooling uses cold plates mounted on high-power components. A coolant loop carries heat to a coolant distribution unit (CDU) and then to facility water or a heat rejection system. Immersion cooling is a different approach.",
      topic: "Power & Cooling",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 38,
      question: "What does N+1 redundancy mean in data center power or cooling design?",
      options: [
        "There is exactly one component for every required function",
        "There is one additional component beyond the minimum needed to tolerate a single failure",
        "Every component is duplicated twice, for N+2 redundancy",
        "The facility operates with no backup capacity"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "N+1 means the system has enough capacity for normal operation plus one extra unit, so a single failure does not stop the workload. N+2 would provide two extra units beyond the requirement.",
      topic: "Power & Cooling",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 39,
      question: "Which facility constraint most often limits how many high-end GPUs can be placed in a single rack?",
      options: [
        "The number of USB ports available",
        "Power delivery capacity and the ability to remove the resulting heat",
        "The size of the operating system image",
        "The number of software licenses installed"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "GPU-dense racks are constrained primarily by electrical power available per rack and by cooling capacity. Compute density is limited by how much power can be delivered and how much heat can be removed, not by USB ports or software licenses.",
      topic: "Power & Cooling",
      domain: "AI Infrastructure",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Infrastructure: on-premises vs cloud
    // ---------------------------------------------------------------
    {
      id: 40,
      question: "A startup needs GPU capacity for a three-week experiment and has no data center. Which deployment approach fits best?",
      options: [
        "Buy and install a multi-node GPU cluster on premises",
        "Rent GPU instances from a cloud provider for the experiment",
        "Build a new colocation facility with liquid cooling",
        "Wait for GPU prices to fall before starting"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Cloud GPU instances provide elastic capacity without capital expenditure, which matches a short, uncertain experiment. Building or buying infrastructure makes more sense for sustained workloads with predictable utilization.",
      topic: "On-Prem vs Cloud",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 41,
      question: "A regulated organization must keep sensitive training data inside its own facilities. Which deployment model is most appropriate?",
      options: [
        "Public cloud only, with no data controls",
        "On-premises or private cloud infrastructure under the organization's control",
        "A shared public notebook with open access",
        "Any external service, as long as it is inexpensive"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Data residency, sovereignty, and regulatory controls often require on-premises or private infrastructure where the organization controls access and placement. Public or shared services may still be usable with the right contracts and controls, but the question specifies that data must remain inside the organization's facilities.",
      topic: "On-Prem vs Cloud",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 42,
      question: "Which statement about the financial model of on-premises versus cloud infrastructure is correct?",
      options: [
        "On-premises is primarily capital expenditure, while cloud is primarily operational expenditure",
        "On-premises has no upfront cost, while cloud requires buying servers",
        "Cloud always costs less than on-premises for every workload",
        "On-premises and cloud have identical cost structures"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "On-premises deployments usually require upfront capital for hardware, facilities, and support, while cloud services are billed as operating expense based on consumption. The cheapest option depends on utilization, duration, and requirements; cloud is not universally cheaper.",
      topic: "On-Prem vs Cloud",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 43,
      question: "Which scenario best describes a hybrid AI infrastructure strategy?",
      options: [
        "Keeping sensitive data and steady-state workloads on premises while bursting peak training to cloud GPU capacity",
        "Running every workload on a single laptop",
        "Refusing to use any network connectivity",
        "Moving all data to a public cloud with no governance"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Hybrid infrastructure combines on-premises and cloud resources. A common pattern is to keep regulated data and predictable workloads on premises while using cloud elasticity for occasional peak demand. Hybrid still requires governance, networking, and security controls.",
      topic: "On-Prem vs Cloud",
      domain: "AI Infrastructure",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Infrastructure: cluster components
    // ---------------------------------------------------------------
    {
      id: 44,
      question: "Which three network fabrics are commonly separated in an AI cluster? (Select three.)",
      options: [
        "Compute fabric",
        "Storage fabric",
        "Management fabric",
        "Printing fabric",
        "Building HVAC fabric"
      ],
      correctAnswer: 0,
      correctAnswers: [0, 1, 2],
      explanation: "AI clusters commonly separate compute traffic, storage traffic, and management traffic so that each can be sized and tuned for its own requirements. Compute needs low latency and high bandwidth, storage needs high throughput, and management needs reliable out-of-band access. Printing and HVAC are not cluster data fabrics.",
      topic: "Cluster Components",
      domain: "AI Infrastructure",
      multiSelect: true
    },
    {
      id: 45,
      question: "What is the purpose of a baseboard management controller (BMC)?",
      options: [
        "To provide out-of-band management of a server, including power control, console access, and hardware sensors, independent of the host OS",
        "To train neural networks when the GPUs are idle",
        "To store the model weights for production inference",
        "To replace the need for a network switch"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "A BMC runs independently of the host operating system and provides remote management functions such as power cycling, serial console access, sensor readings, and firmware updates. It does not train models, store application weights, or replace network switching.",
      topic: "Cluster Components",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 46,
      question: "Why does an AI training cluster typically use a parallel file system for datasets and checkpoints?",
      options: [
        "It provides high aggregate bandwidth and concurrent access for many compute nodes",
        "It stores data only on the local boot disk of one server",
        "It eliminates the need for any storage network",
        "It is designed only for archival tape backups"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Training jobs read large datasets and write checkpoints from many nodes at once. A parallel file system aggregates bandwidth across servers and supports concurrent access. Local boot disks do not scale to this workload, and the storage fabric is still required.",
      topic: "Cluster Components",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 47,
      question: "What is the primary responsibility of a cluster job scheduler such as Slurm?",
      options: [
        "To allocate jobs to compute resources according to queues, priorities, and resource requests",
        "To compile CUDA kernels into machine code",
        "To cool the GPUs during training",
        "To encrypt all network traffic on the storage fabric"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "A job scheduler accepts workload requests, queues them, and allocates nodes, GPUs, memory, and time according to policy and availability. Compilation, cooling, and encryption are handled by other layers.",
      topic: "Cluster Components",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 48,
      question: "What does NVIDIA GPUDirect Storage enable?",
      options: [
        "A direct data path between storage and GPU memory, bypassing the CPU bounce buffer",
        "Direct communication between two GPUs without NVLink",
        "Direct power delivery from the storage array to the GPU",
        "Direct installation of GPU drivers from a USB drive"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "GPUDirect Storage allows storage devices and GPU memory to exchange data directly, reducing CPU involvement and extra memory copies. It improves throughput and lowers latency for data-heavy AI pipelines. It is not a GPU-to-GPU interconnect or a power or driver mechanism.",
      topic: "Cluster Components",
      domain: "AI Infrastructure",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Infrastructure: AI networking
    // ---------------------------------------------------------------
    {
      id: 49,
      question: "Which networking technology is purpose-built for low-latency, lossless, high-bandwidth communication in AI and HPC clusters?",
      options: [
        "InfiniBand",
        "Bluetooth",
        "Wi-Fi 6",
        "USB 3.2"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "InfiniBand provides RDMA, low latency, high throughput, congestion control, and in-network computing features such as SHARP. It is widely used in large AI and HPC clusters. Bluetooth, Wi-Fi, and USB are not data center fabric technologies.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 50,
      question: "What is RDMA over Converged Ethernet (RoCE)?",
      options: [
        "A method for carrying remote direct memory access traffic over an Ethernet network",
        "A protocol for connecting GPUs directly to power supplies",
        "A file system for local NVMe drives",
        "A container orchestration platform"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "RoCE enables RDMA semantics over Ethernet, giving low CPU overhead and low latency while using Ethernet infrastructure. It typically requires lossless or carefully tuned network configuration for best performance. It is not a power, storage, or orchestration technology.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 51,
      question: "Why is a leaf-spine or fat-tree topology common in AI clusters?",
      options: [
        "It provides multiple equal-cost paths and predictable bandwidth between nodes as the cluster scales",
        "It requires every node to connect to a single switch, limiting scalability",
        "It is designed only for wireless traffic",
        "It removes the need for a routing protocol"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Leaf-spine and fat-tree designs provide multiple paths and scalable east-west bandwidth, which suits distributed training traffic. A single-switch design does not scale, and these topologies still require routing and fabric management.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 52,
      question: "What is a rail-optimized network topology intended to improve?",
      options: [
        "GPU-to-GPU collective communication by grouping corresponding GPUs on the same network rail",
        "Disk formatting speed for local NVMe drives",
        "The clock speed of the host CPU",
        "The physical weight of the server rack"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "In a rail-optimized design, GPUs in the same position across servers connect to the same leaf switch or rail. This reduces hops and contention for collective operations such as AllReduce, improving distributed training efficiency. It does not affect disk formatting, CPU clocks, or rack weight.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 53,
      question: "What does network oversubscription mean?",
      options: [
        "The ratio of available downlink bandwidth to uplink bandwidth, where a value above 1 means potential contention",
        "The number of users assigned to a single GPU",
        "The amount of GPU memory reserved for the operating system",
        "The number of power supplies installed in a server"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Oversubscription describes how much edge or access bandwidth is provisioned relative to uplink or core bandwidth. A value above 1 means endpoints can demand more than the uplink can carry simultaneously, which may cause contention. It is unrelated to GPU memory or power supplies.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Infrastructure: data center protocols
    // ---------------------------------------------------------------
    {
      id: 54,
      question: "What is the main benefit of Remote Direct Memory Access (RDMA)?",
      options: [
        "It allows a host to access remote memory without CPU involvement or extra data copies, reducing latency and overhead",
        "It increases the clock speed of the remote CPU",
        "It compresses all data before storing it on disk",
        "It automatically encrypts every application"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "RDMA transfers data directly between memory regions on different systems, bypassing the remote CPU and avoiding extra copies. This lowers latency and CPU overhead for distributed workloads. It does not change CPU clocks, provide storage compression, or encrypt applications by itself.",
      topic: "Data Center Protocols",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 55,
      question: "What does NCCL do in a distributed training job?",
      options: [
        "It implements collective operations such as AllReduce and AllGather across GPUs and nodes",
        "It provides a graphical desktop for cluster administrators",
        "It converts electrical power for the GPU tray",
        "It replaces the need for a network fabric"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "NCCL coordinates collective communication so that gradients and other tensors can be shared efficiently across devices. It selects available transports such as NVLink, PCIe, InfiniBand, or RoCE. It does not provide a desktop, power conversion, or a substitute for the network.",
      topic: "Data Center Protocols",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 56,
      question: "What is the purpose of jumbo frames in a data center network?",
      options: [
        "To increase the maximum transmission unit so fewer packets are needed for large transfers",
        "To double the clock speed of the network switch",
        "To encrypt packet payloads automatically",
        "To eliminate the need for flow control"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Jumbo frames use a larger MTU, commonly around 9000 bytes, which reduces per-packet overhead for bulk data transfers. The MTU must be configured consistently across the path. Jumbo frames do not change clock speed, provide encryption, or remove the need for congestion control.",
      topic: "Data Center Protocols",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 57,
      question: "Which protocol provides a RESTful API for out-of-band server management through a BMC?",
      options: [
        "Redfish",
        "NCCL",
        "CUDA",
        "RoCE"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Redfish is an open standard that uses RESTful interfaces to manage servers and infrastructure through a BMC or management controller. NCCL is for GPU collectives, CUDA is a compute platform, and RoCE is an Ethernet RDMA technology.",
      topic: "Data Center Protocols",
      domain: "AI Infrastructure",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Infrastructure: DPUs
    // ---------------------------------------------------------------
    {
      id: 58,
      question: "Which two infrastructure functions can a DPU such as NVIDIA BlueField offload from the host CPU? (Select two.)",
      options: [
        "Networking",
        "Storage and security services",
        "Spreadsheet calculation",
        "Desktop graphics rendering"
      ],
      correctAnswer: 0,
      correctAnswers: [0, 1],
      explanation: "A DPU combines a programmable CPU, a high-speed network interface, and hardware acceleration to offload networking, storage, and security functions from the host. This frees host CPU cycles and can provide isolation between infrastructure and tenant workloads. Spreadsheets and desktop graphics are not DPU offload targets.",
      topic: "DPUs",
      domain: "AI Infrastructure",
      multiSelect: true
    },
    {
      id: 59,
      question: "What is NVIDIA DOCA?",
      options: [
        "A software development platform for programming and managing BlueField DPUs and ConnectX adapters",
        "A GPU memory technology that replaces HBM",
        "A batch scheduler for HPC clusters",
        "A file system for NVMe drives"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "DOCA provides SDKs, libraries, services, and orchestration support for BlueField DPUs and ConnectX networking products. It is not a memory technology, scheduler, or file system.",
      topic: "DPUs",
      domain: "AI Infrastructure",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Operations: data center management and monitoring
    // ---------------------------------------------------------------
    {
      id: 60,
      question: "What is NVIDIA Data Center GPU Manager (DCGM) used for?",
      options: [
        "Observing, managing, validating, and diagnosing NVIDIA data center GPUs at node and cluster scale",
        "Compiling Python applications into GPU machine code",
        "Scheduling container images onto network switches",
        "Providing a replacement for the server BIOS"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "DCGM provides libraries and tools for GPU telemetry, health monitoring, diagnostics, and policy management across data center deployments. It is not a compiler, a switch scheduler, or a BIOS replacement.",
      topic: "Data Center Monitoring",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 61,
      question: "An operator needs continuous GPU telemetry from thousands of nodes exported to a monitoring system. Which approach is most appropriate?",
      options: [
        "Run nvidia-smi manually on each node and read the output",
        "Use DCGM Exporter to expose GPU metrics for collection by Prometheus",
        "Disable GPU monitoring to reduce network traffic",
        "Use a spreadsheet to record GPU temperatures once per month"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "DCGM Exporter exposes GPU metrics in a format that Prometheus can scrape, enabling cluster-scale monitoring and alerting. Manual nvidia-smi checks and monthly spreadsheets do not provide continuous, scalable telemetry, and disabling monitoring hides failures.",
      topic: "Data Center Monitoring",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 62,
      question: "What roles do Prometheus and Grafana commonly play in GPU monitoring?",
      options: [
        "Prometheus collects and stores metrics, while Grafana visualizes them in dashboards",
        "Prometheus renders 3D models, while Grafana compiles CUDA code",
        "Prometheus controls server power, while Grafana manages InfiniBand links",
        "Prometheus and Grafana both replace the GPU driver"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Prometheus is a metrics collection and time-series database with alerting, and Grafana is a visualization layer for dashboards. They are commonly paired with DCGM Exporter for GPU telemetry. Neither replaces drivers, power control, or fabric management.",
      topic: "Data Center Monitoring",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 63,
      question: "What is NVIDIA Unified Fabric Manager (UFM) used for?",
      options: [
        "Provisioning, monitoring, managing, and troubleshooting InfiniBand network fabrics",
        "Serving trained models over HTTP",
        "Scheduling Kubernetes pods onto GPUs",
        "Compiling deep learning frameworks"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "UFM manages InfiniBand fabrics and provides telemetry, discovery, provisioning, congestion tracking, and troubleshooting. Model serving, Kubernetes scheduling, and framework compilation are handled by other tools.",
      topic: "Data Center Monitoring",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 64,
      question: "Which NVIDIA product is designed to provision, manage, and monitor HPC and AI clusters across bare metal, containers, and hybrid environments?",
      options: [
        "Base Command Manager",
        "TensorRT",
        "cuDNN",
        "Metropolis"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Base Command Manager provides cluster provisioning, automation, monitoring, and workload integration for HPC and AI environments. TensorRT optimizes inference, cuDNN provides neural network primitives, and Metropolis targets vision AI.",
      topic: "Data Center Monitoring",
      domain: "AI Operations",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Operations: orchestration and job scheduling
    // ---------------------------------------------------------------
    {
      id: 65,
      question: "What is the primary role of Kubernetes in an AI infrastructure?",
      options: [
        "Orchestrating containerized workloads, including scheduling pods and managing their lifecycle",
        "Compiling GPU device drivers from source on every node",
        "Providing physical cooling for the data center",
        "Replacing all storage with local USB drives"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Kubernetes schedules and manages containerized applications across a cluster, including resource requests, scaling, and lifecycle operations. NVIDIA extensions such as the GPU Operator and device plugin make GPUs schedulable. Kubernetes does not compile drivers, provide cooling, or replace storage.",
      topic: "Orchestration & Scheduling",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 66,
      question: "Which workload manager is commonly used to queue and schedule batch jobs on HPC and AI clusters?",
      options: [
        "Slurm",
        "Grafana",
        "Redfish",
        "cuDNN"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Slurm is a widely used HPC workload manager that allocates nodes and accelerators, queues jobs, enforces priorities, and manages job accounting. Grafana visualizes metrics, Redfish manages servers, and cuDNN provides neural network primitives.",
      topic: "Orchestration & Scheduling",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 67,
      question: "Which two components does the NVIDIA GPU Operator automate on Kubernetes nodes? (Select two.)",
      options: [
        "GPU drivers and the NVIDIA container toolkit",
        "DCGM-based GPU monitoring",
        "The application's Python source code",
        "The physical installation of GPUs in the server"
      ],
      correctAnswer: 0,
      correctAnswers: [0, 1],
      explanation: "The GPU Operator automates the deployment and lifecycle of NVIDIA software components on Kubernetes, including drivers, the container toolkit, the device plugin, GPU feature discovery, and DCGM-based monitoring. It does not modify application source code or physically install hardware.",
      topic: "Orchestration & Scheduling",
      domain: "AI Operations",
      multiSelect: true
    },
    {
      id: 68,
      question: "How are MIG instances made available to Kubernetes workloads?",
      options: [
        "A MIG-aware device plugin exposes the instances as schedulable resources that pods can request",
        "Kubernetes automatically partitions the GPU without any plugin",
        "MIG instances are exposed only through a web browser",
        "MIG cannot be used with containers"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "The NVIDIA MIG device plugin advertises MIG instances as Kubernetes resources so that pods can request a specific slice. Kubernetes does not partition GPUs on its own, and MIG is designed to work with containers and virtual machines.",
      topic: "Orchestration & Scheduling",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 69,
      question: "Which statement correctly compares GPU time-slicing with MIG?",
      options: [
        "Time-slicing shares a GPU by switching between workloads and does not provide full memory or fault isolation, while MIG partitions hardware resources with isolation",
        "Time-slicing provides stronger isolation than MIG",
        "MIG and time-slicing are the same mechanism",
        "MIG only works with CPUs"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Time-slicing multiplexes workloads on one GPU over time, which is simple but does not give each workload dedicated memory or full fault isolation. MIG creates separate hardware partitions with dedicated compute, memory, and cache, providing stronger isolation and predictable quality of service.",
      topic: "Orchestration & Scheduling",
      domain: "AI Operations",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Operations: GPU monitoring
    // ---------------------------------------------------------------
    {
      id: 70,
      question: "Which two metrics are most useful for detecting that a GPU is under heavy compute load? (Select two.)",
      options: [
        "GPU utilization or SM utilization",
        "GPU memory utilization",
        "Keyboard input latency",
        "Printer queue depth"
      ],
      correctAnswer: 0,
      correctAnswers: [0, 1],
      explanation: "GPU and SM utilization show how busy the compute engines are, while memory utilization shows how much device memory is in use. Together they help distinguish compute-bound from memory-bound behavior. Keyboard and printer metrics are unrelated to GPU load.",
      topic: "GPU Monitoring",
      domain: "AI Operations",
      multiSelect: true
    },
    {
      id: 71,
      question: "A GPU shows high memory utilization and high memory throughput but relatively low SM utilization. What does this most likely indicate?",
      options: [
        "The workload is memory-bound rather than compute-bound",
        "The GPU has no power connected",
        "The network cable is unplugged",
        "The model is training without any data"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "High memory utilization and memory throughput with low SM utilization suggest that memory capacity or bandwidth is the limiting resource. The remedy may include reducing batch size, improving data locality, or using more efficient data formats. Power, cabling, and missing data would produce different symptoms.",
      topic: "GPU Monitoring",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 72,
      question: "What does GPU thermal or power throttling mean?",
      options: [
        "The GPU reduces clocks to stay within temperature or power limits, which can lower performance",
        "The GPU permanently increases its clock speed beyond safe limits",
        "The GPU transfers all work to the CPU",
        "The GPU deletes its memory contents"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "When a GPU reaches a thermal or power limit, it may reduce operating clocks to protect the hardware. Operators should monitor temperature, power draw, and throttle reasons to distinguish cooling or power problems from application bottlenecks. Throttling does not transfer work to the CPU or erase memory.",
      topic: "GPU Monitoring",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 73,
      question: "What do ECC error counts and XID messages indicate in GPU monitoring?",
      options: [
        "ECC tracks memory errors, while XID messages identify GPU or driver faults that may require investigation",
        "ECC measures network bandwidth, while XID measures disk capacity",
        "ECC and XID are both names for the GPU fan curve",
        "ECC and XID are only used for license management"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "ECC counters report corrected and uncorrected memory errors, which can signal degrading hardware. XID messages are NVIDIA driver or GPU error identifiers used to diagnose faults. Together they help operations teams decide whether to reset, replace, or escalate.",
      topic: "GPU Monitoring",
      domain: "AI Operations",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Operations: virtualization
    // ---------------------------------------------------------------
    {
      id: 74,
      question: "What is the difference between GPU passthrough and NVIDIA vGPU?",
      options: [
        "Passthrough assigns a physical GPU to one VM, while vGPU can share a physical GPU across multiple VMs",
        "Passthrough shares one GPU across many VMs, while vGPU dedicates a GPU to one VM",
        "Both terms mean the same thing",
        "vGPU is a storage protocol, not a virtualization technology"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "GPU passthrough gives a single VM direct control of a physical GPU. NVIDIA vGPU software enables a physical GPU to be shared by multiple VMs with mediated access. They are different virtualization models with different isolation and density tradeoffs.",
      topic: "Virtualization",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 75,
      question: "Which consideration is most important when virtualizing accelerated infrastructure?",
      options: [
        "Choosing a GPU sharing and isolation model that matches the workload, and verifying driver and hypervisor compatibility",
        "Assuming GPU live migration works identically to CPU live migration",
        "Ignoring whether the application supports the selected GPU mode",
        "Using the largest possible VM count without measuring performance"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "GPU virtualization requires matching the sharing model (passthrough, vGPU, MIG, or time-slicing) to isolation and performance needs, and confirming that the hypervisor, driver, and application support it. GPU live migration is more limited than CPU live migration, and maximizing VM count without measurement can destroy performance.",
      topic: "Virtualization",
      domain: "AI Operations",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // Essential AI Knowledge: additional blueprint coverage
    // ---------------------------------------------------------------
    {
      id: 126,
      question: "Which NVIDIA offering provides containerized, optimized inference microservices and standard APIs for deploying foundation models?",
      options: [
        "NVIDIA NIM",
        "NVIDIA DOCA",
        "NVIDIA UFM",
        "NVIDIA GPUDirect Storage"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "NVIDIA NIM packages optimized inference engines and runtimes as containerized microservices with standard APIs, so teams can deploy supported foundation models without building the serving stack from scratch. DOCA programs DPUs, UFM manages InfiniBand fabrics, and GPUDirect Storage provides a direct storage-to-GPU data path.",
      topic: "NVIDIA Solutions & Use Cases",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 127,
      question: "Which technique reduces repeated computation during autoregressive LLM inference by storing attention keys and values from earlier tokens?",
      options: [
        "KV caching",
        "Gradient accumulation",
        "Weight pruning",
        "Data parallelism"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Autoregressive decoding reuses the keys and values of previous tokens at each step. A KV cache stores those tensors so the model does not recompute the full prefix for every new token, reducing latency and redundant computation. Gradient accumulation, pruning, and data parallelism address training or model size, not per-token decoding reuse.",
      topic: "Training vs Inference",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 128,
      question: "A model is too large to fit on one GPU. Which strategy splits its layers or parameters across multiple GPUs?",
      options: [
        "Model parallelism",
        "Data parallelism",
        "Gradient accumulation",
        "Checkpointing"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Model parallelism partitions the model itself across devices, often by layer or tensor, so a single model can exceed the memory of one GPU. Data parallelism replicates the model and splits the input batch instead. Gradient accumulation reduces memory per step, and checkpointing saves state; neither splits the model across devices.",
      topic: "AI Lifecycle & Adoption",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 129,
      question: "An inference service reports low average latency per request but cannot handle the target request rate. Which metric is failing?",
      options: [
        "Throughput",
        "Model accuracy",
        "GPU memory capacity",
        "Training loss"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Latency measures how long one request takes, while throughput measures how many requests the service completes per unit time. A service can have low latency at low load and still saturate before reaching the required request rate. Batching, more replicas, or more efficient serving can improve throughput, with latency tradeoffs to measure.",
      topic: "Training vs Inference",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },
    {
      id: 130,
      question: "Why must an LLM use the same tokenizer and vocabulary that were used during pretraining?",
      options: [
        "Because token IDs map to specific vocabulary entries, and a different tokenizer changes the meaning of those IDs.",
        "Because the tokenizer controls GPU clock speed.",
        "Because a different tokenizer automatically increases model accuracy.",
        "Because the tokenizer stores the model's optimizer state."
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "A model learns embeddings for a fixed vocabulary of token IDs. If a different tokenizer maps text to different IDs, the model receives embeddings for the wrong tokens and outputs degrade. The tokenizer does not set GPU clocks, guarantee accuracy, or hold optimizer state.",
      topic: "AI, ML & DL Concepts",
      domain: "Essential AI Knowledge",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Infrastructure: additional blueprint coverage
    // ---------------------------------------------------------------
    {
      id: 131,
      question: "Which statement correctly compares a SuperNIC such as ConnectX-7 with a BlueField DPU?",
      options: [
        "Both provide high-speed network and RDMA functions, while a DPU adds Arm cores and infrastructure offload.",
        "A SuperNIC includes Arm cores for running firewalls, while a DPU is only a cable.",
        "A DPU provides GPU memory expansion, while a SuperNIC provides storage capacity.",
        "Both are storage controllers and cannot be used for networking."
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "A SuperNIC is a network accelerator optimized for GPU-to-GPU and RDMA traffic. A BlueField DPU provides similar network acceleration and adds programmable Arm cores and hardware accelerators for infrastructure services such as networking, storage, and security. Neither expands GPU memory or acts as a storage controller.",
      topic: "DPUs",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 132,
      question: "Which two Ethernet mechanisms are commonly used together to reduce packet loss and manage congestion on a RoCE fabric? (Select two.)",
      options: [
        "Priority Flow Control (PFC)",
        "Explicit Congestion Notification (ECN)",
        "VLAN tagging",
        "Jumbo frame discovery"
      ],
      correctAnswer: 0,
      correctAnswers: [0, 1],
      explanation: "PFC pauses selected traffic classes when a queue approaches congestion, helping preserve the lossless behavior that RDMA expects. ECN marks packets instead of dropping them so senders can reduce their rate before buffers overflow. VLAN tagging and jumbo frame discovery do not provide this congestion control.",
      topic: "Data Center Protocols",
      domain: "AI Infrastructure",
      multiSelect: true
    },
    {
      id: 133,
      question: "What is the primary role of a coolant distribution unit (CDU) in a direct-to-chip liquid cooling system?",
      options: [
        "It transfers heat between the facility loop and the rack loop while managing flow, pressure, and coolant temperature.",
        "It supplies DC power to the GPUs.",
        "It provides the network switch for the management plane.",
        "It stores training checkpoints on local disks."
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "A CDU separates the facility water loop from the rack or secondary loop and manages flow, pressure, filtration, and temperature. It moves heat from the rack to the facility loop but does not supply GPU power, provide management networking, or store checkpoints.",
      topic: "Power & Cooling",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 134,
      question: "In a Slurm-managed AI cluster, what is the primary role of a login node?",
      options: [
        "It provides user access for job submission, file editing, and cluster commands, while compute nodes run the training jobs.",
        "It executes all GPU training work and the login node only stores logs.",
        "It replaces the cluster network with a direct GPU link.",
        "It runs the GPU driver and is never used by users."
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "A login node is the user-facing entry point for submitting jobs, editing files, and running cluster commands. Compute nodes run the scheduled workloads. Keeping heavy jobs off the login node prevents interactive users from starving the scheduler and degrading the shared entry point. It does not replace the cluster network or own GPU execution.",
      topic: "Cluster Components",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 135,
      question: "What is the purpose of hot-aisle containment in an air-cooled data center?",
      options: [
        "It prevents hot exhaust air from mixing with cold intake air, improving cooling efficiency.",
        "It increases the electrical power delivered to each rack.",
        "It provides a dedicated network path for GPU traffic.",
        "It converts alternating current to direct current for the servers."
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Hot-aisle containment separates hot exhaust from cold supply air, reducing recirculation and allowing cooling systems to operate more efficiently. It does not change electrical power delivery, provide a data network, or perform power conversion.",
      topic: "Power & Cooling",
      domain: "AI Infrastructure",
      multiSelect: false
    },
    {
      id: 136,
      question: "A server has multiple GPUs but no NVLink or NVSwitch. Which impact is most likely for a model-parallel workload?",
      options: [
        "GPU-to-GPU communication uses PCIe and can become a bandwidth and latency bottleneck.",
        "The GPUs automatically gain NVLink bandwidth through the PCIe bus.",
        "Model parallelism no longer requires any inter-GPU communication.",
        "The server can no longer use a network interface."
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Without NVLink or NVSwitch, GPU-to-GPU traffic must traverse PCIe, which generally has lower bandwidth and higher latency than the dedicated GPU interconnect. Model-parallel workloads exchange activations or gradients frequently, so PCIe can limit scaling. PCIe does not provide NVLink bandwidth, eliminate communication, or disable the network interface.",
      topic: "GPU Systems & Scaling",
      domain: "AI Infrastructure",
      multiSelect: false
    },

    // ---------------------------------------------------------------
    // AI Operations: additional blueprint coverage
    // ---------------------------------------------------------------
    {
      id: 137,
      question: "Which I/O virtualization technique exposes virtual functions that can be assigned to a VM with less hypervisor involvement?",
      options: [
        "SR-IOV",
        "Time-slicing",
        "NUMA",
        "RDMA"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "SR-IOV allows a physical device to present virtual functions that can be assigned directly to virtual machines, reducing hypervisor interception and improving I/O performance. Time-slicing multiplexes a device over time, NUMA describes memory locality, and RDMA is a remote memory access mechanism.",
      topic: "Virtualization",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 138,
      question: "Which statement about live migration of GPU-accelerated virtual machines is most accurate?",
      options: [
        "It depends on the GPU model, vGPU software, hypervisor, and workload support and is not universally equivalent to CPU live migration.",
        "It works identically to CPU live migration on every GPU and hypervisor.",
        "It requires no shared storage or network configuration.",
        "It is always enabled by default for every passthrough GPU."
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "GPU live migration requires a supported combination of GPU, vGPU software, hypervisor, and guest configuration, and some workloads cannot be migrated transparently. It also depends on shared storage and network setup. It is not universal, not automatic for passthrough GPUs, and not identical to CPU live migration.",
      topic: "Virtualization",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 139,
      question: "How can an operator prevent general-purpose workloads from consuming expensive GPU nodes in Kubernetes?",
      options: [
        "Taint the GPU nodes and add tolerations only to the GPU workloads that should use them.",
        "Remove all CPU nodes from the cluster.",
        "Disable the Kubernetes scheduler.",
        "Give every pod a toleration for every taint."
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "A taint on a GPU node repels pods that do not tolerate it, and a matching toleration allows selected GPU workloads to schedule there. This protects scarce accelerators from unrelated workloads. Removing CPU nodes, disabling the scheduler, or tolerating every taint defeats scheduling and isolation.",
      topic: "Orchestration & Scheduling",
      domain: "AI Operations",
      multiSelect: false
    },
    {
      id: 140,
      question: "Which telemetry signal best reconstructs the path and timing of a single inference request across an API gateway, retrieval service, and model server?",
      options: [
        "Distributed traces",
        "Static configuration files",
        "GPU ECC counters",
        "Firmware version logs"
      ],
      correctAnswer: 0,
      correctAnswers: [0],
      explanation: "Distributed tracing follows a request across services by propagating a trace context and recording spans for each operation. It shows where time is spent and which service failed. Configuration files describe settings, ECC counters report memory errors, and firmware version logs record inventory, not request flow.",
      topic: "Data Center Monitoring",
      domain: "AI Operations",
      multiSelect: false
    }
  ]
};
