---
title: How Cortex Reads Your Code Like You Do
description: Building an AI coding assistant that actually understands your codebase — from incremental SHA-256 indexing and LSP-powered static analysis to semantic search with reranking. Multi-agent orchestration with LangGraph, and answers grounded in what was actually retrieved.
date: 2026-04-06
tags: [RAG, LangGraph, AI, Python]
---

Most AI coding assistants treat your codebase like a giant paste bin. They cram everything into prompts, hope the model finds relevant context, and cross their fingers. I built Cortex because I was tired of that approach — a coding assistant that actually reads and understands your code.

## The Problem with Naive RAG

Chunk your files, embed them, run similarity search — that's the standard RAG playbook. It works fine for blog posts and documentation but falls apart on code. Code has structure, dependencies, and context that flat text chunks destroy. I needed something better.

## Incremental SHA-256 Indexing

Nobody wants to re-index their entire codebase every time they save a file. Cortex computes SHA-256 hashes for every file and only re-indexes what changed. Combined with a real-time file watcher, it stays in sync without wasting compute. The result: near-instant indexing even for large repositories.

## LSP-Powered Static Analysis

Raw text isn't enough. Cortex integrates with the Language Server Protocol to understand symbols, references, and type information. It knows what functions call what, where classes inherit from, and which imports actually matter. This semantic understanding is what separates a dumb chunker from a real code assistant.

## Multi-Agent Orchestration with LangGraph

Cortex doesn't use a single monolithic agent. Instead, it orchestrates specialized agents through LangGraph — one for semantic search with reranking, one for static analysis, another for code generation. Each agent has a defined role and they collaborate through structured messages. Think of it like a dev team, not a solo junior.

## Grounding as a Design Rule

Every response is built from retrieved context, and the agents are instructed to say so when they can't find what they need, rather than guess at functions or APIs. That doesn't make hallucination impossible: a model can still misread good context. It does make failures easier to spot, because each claim traces back to a file and a symbol you can open and check. For a developer tool, that traceability matters more than a promise of perfection.

---

Cortex is open source and available on GitHub. It supports both local models via Ollama and OpenAI, with multi-project management built in.

[Check it out on GitHub →](https://github.com/adilzubair/cortex)
