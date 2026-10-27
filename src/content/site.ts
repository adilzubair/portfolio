// Single source of truth for everything shown on the site.
// Update facts here; components and SEO metadata read from this file.

export const site = {
  url: "https://muhamedadil.com",
  name: "Muhamed Adil",
  fullName: "Muhamed Adil Edavana Valappil",
  role: "Applied AI Engineer",
  location: "the UAE",
  city: "Abu Dhabi",
  timeZone: "Asia/Dubai",
  avatar: "/images/avatar.webp",
  email: "muhamedadil03@gmail.com",
  resume: "/resume.pdf",
  // Toggles the "open to roles" badge in the hero.
  availability: {
    open: false,
    label: "Open to on-site roles in the UAE",
  },
  headline:
    "I build LLM systems that hold up in production — retrieval, agents and fine-tuned models — and run the GPU infrastructure that serves them.",
  // Large pull-quote at the top of the About section.
  statement:
    "Models are the easy part. I work on everything around them — grounding, evaluation, serving, and the GPUs underneath.",
  // Scrolling strip under the hero.
  marquee: ["LangGraph", "RAG", "Ollama", "Kubernetes", "GPU serving", "FastAPI", "QLoRA", "PyTorch", "Go", "Python", "OpenVINO", "ChromaDB", "Docker", "Evaluation"],
  intro: [
    "I'm an AI engineer at Cyber Core Technology in Abu Dhabi. I build internal AI applications from implementation through deployment, and I run the GPU-backed Kubernetes cluster they're served from — installing GPU nodes, joining them to the cluster, and deploying and serving models on it.",
    "Before that, at Greentruth Technology, I built LLM-powered decision support on local models with evaluation pipelines and LoRA fine-tuning. Earlier I wrote Go and Python services at Cooee, optimized LLM inference on Intel CPUs with OpenVINO, and published two peer-reviewed papers on hyperspectral imaging as a research intern in Taiwan.",
    "Outside work I build local-first AI tools, like FindIt, offline multimodal search that travels on an external drive; Scout, a private launcher for Windows 11; and Loomin-Docs, a collaborative editor with a grounded AI assistant for air-gapped environments.",
  ],
  socials: [
    { label: "GitHub", handle: "adilzubair", href: "https://github.com/adilzubair" },
    { label: "LinkedIn", handle: "in/muhamedadil", href: "https://www.linkedin.com/in/muhamedadil/" },
    { label: "X", handle: "@adilwritescode", href: "https://x.com/adilwritescode" },
  ],
  // Spelling variants people search for; used in meta keywords and JSON-LD.
  alternateNames: [
    "Muhammed Adil",
    "Mohamed Adil",
    "Mohammed Adil",
    "Muhammad Adil",
    "Mohammad Adil",
    "Muhamed Adhil",
    "Muhammed Adhil",
    "Mohamed Adhil",
    "Mohammed Adhil",
    "Muhammad Adhil",
    "Mohammad Adhil",
    "Muhammed Adil Edavana Valappil",
    "Mohamed Adil Edavana Valappil",
    "Mohammed Adil Edavana Valappil",
    "Muhammad Adil Edavana Valappil",
    "Mohammad Adil Edavana Valappil",
    "Muhamed Adhil Edavana Valappil",
    "Muhammed Adhil Edavana Valappil",
    "Mohamed Adhil Edavana Valappil",
    "Mohammed Adhil Edavana Valappil",
    "Muhammad Adhil Edavana Valappil",
    "Mohammad Adhil Edavana Valappil",
  ],
  contactFormEndpoint: "https://getform.io/f/aqomozwa",
};

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "Cyber Core Technology",
    title: "AI Engineer",
    start: "Jul 2026",
    end: "Present",
    location: "Abu Dhabi, UAE",
    summary: "Internal AI applications and the GPU-backed Kubernetes platform they run on.",
    highlights: [
      "Develop internal AI applications from implementation through deployment.",
      "Set up GPU compute nodes, from operating system installation to integration into a Kubernetes cluster.",
      "Run day-to-day operations of the GPU-backed Kubernetes infrastructure.",
      "Deploy and serve AI models on the cluster.",
    ],
  },
  {
    company: "Greentruth Technology",
    title: "Software Engineer",
    start: "Aug 2025",
    end: "Jun 2026",
    location: "Dubai, UAE",
    summary:
      "AI-powered decision support for enterprise operations, built on LLMs and small language models.",
    highlights: [
      "Designed and deployed decision support applications using LLMs and SLMs to automate operational workflows.",
      "Led the move to local LLM inference with Ollama, cutting external API dependency and keeping sensitive data on-premise.",
      "Built evaluation pipelines combining BLEU, ROUGE and human review to track factuality and drive down hallucinations.",
      "Shipped LLM inference behind FastAPI with JWT auth, rate limiting and structured output validation.",
      "Fine-tuned BERT, GPT-2 and Phi-3 on domain data with LoRA and QLoRA on consumer GPUs.",
      "Built Stable Diffusion image generation and vision-enabled chat workflows.",
    ],
  },
  {
    company: "Cooee",
    title: "Software Engineer",
    start: "May 2025",
    end: "Jul 2025",
    location: "Remote, Australia",
    summary: "Backend microservices in Go and Python for a consumer platform targeting 100K+ users.",
    highlights: [
      "Reworked async workflows and RabbitMQ queues, cutting end-to-end notification latency by 90%.",
      "Profiled API and database query paths to fix bottlenecks affecting 1,000+ users.",
      "Optimized PostgreSQL queries and schema migrations, cutting database response times by 40%.",
      "Built a transactional number-porting API with validation, audit trail and admin controls.",
      "Implemented JWT auth, OAuth flows and audit logging for sensitive operations.",
    ],
  },
  {
    company: "National Chung Cheng University",
    title: "Research Intern",
    start: "Jul 2024",
    end: "Sep 2024",
    location: "Chiayi, Taiwan",
    summary:
      "Hyperspectral imaging pipelines and ML research; co-authored two peer-reviewed papers.",
    highlights: [
      "Co-authored “Modern Trends and Recent Applications of Hyperspectral Imaging” (Technologies, 2025), analyzing 150+ studies on ML/DL for classification and detection across healthcare, agriculture, remote sensing, and environmental monitoring.",
      "Co-authored “Advancing Urban Development: Applications of Hyperspectral Imaging in Smart City Innovations and Sustainable Solutions” (Smart Cities, 2025), reviewing AI/IoT-enabled HSI for air and water quality, waste management, transportation, and energy, with focus on edge computing and real-time processing.",
    ],
  },
  {
    company: "Intel Corporation",
    title: "Industrial Trainee, GenAI Edge Deployment",
    start: "May 2024",
    end: "Jul 2024",
    location: "Bangalore, India",
    summary: "LLM inference optimization on Intel CPUs with OpenVINO.",
    highlights: [
      "Quantized and graph-optimized TinyLlama inference for Intel AI laptops.",
      "Automated model conversion and latency/throughput benchmarking across hardware.",
      "Built a Gradio interface for real-time inference with tunable decoding parameters.",
    ],
  },
  {
    company: "Al Wafaa Group",
    title: "Data Analyst Intern",
    start: "Aug 2023",
    end: "Sep 2023",
    location: "Dubai, UAE",
    summary: "ETL, CRM automation and dashboards for sales and retention.",
    highlights: [
      "Automated an ETL pipeline over 3,000+ customer records to surface upsell and retention insights.",
      "Automated lead qualification and CRM workflows in Python, reducing manual effort by 70%.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  repo?: string;
  live?: string;
  // Shown instead of a source link, e.g. for a private repository.
  status?: string;
  featured?: boolean;
};

// Featured projects lead with production-style AI work: retrieval, agents, on-device inference, deployment.
export const projects: Project[] = [
  {
    slug: "cortex",
    title: "Cortex",
    tagline: "Multi-agent coding assistant for your own codebase",
    description:
      "A RAG-based coding assistant orchestrated with LangGraph: a planner, explorer and builder sub-agents share tools over an incrementally indexed repo. SHA-256 change detection keeps re-indexing cheap, Jedi LSP adds static analysis for Python, and retrieval is reranked before it reaches the model. Runs on local models via Ollama or on OpenAI, across multiple projects.",
    stack: ["LangGraph", "LangChain", "Ollama", "ChromaDB", "Jedi LSP", "Python"],
    repo: "https://github.com/adilzubair/cortex",
    featured: true,
  },
  {
    slug: "findit",
    title: "FindIt",
    tagline: "Offline multimodal search that travels with your drive",
    description:
      "Prepare an external drive once, then search its photos, videos, documents and audio offline on any Windows PC — the app, models and index travel with the drive. On-device EmbeddingGemma 2 puts text, images, video and audio in one vector space; USearch ANN and SQLite full-text results are merged with reciprocal rank fusion. Whisper transcribes speech with offline voice-activity detection, face matching enables named-people search, and a benchmark tool measures retrieval against exhaustive search at scale.",
    stack: ["C# / .NET", "EmbeddingGemma 2", "Whisper", "USearch", "SQLite FTS5"],
    repo: "https://github.com/adilzubair/FindIt",
    live: "https://findit.muhamedadil.com/",
    featured: true,
  },
  {
    slug: "loomin-docs",
    title: "Loomin-Docs",
    tagline: "Collaborative writing with a grounded AI assistant, fully air-gapped",
    description:
      "An offline-first collaborative editor for air-gapped environments: real-time TipTap editing over websockets, an AI sidebar grounded in uploaded PDFs and notes via FAISS retrieval, PII masking before prompt assembly, and switchable Ollama models. Ships as an offline Docker bundle for a clean RHEL 9 VM, with a deterministic RAG faithfulness check.",
    stack: ["FastAPI", "React", "Ollama", "FAISS", "Docker", "RHEL 9"],
    repo: "https://github.com/adilzubair/Loomin-Docs",
    featured: true,
  },
  {
    slug: "scout",
    title: "Scout",
    tagline: "A private launcher for Windows 11, with optional local AI",
    description:
      "Search apps, files and browser history in plain language, preview results, control Windows settings and reopen saved workspaces from one shortcut. Everything runs locally; optional on-device models (Laya decision models for ranking and intent, EmbeddingGemma 2 for multimodal search) refine results without sending data anywhere. Public beta.",
    stack: ["C#", ".NET", "WPF", "EmbeddingGemma", "Local AI"],
    repo: "https://github.com/adilzubair/scout",
    live: "https://scout.muhamedadil.com/",
    featured: true,
  },
  {
    slug: "ai-harness-basics",
    title: "AI Harness Basics",
    tagline: "An agent harness, built up in five runnable stages",
    description:
      "A Python take on TejasQ's basically-ai-harness: a raw tool-using loop, then guardrails and context trimming, a harness that owns the environment, verification with retries, and deterministic recovery logic.",
    stack: ["Python", "Agents"],
    repo: "https://github.com/adilzubair/AI-harness-basics",
  },
  {
    slug: "agents-from-scratch",
    title: "Agents from Scratch",
    tagline: "Agent design patterns, built from the ground up in Python",
    description:
      "Building blocks and workflows for AI agents: tool use, retrieval, structured outputs, prompt chaining, routing, parallelization and orchestration.",
    stack: ["Python", "LLMs"],
    repo: "https://github.com/adilzubair/agents-from-scratch",
  },
  {
    slug: "fine-tuning",
    title: "Phi-3 Medical QLoRA",
    tagline: "QLoRA fine-tuning of small LLMs on consumer GPUs",
    description:
      "QLoRA fine-tunes of Phi-3-mini on medical Q&A with 4-bit quantization, training ~1% of parameters; companion experiments cover LoRA instruction-tuning of GPT-2 Medium and PEFT versus full fine-tuning on DistilBERT.",
    stack: ["PyTorch", "Hugging Face PEFT", "QLoRA", "bitsandbytes"],
    repo: "https://github.com/adilzubair/phi3-medical-qlora",
  },
  {
    slug: "openvino-llm",
    title: "TinyLlama on Intel CPUs",
    tagline: "OpenVINO-optimised LLM chatbot for Intel AI laptops",
    description:
      "Converts and compresses TinyLlama to OpenVINO for CPU inference, served through a Gradio chat UI with tunable temperature, top-p, top-k and repetition penalty. Built during the Intel industrial training.",
    stack: ["OpenVINO", "Python", "Gradio"],
    repo: "https://github.com/adilzubair/Bitmasters_Intel_LLM",
  },
  {
    slug: "local-rag",
    title: "Local RAG Agents",
    tagline: "Agentic RAG experiments: Docling parsing, LangGraph, FastAPI",
    description:
      "A set of local RAG systems running Mistral and Phi-3 through Ollama: an agentic chat with semantic chunking over ChromaDB, a Docling-based multi-format document agent with LangGraph, and streaming and Wikipedia-sourced variants.",
    stack: ["LangGraph", "LangChain", "Docling", "ChromaDB", "FastAPI"],
    repo: "https://github.com/adilzubair/local-rag-agents",
  },
  {
    slug: "prism",
    title: "PRISM",
    tagline: "Multi-model, multimodal chat with per-user cost tracking",
    description:
      "A full-stack chat platform with streaming responses, image input, conversation memory and switching between OpenAI and Gemini. Every request is metered so token usage and API cost are visible per user, with JWT-isolated conversations on a React, Radix and Tailwind frontend.",
    stack: ["FastAPI", "React", "TypeScript", "OpenAI", "Gemini"],
    repo: "https://github.com/adilzubair/switch-chat",
  },
  {
    slug: "odin",
    title: "Odin",
    tagline: "Multi-agent trading companion with autonomous trading and alerts",
    description:
      "A team of analyst, trader and risk-manager agents reviews a stock from different angles, alongside autonomous trading through Alpaca, real-time monitoring and alerts that fire when past market conditions recur. Built with collaborators.",
    stack: ["FastAPI", "Next.js", "ChromaDB", "PostgreSQL", "Alpaca"],
    repo: "https://github.com/adilzubair/Odin-AI-Trading-Companion",
  },
  {
    slug: "deckspring",
    title: "Deckspring",
    tagline: "Create and edit slide decks with AI — hosted or local",
    description:
      "Generates a deck from a prompt, keeps each slide as editable React source, and exports to HTML, PDF or editable PowerPoint. Run it locally with any OpenAI-compatible model, or use the hosted version with a private deck library.",
    stack: ["TypeScript", "React", "pnpm + Turbo"],
    repo: "https://github.com/adilzubair/deckspring",
    live: "https://deckspring.muhamedadil.com/",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "LLM & ML",
    items: ["RAG", "Agentic workflows", "LangGraph", "LangChain", "LoRA / QLoRA", "PEFT", "PyTorch", "Transformers", "Evaluation (BLEU, ROUGE, human)"],
  },
  { group: "Serving & inference", items: ["Model serving on Kubernetes", "Ollama", "OpenVINO", "Quantization", "Gradio"] },
  { group: "Backend", items: ["FastAPI", "Go", "Node.js", "RabbitMQ", "JWT / OAuth"] },
  { group: "Data", items: ["PostgreSQL", "SQLite", "MongoDB", "ChromaDB", "FAISS", "SQLAlchemy"] },
  { group: "Infra", items: ["Kubernetes", "GPU nodes", "Docker", "Linux", "GitHub Actions", "AWS"] },
  { group: "Languages", items: ["Python", "Go", "TypeScript", "C#", "SQL", "C"] },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  // The entry matching `me` is highlighted when rendered.
  authors: string[];
  me: string;
  doi: string;
  href: string;
};

// Peer-reviewed papers from the NCCU research internship.
export const publications: Publication[] = [
  {
    title: "Modern Trends and Recent Applications of Hyperspectral Imaging: A Review",
    venue: "Technologies 13(5), 170",
    year: "2025",
    authors: ["M.-F. Cheng", "A. Mukundan", "R. Karmakar", "M. A. Edavana Valappil", "J. Jouhar", "H.-C. Wang"],
    me: "M. A. Edavana Valappil",
    doi: "10.3390/technologies13050170",
    href: "https://www.mdpi.com/2227-7080/13/5/170",
  },
  {
    title:
      "Advancing Urban Development: Applications of Hyperspectral Imaging in Smart City Innovations and Sustainable Solutions",
    venue: "Smart Cities 8(2), 51",
    year: "2025",
    authors: ["A. Mukundan", "R. Karmakar", "J. Jouhar", "M. A. Edavana Valappil", "H.-C. Wang"],
    me: "M. A. Edavana Valappil",
    doi: "10.3390/smartcities8020051",
    href: "https://www.mdpi.com/2624-6511/8/2/51",
  },
];

export const achievements: { title: string; detail: string; year?: string }[] = [
  { title: "Winner, Yukthi Hackathon", detail: "GPT-powered WhatsApp ordering bot", year: "2024" },
  { title: "Runner-up, FrostCode Hackathon", detail: "AI chatbot development" },
  { title: "Finalist, EY CTF Challenge", detail: "Cybersecurity meets machine learning" },
  {
    title: "President, Saintgits AI Club",
    detail: "Led workshops, hackathons and speaker events; mentored members",
    year: "2024 – 2025",
  },
];

export const education = {
  school: "Saintgits College of Engineering",
  degree: "B.Tech, Computer Science and Engineering",
  years: "2021 – 2025",
  location: "Kerala, India",
};
