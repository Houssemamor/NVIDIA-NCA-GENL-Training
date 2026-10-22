/*
 * NCA-AIIO community question bank.
 *
 * Source: "NVIDIA NCA-AIIO Study Guide - Self-Quiz" by Zia Zeeshan.
 * Repository: https://github.com/ziash/nvidia-nca-aiio-study-guide
 * License: Creative Commons Attribution 4.0 International (CC BY 4.0).
 * License text: https://creativecommons.org/licenses/by/4.0/
 *
 * Changes made for this site:
 *   - Converted the Markdown quiz into the site's JavaScript question schema.
 *   - Converted non-ASCII punctuation to ASCII.
 *   - Added an explanation for each answer.
 *   - Mapped each question to an NCA-AIIO domain and topic.
 *
 * The question text and answer options are reproduced from the source and
 * remain subject to the CC BY 4.0 attribution requirement. See the site's
 * credits section before removing this notice.
 */

const QUESTIONS_DB_AIIO_COMMUNITY = {
  metadata: {
    exam: "NCA-AIIO",
    totalQuestions: 50,
    lastUpdated: "2026-10-22",
    sourceId: "ziash-cc-by-4.0",
    source: {
      title: "NVIDIA NCA-AIIO Study Guide - Self-Quiz",
      author: "Zia Zeeshan",
      copyright: "Copyright (c) 2026 Zia Zeeshan",
      url: "https://github.com/ziash/nvidia-nca-aiio-study-guide",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      changes: "Converted to the site question schema, converted punctuation to ASCII, added explanations, mapped questions to NCA-AIIO domains and topics, and clarified selected questions for accuracy."
    },
    domains: [
      { name: "Essential AI Knowledge", weight: 38, count: 10 },
      { name: "AI Infrastructure", weight: 40, count: 24 },
      { name: "AI Operations", weight: 22, count: 16 }
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
    {
      id: 76,
      question: "Which NVIDIA framework is specifically designed for training, fine-tuning, and deploying large language models, automatic speech recognition, and text-to-speech models?",
      options: [
        "TensorRT",
        "RAPIDS",
        "NeMo",
        "Triton Inference Server"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "NVIDIA NeMo is the framework for building and training large language models and speech AI models, including automatic speech recognition and text-to-speech. TensorRT optimizes inference, RAPIDS accelerates data science, and Triton serves trained models.",
      topic: "NVIDIA Software Stack",
      domain: "Essential AI Knowledge",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 77,
      question: "A data scientist wants GPU-accelerated equivalents of pandas and scikit-learn to speed up data preprocessing on an NVIDIA GPU cluster. Which NVIDIA product addresses this?",
      options: [
        "NCCL",
        "RAPIDS",
        "TensorRT",
        "DOCA"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "RAPIDS provides GPU-accelerated data science libraries, including cuDF for pandas-like dataframe operations and cuML for scikit-learn-like machine learning. NCCL handles distributed communication, TensorRT optimizes inference, and DOCA supports DPUs.",
      topic: "NVIDIA Solutions & Use Cases",
      domain: "Essential AI Knowledge",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 78,
      question: "Which statement correctly describes the relationship between AI, ML, and Deep Learning?",
      options: [
        "ML is a subset of DL; DL is a subset of AI",
        "AI is a subset of ML; ML is a subset of DL",
        "DL is a subset of ML; ML is a subset of AI",
        "All three are independent, parallel fields"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Deep learning is a subset of machine learning, and machine learning is a subset of artificial intelligence. The reverse containment statement is incorrect, and the fields are not independent.",
      topic: "AI, ML & DL Concepts",
      domain: "Essential AI Knowledge",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 79,
      question: "What two resources do scaling laws (Chinchilla) indicate primarily determine the quality of a trained language model?",
      options: [
        "Number of layers and number of attention heads",
        "Compute (FLOPS) and dataset size (tokens)",
        "GPU memory and interconnect bandwidth",
        "Batch size and learning rate"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "The Chinchilla scaling results show that model quality depends strongly on the amount of training compute and the number of training tokens, with both scaled together. Architecture details, memory, and optimizer settings matter, but they are not the two primary resources identified by those scaling laws.",
      topic: "AI Lifecycle & Adoption",
      domain: "Essential AI Knowledge",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 80,
      question: "An organization needs to run LLM inference alongside professional visualization (ray tracing, rendering) on a single GPU server. Which GPU family best meets this requirement?",
      options: [
        "Hopper (H100)",
        "Ada Lovelace (L40S)",
        "Blackwell (B200)",
        "Grace CPU"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "The Ada Lovelace L40S combines data center AI inference with professional visualization features such as ray tracing and rendering. H100 and B200 are optimized primarily for AI and HPC compute, and Grace is a CPU platform.",
      topic: "NVIDIA Solutions & Use Cases",
      domain: "Essential AI Knowledge",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 81,
      question: "What is the primary purpose of TensorRT in an AI deployment pipeline?",
      options: [
        "Training large language models",
        "Collective communications for distributed training",
        "Optimizing trained models for inference on NVIDIA GPUs",
        "Monitoring GPU health in production"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "TensorRT optimizes trained models for inference by applying techniques such as layer fusion, kernel selection, and reduced precision. It does not train models, provide collective communications, or monitor GPU health.",
      topic: "NVIDIA Software Stack",
      domain: "Essential AI Knowledge",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 82,
      question: "Which statement about NVIDIA NGC is correct?",
      options: [
        "NGC is a paid cloud service for running AI training jobs",
        "NGC is a free catalog of GPU-optimized containers and pre-trained models",
        "NGC is NVIDIA's BMC management platform",
        "NGC requires an NVIDIA AI Enterprise license"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "NVIDIA NGC is a catalog of GPU-optimized containers, models, SDKs, and resources. It is not a BMC, and access to the catalog does not by itself require an AI Enterprise license, although some software may have separate licensing terms.",
      topic: "NVIDIA Software Stack",
      domain: "Essential AI Knowledge",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 83,
      question: "During transformer model training, which operation consumes the most GPU memory?",
      options: [
        "Storing model weights in FP32",
        "Storing all intermediate activations for backpropagation",
        "Loading training data from storage",
        "Gradient clipping"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Training must retain intermediate activations from the forward pass so that gradients can be computed during backpropagation. For many transformer configurations, activation storage dominates memory use. Weights, data loading, and gradient clipping also consume memory but usually less.",
      topic: "Training vs Inference",
      domain: "Essential AI Knowledge",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 84,
      question: "Which GPU is recommended for Virtual Desktop Infrastructure (VDI) workloads in the NVIDIA data center GPU use-case matrix?",
      options: [
        "H100",
        "B200",
        "L40S",
        "L4"
      ],
      correctAnswer: 3,
      correctAnswers: [3],
      explanation: "The NVIDIA L4 is designed for efficient virtual desktop and virtual PC workloads, with a low power envelope and support for graphics and video acceleration. H100 and B200 are high-end AI and HPC GPUs, and L40S targets AI inference plus professional visualization.",
      topic: "NVIDIA Solutions & Use Cases",
      domain: "Essential AI Knowledge",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 85,
      question: "The NVIDIA B200 GPU introduced which new precision format not present in Hopper?",
      options: [
        "INT8",
        "FP8",
        "BF16",
        "FP4"
      ],
      correctAnswer: 3,
      correctAnswers: [3],
      explanation: "Blackwell-generation B200 GPUs add FP4 support for very low-precision inference and training workloads. FP8 and BF16 were already available on Hopper, and INT8 has been used for inference on earlier generations.",
      topic: "GPU vs CPU Architecture",
      domain: "Essential AI Knowledge",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 86,
      question: "A 70B parameter model is to be served in FP16 precision. What is the minimum GPU memory required to hold the model weights?",
      options: [
        "35 GB",
        "70 GB",
        "140 GB",
        "280 GB"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "FP16 uses two bytes per parameter, so 70 billion parameters require about 140 GB just for the weights. Serving also needs memory for activations, key-value cache, and runtime overhead, so the practical requirement is higher than 140 GB.",
      topic: "GPU Systems & Scaling",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 87,
      question: "What is the key advantage of scale-up (multi-GPU within one node) compared to scale-out (multi-node)?",
      options: [
        "Higher fault tolerance",
        "Infinite horizontal scalability",
        "Much higher inter-GPU bandwidth and lower latency (NVLink)",
        "Lower cost per GPU"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Scale-up uses high-bandwidth, low-latency interconnects such as NVLink and NVSwitch inside a node, which is faster than crossing a cluster network. Scale-out provides greater horizontal scalability and fault tolerance but generally at higher communication latency.",
      topic: "GPU Systems & Scaling",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 88,
      question: "How many NVSwitch chips does the DGX H100 contain?",
      options: [
        "2",
        "4",
        "8",
        "16"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "The DGX H100 uses four fourth-generation NVSwitch chips to provide high-bandwidth all-to-all communication among its eight H100 GPUs. The switches work with NVLink to deliver the system's GPU-to-GPU fabric.",
      topic: "GPU Systems & Scaling",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 89,
      question: "What does PUE of 1.15 indicate?",
      options: [
        "15% of IT power is wasted on cooling",
        "15% of total power goes to IT equipment",
        "Total facility power is 15% higher than IT equipment power",
        "The facility is 15% below average efficiency"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "PUE is total facility power divided by IT equipment power. A PUE of 1.15 means facility power is 1.15 times IT power, or 15% higher, with the extra power covering cooling, distribution losses, and other overhead. It does not mean that all overhead is cooling alone.",
      topic: "Power & Cooling",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 90,
      question: "Which cooling method is commonly required for racks exceeding 40-50 kW power density?",
      options: [
        "Hot-aisle/cold-aisle containment with CRAC units",
        "Direct Liquid Cooling (DLC)",
        "Rear-door fan walls",
        "Immersion cooling only"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Above roughly 40-50 kW per rack, air cooling becomes impractical for many GPU-dense deployments, and direct liquid cooling is commonly required. Immersion cooling is an alternative, but it is not the only option, and containment or fan walls alone may not remove enough heat at very high density.",
      topic: "Power & Cooling",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 91,
      question: "What is the fundamental difference between E-W (East-West) and N-S (North-South) traffic in an AI cluster?",
      options: [
        "E-W is encrypted; N-S is plaintext",
        "E-W is GPU-to-GPU training traffic requiring RDMA; N-S is user/management traffic using standard TCP",
        "E-W uses Ethernet; N-S uses InfiniBand",
        "E-W is higher latency than N-S"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "East-west traffic moves between compute nodes and GPUs during distributed training and typically needs low latency and RDMA. North-south traffic moves between users or external systems and the data center, often over standard TCP. Either direction can use Ethernet or InfiniBand, and encryption is a separate concern.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 92,
      question: "NVIDIA states the key measurement for an AI-optimized network is:",
      options: [
        "Peak bandwidth utilization",
        "99th percentile packet latency",
        "How long an AI training job takes from start to finish",
        "Total throughput in Gbps"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "The network exists to make the AI workload finish faster, so job completion time is the outcome that matters most. Peak bandwidth, tail latency, and throughput are useful diagnostics, but they are means to that end rather than the ultimate measure.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 93,
      question: "What does RDMA's kernel bypass feature provide?",
      options: [
        "Allows the OS kernel to skip memory validation for faster transfers",
        "Enables data transfer without involving the OS kernel, reducing latency and CPU utilization",
        "Bypasses encryption for lower overhead",
        "Allows GPUs to skip PCIe and use NVLink for network transfers"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "RDMA lets network adapters access registered memory directly without the usual kernel-mediated data path. This reduces CPU overhead and latency. It does not skip memory safety validation, disable encryption, or replace PCIe with NVLink.",
      topic: "Data Center Protocols",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 94,
      question: "Which NVIDIA products must work together to enable RoCE adaptive routing and congestion control?",
      options: [
        "ConnectX-8 SuperNIC + Quantum-X800 switch",
        "BlueField-3 DPU + Spectrum-4 switch",
        "H100 GPU + ConnectX-7 NIC",
        "DOCA + NCCL"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "NVIDIA Spectrum-X combines BlueField-3 SuperNICs or DPUs with Spectrum-4 switches to provide RoCE-based adaptive routing, congestion control, and performance isolation for AI Ethernet fabrics. Quantum-X800 is an InfiniBand platform, and the other combinations do not provide the complete Spectrum-X feature set.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 95,
      question: "InfiniBand NDR provides what data rate per port?",
      options: [
        "200 Gbps",
        "400 Gbps",
        "800 Gbps",
        "1,600 Gbps"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "NDR InfiniBand provides 400 Gbps per port. HDR provides 200 Gbps, while newer generations such as XDR move to 800 Gbps and beyond.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 96,
      question: "What is the purpose of NVIDIA SHARP in the Quantum-X800 InfiniBand platform?",
      options: [
        "Adaptive routing to avoid congested switch ports",
        "Hardware security acceleration for encrypted communications",
        "Performing collective operations (e.g., all-reduce) inside the switch fabric",
        "Compressing packets to increase effective bandwidth"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "SHARP (Scalable Hierarchical Aggregation and Reduction Protocol) performs collective operations such as all-reduce inside the InfiniBand switch fabric. This reduces the amount of data that must travel to and from endpoints and speeds up distributed training. It is not a security or compression feature.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 97,
      question: "Which storage type is most appropriate for active training datasets on a large GPU cluster with hundreds of concurrent data workers?",
      options: [
        "Local NVMe (per node)",
        "NFS over 1GbE",
        "Parallel distributed file system (Lustre, WEKA)",
        "Object storage (S3-compatible)"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "A parallel distributed file system provides high aggregate bandwidth and concurrent access for many nodes, which is needed to keep accelerators fed. Local NVMe is limited to one node, NFS over 1GbE is too slow and not scalable enough, and object storage typically adds latency and is not ideal for active training data.",
      topic: "Cluster Components",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 98,
      question: "The DPU's isolate function protects the infrastructure by:",
      options: [
        "Encrypting all data in transit between GPU and CPU",
        "Moving infrastructure control/data plane to a separate DPU domain that operates independently if the host OS is compromised",
        "Creating isolated VLAN segments for each tenant",
        "Partitioning GPU memory into isolated regions"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "A DPU can run infrastructure services in a separate domain, isolated from the host operating system. If the host is compromised, the DPU can continue to enforce network, storage, and security policy. VLANs and GPU memory partitioning are separate isolation mechanisms.",
      topic: "DPUs",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 99,
      question: "The GB300 NVL72 contains how many Blackwell Ultra GPUs and Grace CPUs?",
      options: [
        "8 GPUs, 4 CPUs",
        "36 GPUs, 72 CPUs",
        "72 GPUs, 36 CPUs",
        "128 GPUs, 64 CPUs"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "The GB300 NVL72 is a rack-scale system with 72 Blackwell Ultra GPUs and 36 Grace CPUs. The 72-GPU count is the defining number in the NVL72 name, and the CPUs are paired across the rack-scale architecture.",
      topic: "GPU Systems & Scaling",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 100,
      question: "What does co-packaged optics (CPO) enable in NVIDIA Photonics switches?",
      options: [
        "Running optical transceivers in a separate switch chassis",
        "Integrating optical components directly in the switch ASIC package, reducing power and enabling higher port density",
        "Connecting CPUs and GPUs via fiber instead of PCIe",
        "Using photonic quantum computing for switching decisions"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Co-packaged optics places optical components on the same package as the switch ASIC. This shortens electrical paths, reduces power per bit, and supports higher port density than conventional pluggable optics. It is not quantum computing and does not replace PCIe for CPU-GPU links.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 101,
      question: "An AI Factory uses NVLink for scale-up. In NVIDIA's InfiniBand-based reference design, which fabric is used for scale-out across nodes?",
      options: [
        "Standard Ethernet",
        "InfiniBand",
        "RoCE",
        "PCIe Gen6"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "This question follows the common NVIDIA InfiniBand reference design in which NVLink and NVSwitch handle scale-up inside a node or rack, while InfiniBand provides the low-latency scale-out fabric between nodes. RoCE is also used for scale-out in Ethernet-based designs, so the InfiniBand answer is specific to the reference design named in the question.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 102,
      question: "NVIDIA BlueField-3 provides how much networking bandwidth?",
      options: [
        "100 GbE",
        "200 GbE",
        "400 GbE",
        "800 GbE"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "BlueField-3 is a 400 Gb/s infrastructure platform. BlueField-4 raises the ceiling to 800 Gb/s, so the 400 GbE answer applies to BlueField-3 specifically.",
      topic: "DPUs",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 103,
      question: "Which two factors determine GPU selection for an AI training workload? (Select two.)",
      options: [
        "GPU memory (model must fit)",
        "Number of PCIe lanes available",
        "Memory bandwidth",
        "GPU height (1U vs 2U)"
      ],
      correctAnswer: 0,
      correctAnswers: [0, 2],
      explanation: "GPU memory capacity determines whether the model, activations, and optimizer state can fit, and memory bandwidth affects how quickly data can be fed to the compute units. PCIe lane count and physical height can affect integration, but they are not the primary AI training selection factors.",
      topic: "GPU Systems & Scaling",
      domain: "AI Infrastructure",
      multiSelect: true,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 104,
      question: "What is GPUDirect RDMA's primary benefit?",
      options: [
        "Connects GPUs across data centers via fiber",
        "Eliminates the GPU to CPU memory copy in the data transfer path, saving copy operations and reducing PCIe transactions",
        "Provides encrypted GPU-to-GPU communication",
        "Enables GPUs to directly access InfiniBand switches without a NIC"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "GPUDirect RDMA lets a network adapter transfer data directly to or from GPU memory, avoiding an extra copy through host memory. This lowers latency and PCIe traffic. It does not provide encryption, replace the NIC, or by itself connect data centers.",
      topic: "Cluster Components",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 105,
      question: "What type of data center management does a BMC provide?",
      options: [
        "In-band management via the production network",
        "Out-of-band management independent of server OS state",
        "Application-level monitoring via SNMP",
        "Container orchestration"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "A baseboard management controller provides out-of-band management, remaining available even when the host operating system is down. It supports power control, console access, sensor monitoring, and firmware updates. It is not a container orchestrator or an application-level monitor.",
      topic: "Cluster Components",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 106,
      question: "What does DCGM stand for?",
      options: [
        "Data Compute GPU Metrics",
        "Data Center GPU Manager",
        "Distributed CUDA GPU Monitor",
        "Device Configuration and GPU Management"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "DCGM stands for NVIDIA Data Center GPU Manager. It provides GPU telemetry, health monitoring, diagnostics, and policy management across data center deployments.",
      topic: "Data Center Monitoring",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 107,
      question: "In a Kubernetes cluster, what does the NVIDIA Device Plugin provide?",
      options: [
        "Physical GPU drivers for the host kernel",
        "Exposes NVIDIA GPUs as schedulable Kubernetes resources (nvidia.com/gpu)",
        "Monitors GPU utilization and sends alerts",
        "Configures MIG partitions automatically"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "The NVIDIA Device Plugin advertises GPUs to Kubernetes as schedulable resources under names such as nvidia.com/gpu. Drivers are installed separately, monitoring is handled by DCGM and related tools, and MIG configuration is handled by MIG-specific components.",
      topic: "Orchestration & Scheduling",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 108,
      question: "What is gang scheduling and why is it required for distributed AI training?",
      options: [
        "Scheduling jobs in priority order to maximize GPU utilization",
        "Allocating all nodes of a job simultaneously before the job starts, preventing partial allocation deadlocks",
        "Grouping similar jobs together to batch process them",
        "Scheduling GPU operations in parallel within a single node"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Distributed training jobs need all of their workers running together. Gang scheduling allocates the entire job at once so that a job cannot hold partial resources while waiting for the rest, which avoids deadlocks and idle resources. It is not the same as priority scheduling or intra-node parallelism.",
      topic: "Orchestration & Scheduling",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 109,
      question: "Which NVIDIA tool automatically deploys the entire GPU software stack on Kubernetes nodes?",
      options: [
        "DCGM",
        "Triton Inference Server",
        "NVIDIA GPU Operator",
        "NVIDIA Base Command Platform"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "The NVIDIA GPU Operator automates the deployment and lifecycle of GPU drivers, the container toolkit, the device plugin, GPU feature discovery, and DCGM-based monitoring on Kubernetes. DCGM monitors GPUs, Triton serves models, and Base Command manages clusters.",
      topic: "Orchestration & Scheduling",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 110,
      question: "What is the maximum number of MIG instances on a single H100 80GB GPU?",
      options: [
        "4",
        "7",
        "8",
        "16"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "MIG can partition supported GPUs, including the H100, into as many as seven isolated instances. Each instance has dedicated compute, memory, and cache resources.",
      topic: "Virtualization",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 111,
      question: "When multiple tenants share a single GPU, which virtualization method provides the strongest isolation between them?",
      options: [
        "GPU passthrough",
        "NVIDIA vGPU",
        "MIG (Multi-Instance GPU)",
        "Docker containers without virtualization"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "MIG provides hardware-level partitioning with dedicated compute, memory, and cache for each instance, giving strong isolation and predictable quality of service between tenants sharing one GPU. Passthrough dedicates an entire GPU to one VM but does not provide a way to share that GPU among tenants. vGPU and ordinary containers provide weaker separation.",
      topic: "Virtualization",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 112,
      question: "A training job shows GPU Utilization at 95% but Model FLOP Utilization (MFU) is only 20%. What is the most likely root cause?",
      options: [
        "Network bottleneck causing gradient exchange delays",
        "Many small CUDA kernel launches with high overhead, rather than sustained Tensor Core compute",
        "Insufficient GPU memory",
        "Thermal throttling"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "High GPU utilization with low MFU means the GPU is busy but is not spending most of its time on useful matrix math. Frequent small kernel launches and overhead can keep the device active while delivering low sustained Tensor Core throughput. Network stalls would usually show lower utilization, and memory shortage or throttling have different signatures.",
      topic: "GPU Monitoring",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 113,
      question: "The monitoring stack for GPU clusters typically flows in which order?",
      options: [
        "Grafana then Prometheus then DCGM Exporter then DCGM",
        "DCGM then DCGM Exporter then Prometheus then Grafana",
        "DCGM then Grafana then Prometheus then Alerts",
        "Prometheus then DCGM then Grafana then DCGM Exporter"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "DCGM collects GPU telemetry, DCGM Exporter exposes it as metrics, Prometheus scrapes and stores those metrics, and Grafana visualizes them. The other orders put visualization before collection or otherwise reverse the data flow.",
      topic: "Data Center Monitoring",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 114,
      question: "What ECC error type requires immediate investigation and potentially GPU page retirement?",
      options: [
        "Single-bit errors (SBE) - correctable",
        "Double-bit errors (DBE) - uncorrectable",
        "Triple-bit errors (TBE)",
        "Parity errors"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Double-bit errors are uncorrectable and can corrupt data, so they require immediate investigation and may lead to page retirement or GPU replacement. Single-bit errors are correctable but should still be tracked for trends.",
      topic: "GPU Monitoring",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 115,
      question: "Which platform is NVIDIA's purpose-built solution for managing DGX clusters, including job scheduling, software lifecycle, and monitoring?",
      options: [
        "NVIDIA Fleet Command",
        "NVIDIA Base Command Platform",
        "Kubernetes with GPU Operator",
        "Slurm with DCGM"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "NVIDIA Base Command Platform is the purpose-built management layer for DGX clusters, covering provisioning, workload management, software lifecycle, and monitoring. Fleet Command targets edge systems, while Kubernetes and Slurm are general orchestration and scheduling tools.",
      topic: "Data Center Monitoring",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 116,
      question: "Which scheduler is most appropriate for managing large multi-node distributed training jobs in a research/HPC environment?",
      options: [
        "Kubernetes (vanilla)",
        "Slurm",
        "Docker Swarm",
        "Apache Mesos"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Slurm is widely used in HPC and research environments for queueing and allocating multi-node jobs, including GPU resources and gang-style allocations. Vanilla Kubernetes can run training workloads but is less specialized for traditional HPC batch scheduling, and Docker Swarm and Mesos are not the standard choices here.",
      topic: "Orchestration & Scheduling",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 117,
      question: "NVIDIA vGPU requires which software license?",
      options: [
        "No license - vGPU is included with GPU hardware",
        "An NVIDIA vGPU software license (through AI Enterprise or separately)",
        "NVIDIA DGX software",
        "CUDA Enterprise License"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "NVIDIA vGPU is licensed software and is available through NVIDIA AI Enterprise or a separate vGPU entitlement. It is not included automatically with the GPU hardware, and there is no CUDA Enterprise License product.",
      topic: "Virtualization",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 118,
      question: "At what GPU temperature does thermal throttling typically begin?",
      options: [
        "60 C",
        "75 C",
        "83-87 C",
        "100 C"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "Many data center GPUs begin reducing clocks as they approach their maximum operating temperature, commonly in the mid-80s Celsius, to protect the hardware. The exact threshold is model-specific, so operators should check the GPU's documented limits and monitor throttle reasons.",
      topic: "GPU Monitoring",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 119,
      question: "What Slurm flag requests 4 GPUs for a training job?",
      options: [
        "--gpus=4",
        "--gres=gpu:4",
        "--resource=gpu:4",
        "--accelerator=4"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Slurm uses generic resource requests, and the standard syntax for four GPUs is --gres=gpu:4. The other flags are not the standard Slurm generic-resource syntax.",
      topic: "Orchestration & Scheduling",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 120,
      question: "What is the primary purpose of Run:ai in a GPU cluster?",
      options: [
        "Replace DCGM for GPU health monitoring",
        "Kubernetes-native GPU scheduling with AI-specific features: quotas, fractions, preemption",
        "Serve inference via REST API",
        "Manage InfiniBand switch configurations"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "NVIDIA Run:ai provides Kubernetes-native GPU scheduling and management, including quotas, fractional GPU allocation, and preemption for AI workloads. It does not replace DCGM, serve models, or manage InfiniBand switches.",
      topic: "Orchestration & Scheduling",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 121,
      question: "An organization is deploying a multi-tenant GPU cluster for 20 data scientists. They need each scientist to have a guaranteed, isolated GPU resource allocation with no performance interference between users. The cluster uses H100 GPUs. Which virtualization method is best?",
      options: [
        "GPU passthrough (20 GPUs for 20 scientists)",
        "vGPU with time-slicing",
        "MIG with 2g.20gb profiles (3 instances per GPU, about 7 GPUs for 20 users with queuing)",
        "Docker containers without virtualization"
      ],
      correctAnswer: 2,
      correctAnswers: [2],
      explanation: "MIG provides hardware-isolated slices with dedicated memory and compute, which matches the requirement for guaranteed allocation without interference. Time-slicing does not provide full isolation, and plain containers do not partition GPU hardware. Passthrough would require one GPU per user and does not share a GPU across tenants.",
      topic: "Virtualization",
      domain: "AI Operations",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 122,
      question: "A training cluster has 99% GPU utilization but the team complains training is slow and gradient all-reduce is taking too long. The cluster uses 100 Gbps Ethernet. What should the infrastructure team investigate?",
      options: [
        "Increase GPU memory",
        "Upgrade to InfiniBand or higher-bandwidth Ethernet (400+ Gbps)",
        "Add more CPU cores",
        "Increase local NVMe storage"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "The symptom points to a communication bottleneck during gradient synchronization, and 100 Gbps Ethernet is undersized for a large distributed training fabric. Moving to InfiniBand or a higher-bandwidth, low-latency Ethernet design is the relevant investigation. More GPU memory, CPU cores, or local storage would not directly fix all-reduce time.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 123,
      question: "Which statement about NVIDIA-Certified Systems is correct?",
      options: [
        "They are only available from NVIDIA directly",
        "They validate a best baseline configuration for performance, security, and scale from partner OEMs",
        "They require NVIDIA AI Enterprise license to operate",
        "They are only available in PCIe form factor"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "NVIDIA-Certified Systems are partner-built servers that meet NVIDIA's validated baseline for performance, security, and scalability. They are sold by OEM partners, not only by NVIDIA, and certification is separate from an AI Enterprise software license.",
      topic: "GPU Systems & Scaling",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 124,
      question: "A company needs to build an AI cluster that processes regulated healthcare data. The team wants maximum GPU performance for LLM training. Which deployment model is most appropriate?",
      options: [
        "Public cloud (AWS/Azure/GCP)",
        "On-premises with DGX systems and InfiniBand",
        "Hybrid: training in cloud, data stored on-prem",
        "Edge deployment using Jetson modules"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Regulated data that must remain under organizational control, combined with a requirement for maximum training performance, points to on-premises DGX systems with a high-performance InfiniBand fabric. Public cloud and hybrid options can be compliant with the right controls, but they do not match the stated combination as directly, and Jetson is an edge platform.",
      topic: "On-Prem vs Cloud",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    },
    {
      id: 125,
      question: "NVIDIA Spectrum-X is described as the \"World's First Ethernet Platform for AI.\" What specific combination of technologies enables near-InfiniBand RDMA performance over standard Ethernet?",
      options: [
        "PCIe Gen6 + 800 Gbps Ethernet",
        "RoCEv2 + NCCL-optimized adaptive routing + congestion control, requiring BlueField-3 DPU + Spectrum-4 switch",
        "TCP over 100 Gbps Ethernet with hardware offload",
        "InfiniBand protocol encapsulated in Ethernet frames"
      ],
      correctAnswer: 1,
      correctAnswers: [1],
      explanation: "Spectrum-X combines RoCEv2 with adaptive routing, advanced congestion control, and telemetry across Spectrum-X switches and SuperNICs or DPUs. The BlueField-3 plus Spectrum-4 pairing is the generation described in the source question. It does not encapsulate InfiniBand or rely on ordinary TCP.",
      topic: "AI Networking",
      domain: "AI Infrastructure",
      multiSelect: false,
      sourceId: "ziash-cc-by-4.0"
    }
  ]
};
