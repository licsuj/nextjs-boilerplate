export type ExplainerCategory =
  | "AI Basics"
  | "AI Tools"
  | "AI Workflows"
  | "Comparisons";

export type Explainer = {
  slug: string;
  title: string;
  description: string;
  category: ExplainerCategory;
  intro: string;
  eli5: string[];
  whyItMatters: string;
  related: string[];
};

export const explainers: Explainer[] = [
  {
    slug: "what-is-chatgpt",
    title: "What is ChatGPT?",
    description:
      "A simple explanation of what ChatGPT is, how it works, and why so many people use it.",
    category: "AI Basics",
    intro:
      "ChatGPT is an AI assistant that understands your message and replies in natural language.",
    eli5: [
      "Think of ChatGPT like a very fast writing and thinking helper.",
      "You type a question, instruction, or idea.",
      "It looks at patterns it learned during training and predicts the most useful next words.",
      "It does not think like a human, but it can still be useful for writing, brainstorming, explaining, and organizing information.",
    ],
    whyItMatters:
      "ChatGPT is often the first AI tool people use. Once you understand it, many other AI tools start making sense too.",
    related: [
      "what-is-an-llm",
      "what-is-prompt-engineering",
      "chatgpt-vs-claude",
    ],
  },
  {
    slug: "what-is-an-ai-agent",
    title: "What is an AI agent?",
    description:
      "A plain-English explanation of what an AI agent is and how it differs from a normal chatbot.",
    category: "AI Basics",
    intro:
      "An AI agent is an AI system that can take steps to complete tasks, not just reply to messages.",
    eli5: [
      "A basic chatbot mostly talks to you.",
      "An AI agent can read information, decide what to do next, and sometimes use tools or apps.",
      "That means it feels more like an assistant that can act, not just answer.",
      "In simple terms, a chatbot chats. An agent chats and does.",
    ],
    whyItMatters:
      "AI agents are becoming a common way to automate research, support, task management, and internal workflows.",
    related: ["what-is-rag", "what-is-mcp", "what-is-prompt-engineering"],
  },
  {
    slug: "what-is-rag",
    title: "What is RAG?",
    description:
      "A simple explanation of retrieval-augmented generation and why AI tools use it.",
    category: "AI Workflows",
    intro:
      "RAG is a way of helping AI answer with outside information instead of relying only on what it already knows.",
    eli5: [
      "Imagine an AI taking an open-book test instead of a memory-only test.",
      "Before answering, it searches a trusted source like documents, notes, or a database.",
      "Then it uses that information to build a better answer.",
      "That usually makes the response more relevant and grounded.",
    ],
    whyItMatters:
      "RAG is one of the main ways businesses connect AI to internal knowledge, support content, and company documents.",
    related: ["what-is-an-ai-agent", "what-is-an-api", "what-is-mcp"],
  },
  {
    slug: "what-is-prompt-engineering",
    title: "What is prompt engineering?",
    description:
      "A plain-English explanation of prompt engineering and why better instructions improve AI results.",
    category: "AI Basics",
    intro:
      "Prompt engineering is the skill of giving AI clearer instructions so it produces better output.",
    eli5: [
      "If you ask a vague question, you usually get a vague answer.",
      "If you give clear context, format, and goals, the AI performs better.",
      "Prompt engineering is not magic. It is mostly about being specific and structured.",
      "You are helping the AI understand what a good answer looks like.",
    ],
    whyItMatters:
      "Better prompts save time, improve output quality, and make AI tools much more useful in everyday work.",
    related: [
      "what-is-chatgpt",
      "what-is-an-ai-agent",
      "what-is-a-system-prompt",
    ],
  },
  {
    slug: "what-is-an-api",
    title: "What is an API?",
    description:
      "A beginner-friendly explanation of APIs and how apps and AI tools connect to each other.",
    category: "AI Tools",
    intro:
      "An API is a way for one app or system to talk to another in a structured way.",
    eli5: [
      "Think of an API like a waiter in a restaurant.",
      "You tell the waiter what you want, and the waiter brings the request to the kitchen.",
      "Then the kitchen sends the result back through the waiter.",
      "Apps use APIs in a similar way to request data, actions, or services from other systems.",
    ],
    whyItMatters:
      "APIs are how AI tools connect to databases, CRMs, SaaS tools, and other products. Without APIs, most useful automation would be harder to build.",
    related: ["what-is-rag", "what-is-mcp", "what-is-an-ai-agent"],
  },
  {
    slug: "what-is-an-llm",
    title: "What is an LLM?",
    description:
      "A simple explanation of what a large language model is and why it powers tools like ChatGPT.",
    category: "AI Basics",
    intro:
      "An LLM, or large language model, is an AI model trained on huge amounts of text so it can understand and generate language.",
    eli5: [
      "It learns patterns from books, websites, articles, and other text.",
      "That training helps it predict what words should come next in a sentence.",
      "Because it has seen so much language, it can answer questions, summarize, rewrite, and explain ideas.",
      "ChatGPT is built on top of an LLM.",
    ],
    whyItMatters:
      "If you understand what an LLM is, you understand the engine behind many modern AI tools.",
    related: [
      "what-is-chatgpt",
      "what-is-a-token-in-ai",
      "chatgpt-vs-gemini",
    ],
  },
  {
    slug: "what-is-a-token-in-ai",
    title: "What is a token in AI?",
    description:
      "A simple explanation of what tokens are in AI and why they matter for prompts, responses, and costs.",
    category: "AI Basics",
    intro:
      "A token is a small chunk of text that an AI model reads and processes.",
    eli5: [
      "AI models do not read your message exactly the way a human does.",
      "They break text into smaller parts called tokens.",
      "A token can be a whole word, part of a word, punctuation, or a small text chunk.",
      "The more tokens a task uses, the more context and cost it may involve.",
    ],
    whyItMatters:
      "Tokens affect model limits, response length, speed, and pricing. They are one of the most important practical concepts in AI usage.",
    related: ["what-is-an-llm", "what-is-context-window", "what-is-chatgpt"],
  },
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude",
    description:
      "A plain-English comparison of ChatGPT and Claude so beginners can understand the difference.",
    category: "Comparisons",
    intro:
      "ChatGPT and Claude are both AI assistants, but they can feel different depending on the task.",
    eli5: [
      "Both tools can write, summarize, explain, and brainstorm.",
      "The differences usually show up in writing style, reasoning feel, interface, and how people use them in practice.",
      "One person may prefer one tool for coding, while another may prefer the other for writing or analysis.",
      "It is usually less about which one is universally better and more about which one fits your job.",
    ],
    whyItMatters:
      "Comparison pages help people choose the right AI tool instead of just following hype.",
    related: ["chatgpt-vs-gemini", "what-is-chatgpt", "what-is-an-llm"],
  },
  {
    slug: "chatgpt-vs-gemini",
    title: "ChatGPT vs Gemini",
    description:
      "A simple comparison of ChatGPT and Gemini for people who want to understand which assistant fits their needs.",
    category: "Comparisons",
    intro:
      "ChatGPT and Gemini are both popular AI assistants, but they are built by different companies and often feel different in use.",
    eli5: [
      "Both can answer questions, help write content, and explain topics.",
      "The main differences tend to be how they handle certain tasks, what ecosystem they connect to, and what style of answers people prefer.",
      "Some users care more about integrations. Others care more about writing style or workflow fit.",
      "The best choice often depends on how you plan to use AI day to day.",
    ],
    whyItMatters:
      "People searching comparisons usually have buying or usage intent, which makes these pages valuable for both SEO and monetization.",
    related: ["chatgpt-vs-claude", "what-is-chatgpt", "what-is-an-llm"],
  },
  {
    slug: "what-is-mcp",
    title: "What is MCP?",
    description:
      "A beginner-friendly explanation of MCP and why it matters for connecting AI to tools and data.",
    category: "AI Workflows",
    intro:
      "MCP is a standard way for AI tools to connect to outside systems, tools, or data sources more consistently.",
    eli5: [
      "Think of MCP like a standard plug that lets AI tools connect to many things in the same structured way.",
      "Without a shared standard, every connection might need custom work.",
      "With a shared approach, it becomes easier for AI systems to use tools and fetch information safely and consistently.",
      "That makes integrations more reusable and easier to manage.",
    ],
    whyItMatters:
      "MCP is becoming a useful concept in AI workflows because it helps explain how assistants and agents connect to real systems.",
    related: ["what-is-an-api", "what-is-an-ai-agent", "what-is-rag"],
  },
];
