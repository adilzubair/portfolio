export const posts = [
  {
    slug: "how-cortex-reads-your-code",
    title: "How Cortex Reads Your Code Like You Do",
    description:
      "Building an AI coding assistant that actually understands your codebase — from incremental SHA-256 indexing and LSP-powered static analysis to semantic search with reranking. Multi-agent orchestration with LangGraph, zero hallucinations.",
    date: "2025-04-06",
    readTime: "5 min read",
    tags: ["RAG", "LangGraph", "AI", "Python"],
  },

  // Add more posts below this line:
  // {
  //   slug: "building-agentic-ai-systems",
  //   title: "Building Agentic AI Systems",
  //   description: "A deep dive into building autonomous AI agents with LangChain and LangGraph...",
  //   date: "2025-03-15",
  //   readTime: "8 min read",
  //   tags: ["AI", "LangChain", "Python"],
  // },
];

export const fullPosts = {
  "how-cortex-reads-your-code": {
    intro:
      "Most AI coding assistants treat your codebase like a giant paste bin. They cram everything into prompts, hope the model finds relevant context, and cross their fingers. I built Cortex because I was tired of that approach — a coding assistant that actually reads and understands your code.",
    sections: [
      {
        heading: "The Problem with Naive RAG",
        body:
          "Chunk your files, embed them, run similarity search — that's the standard RAG playbook. It works fine for blog posts and documentation but falls apart on code. Code has structure, dependencies, and context that flat text chunks destroy. I needed something better.",
      },
      {
        heading: "Incremental SHA-256 Indexing",
        body:
          "Nobody wants to re-index their entire codebase every time they save a file. Cortex computes SHA-256 hashes for every file and only re-indexes what changed. Combined with a real-time file watcher, it stays in sync without wasting compute. The result: near-instant indexing even for large repositories.",
      },
      {
        heading: "LSP-Powered Static Analysis",
        body:
          "Raw text isn't enough. Cortex integrates with the Language Server Protocol to understand symbols, references, and type information. It knows what functions call what, where classes inherit from, and which imports actually matter. This semantic understanding is what separates a dumb chunker from a real code assistant.",
      },
      {
        heading: "Multi-Agent Orchestration with LangGraph",
        body:
          "Cortex doesn't use a single monolithic agent. Instead, it orchestrates specialized agents through LangGraph — one for semantic search with reranking, one for static analysis, another for code generation. Each agent has a defined role and they collaborate through structured messages. Think of it like a dev team, not a solo junior.",
      },
      {
        heading: "Zero Hallucinations by Design",
        body:
          "Every response is grounded in retrieved context. If the agents can't find relevant information, they say so — no made-up functions or imaginary APIs. This strict grounding is non-negotiable for a developer tool. You can't ship code based on an AI hallucination.",
      },
    ],
    conclusion: `Cortex is open source and available on GitHub. It supports both local models via Ollama and OpenAI, with multi-project management built in.`,
    github: "https://github.com/adilzubair/cortex",
    githubLabel: "Check it out on GitHub",
  },
};
