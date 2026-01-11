
const imageDimensions = {
  "/images/projects/agentic-rag-chatbot.png": { width: 1295, height: 677 },
  "/images/projects/prism-chatbot.png": { width: 2940, height: 1607 },
  "/images/projects/QuickEval.png": { width: 1897, height: 925 },
  "/images/projects/Crashchain.png": { width: 1886, height: 902 },
  "/images/projects/fine-tuning.png": { width: 1364, height: 568 },
  "/images/projects/transformer-architecture.png": { width: 2026, height: 1106 },
  "/images/projects/propease.png": { width: 1902, height: 970 },
  "/images/projects/footbot.png": { width: 495, height: 259 },
};

export const projects = [
  {
    title: "Local Agentic RAG (Ollama & Private Data)",
    description:
      "Built a secure, local RAG system using Ollama to run models like Mistral and Phi-3 on private enterprise data, ensuring offline capability. Implemented strict agentic logic using LangGraph to ensure responses were 100% grounded in retrieved context with no hallucinations.",
    tech: ["LangChain", "Ollama", "ChromaDB", "LangGraph", "Python"],
    code: "https://github.com/adilzubair/local-rag-agents",
    live: "",
    thumbnail: "/images/projects/agentic-rag-chatbot.png",
    featured: true,
  },
  {
    title: "PRISM - Full Stack Multimodal Chatbot",
    description:
      "Developed a multi-conversation platform featuring streaming responses, multimodal vision support, and conversation memory. Implemented a comprehensive usage tracking system to monitor token consumption and calculate real-time API costs per user.",
    tech: ["FastAPI", "React", "TypeScript", "OpenAI", "Gemini"],
    code: "https://github.com/adilzubair/switch-chat",
    live: "",
    thumbnail: "/images/projects/prism-chatbot.png",
    featured: true,
  },
  {
    title: "QuickEval - AI Answer Sheet Evaluator",
    description:
      "QuickEval is an intelligent web application that automates the evaluation of student answer sheets using AI, helping educators save time and maintain consistency in grading. Built with React.js, Node.js, and MongoDB, it leverages the OpenAI API to assess answers, provide detailed scoring with confidence levels and remarks, and generate comprehensive evaluation reports.",
    tech: ["React.js", "Node.js", "MongoDB", "OpenAI API"],
    code: "https://github.com/adilzubair/QuickEval",
    live: "",
    thumbnail: "/images/projects/QuickEval.png",
    featured: true,
  },
  {
    title: "Crashchain - Digital Forensics Platform",
    description:
      "A secure, blockchain-integrated platform for capturing and verifying vehicle crash data. This tool ensures tamper-proof storage and validation of OBD data and crash footage using Ethereum smart contracts. It features real-time data collection, anomaly detection, and a user-friendly dashboard for investigators.",
    tech: ["Node.js", "Ethereum", "Web3.js", "Truffle", "Smart Contracts"],
    code: "https://github.com/Project-SCE/Crashchain",
    live: "",
    thumbnail: "/images/projects/Crashchain.png",
    featured: false,
  },
  {
    title: "LLM Fine-Tuning & Quantization",
    description:
      "Fine-tuned Phi-3-mini and GPT-2 Medium models using QLoRA, achieving 99% reduction in trainable parameters. Applied 4-bit quantization to enable high-performance model training and deployment on consumer-grade GPUs.",
    tech: ["Hugging Face PEFT", "QLoRA", "PyTorch", "bitsandbytes"],
    code: "https://github.com/adilzubair/phi3-medical-qlora",
    live: "",
    thumbnail: "/images/projects/fine-tuning.png",
    featured: false,
  },
  {
    title: "Transformer Architecture from Scratch",
    description:
      "Implemented a complete GPT-style transformer with multi-head self-attention, positional embeddings, and residual connections. Developed character-level tokenization and autoregressive decoding.",
    tech: ["PyTorch", "TensorFlow", "Deep Learning"],
    code: "https://github.com/adilzubair/transformer-lab",
    live: "",
    thumbnail: "/images/projects/transformer-architecture.png",
    featured: false,
  },
  {
    title: "PropEase - Real Estate SaaS Landing Page",
    description:
      "PropEase is a modern, responsive landing page designed for real estate SaaS platforms. Built with React, Vite, and Tailwind CSS, it offers a clean UI to showcase property listings, agent profiles, and real estate services. The project emphasizes performance and scalability, making it ideal for startups and real estate tech solutions.",
    tech: ["React", "Vite", "Tailwind CSS", "SaaS"],
    code: "https://github.com/adilzubair/propease",
    live: "",
    thumbnail: "/images/projects/propease.png",
    featured: false,
  },
  {
    title: "FoodBot - LLM-based Chatbot",
    description:
      "Created a GPT-powered WhatsApp bot for restaurant ordering with integrated RESTful backend services. Built with extensibility and error handling logic.",
    tech: ["GPT", "WhatsApp API", "REST APIs", "Python"],
    code: "https://github.com/adilzubair/Yukthi_hackathon",
    live: "",
    thumbnail: "/images/projects/footbot.png",
    featured: false,
  },
  /*
    {
      title: "World Economic Data Platform for IBM",
      description:
        "Led analytics project using IBM Cognos to centralize global datasets and generate dashboards with rule-based alert systems. Used REST endpoints for data sync.",
      tech: ["IBM Cognos", "Dashboards", "REST APIs"],
      code: "https://github.com/adilzubair/IBM-Hack-Challenge",
      live: "",
      thumbnail: null,
      featured: false,
    },
  */
  /*
    {
      title: "LedgerTrue - Anomaly Detection Dashboard",
      description:
        "Engineered modular backend using FastAPI and React, with support for Excel-based input and visual insights. Integrated basic load balancing strategy for concurrency.",
      tech: ["FastAPI", "React", "Excel", "Python"],
      code: "https://github.com/adilzubair/Ledger-True",
      live: "",
      thumbnail: null,
      featured: false,
    },
  */
];

export { imageDimensions };

