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
  faq?: {
    question: string;
    answer: string;
  }[];
  searchIntent?: "definition" | "comparison" | "workflow" | "tool";
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  publishedAt?: string;
  updatedAt?: string;
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
    faq: [
      {
        question: "What is ChatGPT in simple terms?",
        answer:
          "ChatGPT is an AI assistant that responds to your messages in natural language.",
      },
      {
        question: "Why does ChatGPT matter?",
        answer:
          "ChatGPT is often the first AI product people use, so understanding it makes many other AI concepts easier to follow.",
      },
      {
        question: "What should I learn after ChatGPT?",
        answer:
          "A good next step is to learn what an LLM is, how prompt engineering works, and how ChatGPT compares to other assistants.",
      },
    ],
    searchIntent: "definition",
    primaryKeyword: "what is chatgpt",
    secondaryKeywords: ["chatgpt explained", "chatgpt meaning", "how chatgpt works"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
  },
  {
    slug: "what-is-an-ai-agent",
    title: "What is an AI agent?",
    description:
      "A plain-English explanation of what an AI agent is and how it differs from a normal chatbot.",
    category: "AI Workflows",
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
    faq: [
      {
        question: "What is an AI agent in simple terms?",
        answer:
          "An AI agent is an AI system that can take actions and complete steps, not just answer questions.",
      },
      {
        question: "What is the difference between an AI agent and a chatbot?",
        answer:
          "A chatbot mainly talks, while an AI agent can also decide, act, and use tools in a workflow.",
      },
      {
        question: "What should I learn after AI agents?",
        answer:
          "A good next step is to learn about RAG, MCP, and AI automation.",
      },
    ],
    searchIntent: "workflow",
    primaryKeyword: "what is an ai agent",
    secondaryKeywords: ["ai agent meaning", "ai agent explained", "ai agent vs chatbot"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
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
    faq: [
      {
        question: "What is RAG in simple terms?",
        answer:
          "RAG helps AI look up outside information before answering, instead of relying only on its internal knowledge.",
      },
      {
        question: "Why does RAG matter?",
        answer:
          "RAG is one of the main ways companies make AI more useful, current, and grounded in real documents or data.",
      },
      {
        question: "What should I learn after RAG?",
        answer:
          "The best next pages are MCP, AI agents, and vector databases.",
      },
    ],
    searchIntent: "workflow",
    primaryKeyword: "what is rag",
    secondaryKeywords: ["retrieval augmented generation explained", "rag ai meaning"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
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
    faq: [
      {
        question: "What is prompt engineering in simple terms?",
        answer:
          "Prompt engineering is the skill of writing better instructions so AI gives better results.",
      },
      {
        question: "Why does prompt engineering matter?",
        answer:
          "Better prompts improve quality, save time, and make AI tools more useful in real work.",
      },
      {
        question: "What should I learn after prompt engineering?",
        answer:
          "A good next step is to learn about system prompts, AI agents, and ChatGPT itself.",
      },
    ],
    searchIntent: "definition",
    primaryKeyword: "what is prompt engineering",
    secondaryKeywords: ["prompt engineering explained", "prompt engineering meaning"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
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
    faq: [
      {
        question: "What is an API in simple terms?",
        answer:
          "An API is a structured way for one app or system to talk to another.",
      },
      {
        question: "Why do APIs matter in AI?",
        answer:
          "APIs let AI tools connect to apps, systems, and external data.",
      },
      {
        question: "What should I learn after APIs?",
        answer:
          "A good next step is to learn about MCP, RAG, and AI agents.",
      },
    ],
    searchIntent: "tool",
    primaryKeyword: "what is an api",
    secondaryKeywords: ["api explained", "api meaning for beginners"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
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
    faq: [
      {
        question: "What is an LLM in simple terms?",
        answer:
          "An LLM is an AI model trained on a huge amount of text so it can understand and generate language.",
      },
      {
        question: "Why do LLMs matter?",
        answer:
          "LLMs power many modern AI tools, including assistants like ChatGPT.",
      },
      {
        question: "What should I learn after LLMs?",
        answer:
          "A good next step is to learn about tokens, context windows, and ChatGPT.",
      },
    ],
    searchIntent: "definition",
    primaryKeyword: "what is an llm",
    secondaryKeywords: ["llm explained", "large language model meaning"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
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
    faq: [
      {
        question: "What is a token in simple terms?",
        answer:
          "A token is a small chunk of text that an AI model processes.",
      },
      {
        question: "Why do tokens matter?",
        answer:
          "Tokens affect model limits, prompt size, response length, and pricing.",
      },
      {
        question: "What should I learn after tokens?",
        answer:
          "A good next step is to learn about context windows and LLMs.",
      },
    ],
    searchIntent: "definition",
    primaryKeyword: "what is a token in ai",
    secondaryKeywords: ["ai token meaning", "tokens in llms explained"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
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
    searchIntent: "comparison",
    primaryKeyword: "chatgpt vs claude",
    secondaryKeywords: ["claude vs chatgpt", "chatgpt or claude"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
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
    searchIntent: "comparison",
    primaryKeyword: "chatgpt vs gemini",
    secondaryKeywords: ["gemini vs chatgpt", "chatgpt or gemini"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
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
    searchIntent: "workflow",
    primaryKeyword: "what is mcp",
    secondaryKeywords: ["model context protocol explained", "mcp in ai"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
  },
  {
    slug: "what-is-context-window",
    title: "What is a context window?",
    description:
      "A simple explanation of context windows in AI and why long inputs sometimes still fail.",
    category: "AI Basics",
    intro:
      "A context window is the amount of information an AI model can pay attention to at one time.",
    eli5: [
      "Think of it like the AI's working memory during one task or conversation.",
      "A larger context window means more text can fit into that active space.",
      "But fitting more information in does not automatically mean the model will use it perfectly.",
      "It mainly affects how much text, history, or document content the model can handle at once.",
    ],
    whyItMatters:
      "Context windows affect document analysis, long prompts, chat history, and many real-world AI workflows.",
    related: ["what-is-a-token-in-ai", "what-is-an-llm", "what-is-chatgpt"],
    searchIntent: "definition",
    primaryKeyword: "what is a context window",
    secondaryKeywords: ["context window explained", "ai context window meaning"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
  },
  {
    slug: "what-is-a-system-prompt",
    title: "What is a system prompt?",
    description:
      "A beginner-friendly explanation of system prompts and how they shape AI behavior.",
    category: "AI Workflows",
    intro:
      "A system prompt is a higher-level instruction that tells an AI how to behave before the user starts chatting.",
    eli5: [
      "If the user prompt is the visible question, the system prompt is the hidden instruction layer.",
      "It can set the AI's role, style, boundaries, or rules.",
      "For example, it can tell the AI to explain simply, avoid unsafe advice, or answer in a certain format.",
      "It helps make the assistant more consistent.",
    ],
    whyItMatters:
      "System prompts are a core part of building useful and predictable AI assistants.",
    related: ["what-is-prompt-engineering", "what-is-chatgpt", "what-is-an-ai-agent"],
    searchIntent: "workflow",
    primaryKeyword: "what is a system prompt",
    secondaryKeywords: ["system prompt explained", "system prompt meaning"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
  },
  {
    slug: "what-is-fine-tuning",
    title: "What is fine-tuning?",
    description:
      "A simple explanation of fine-tuning and when it is used instead of just prompting a model.",
    category: "AI Workflows",
    intro:
      "Fine-tuning means taking an existing AI model and training it further so it performs better on a specific kind of task.",
    eli5: [
      "Instead of making a model from scratch, you start with one that already knows a lot.",
      "Then you train it further with more focused examples.",
      "That helps the model behave better for a narrow kind of job.",
      "It is usually used when prompting alone is not enough.",
    ],
    whyItMatters:
      "Fine-tuning matters when companies want more consistent behavior, formatting, or specialization from AI models.",
    related: ["what-is-rag", "rag-vs-fine-tuning", "what-is-an-llm"],
    searchIntent: "workflow",
    primaryKeyword: "what is fine tuning",
    secondaryKeywords: ["fine tuning explained", "fine tuning in ai"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
  },
  {
    slug: "what-is-an-embedding",
    title: "What is an embedding?",
    description:
      "A plain-English explanation of embeddings and how AI turns meaning into numbers.",
    category: "AI Tools",
    intro:
      "An embedding is a way of turning text or other data into numbers that capture meaning and similarity.",
    eli5: [
      "AI systems cannot store meaning the way humans describe it.",
      "So they convert words, sentences, or documents into number patterns.",
      "Items with similar meaning often end up closer together in that number space.",
      "That helps systems search, compare, and group information more intelligently.",
    ],
    whyItMatters:
      "Embeddings are a key part of semantic search, vector databases, recommendations, and RAG systems.",
    related: ["what-is-a-vector-database", "what-is-rag", "what-is-an-api"],
    searchIntent: "tool",
    primaryKeyword: "what is an embedding",
    secondaryKeywords: ["embedding explained", "embeddings in ai"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
  },
  {
    slug: "what-is-a-vector-database",
    title: "What is a vector database?",
    description:
      "A beginner-friendly explanation of vector databases and why they are used in AI search systems.",
    category: "AI Tools",
    intro:
      "A vector database stores embeddings so AI systems can search for similar information quickly.",
    eli5: [
      "If embeddings turn meaning into numbers, a vector database stores and searches those numbers.",
      "This helps the system find information that is semantically similar, not just exact word matches.",
      "That is useful in search, retrieval, and recommendation systems.",
      "It is one of the building blocks behind many RAG workflows.",
    ],
    whyItMatters:
      "Vector databases help AI tools search internal knowledge and return more relevant information.",
    related: ["what-is-an-embedding", "what-is-rag", "what-is-an-api"],
    searchIntent: "tool",
    primaryKeyword: "what is a vector database",
    secondaryKeywords: ["vector database explained", "vector db meaning"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
  },
  {
    slug: "what-is-ai-automation",
    title: "What is AI automation?",
    description:
      "A simple explanation of AI automation and how it differs from basic automation.",
    category: "AI Workflows",
    intro:
      "AI automation means using AI inside a workflow so the system can handle more flexible tasks, not just fixed rules.",
    eli5: [
      "Basic automation follows strict rules.",
      "AI automation adds flexible tasks like summarizing, classifying, extracting, or drafting.",
      "That makes workflows more useful for messy, text-heavy, or less predictable tasks.",
      "It is a major reason businesses are interested in AI today.",
    ],
    whyItMatters:
      "AI automation is one of the biggest real-world AI use cases because it connects AI to everyday work.",
    related: ["what-is-an-ai-agent", "what-is-rag", "what-is-an-api"],
    searchIntent: "workflow",
    primaryKeyword: "what is ai automation",
    secondaryKeywords: ["ai automation explained", "ai workflow automation"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
  },
  {
    slug: "what-is-inference-in-ai",
    title: "What is inference in AI?",
    description:
      "A simple explanation of inference and what happens when an AI model actually produces an answer.",
    category: "AI Tools",
    intro:
      "Inference is the moment when a trained AI model takes your input and generates an output.",
    eli5: [
      "Training is when the model learns from data.",
      "Inference is when it uses that learning to answer a real prompt or perform a real task.",
      "If you ask ChatGPT something and it responds, that output happens during inference.",
      "It is basically the live-use stage of the model.",
    ],
    whyItMatters:
      "Inference affects speed, cost, product experience, and how AI systems are deployed in real products.",
    related: ["what-is-an-llm", "what-is-chatgpt", "what-is-a-token-in-ai"],
    searchIntent: "tool",
    primaryKeyword: "what is inference in ai",
    secondaryKeywords: ["ai inference explained", "inference meaning ai"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
  },
  {
    slug: "claude-vs-gemini",
    title: "Claude vs Gemini",
    description:
      "A plain-English comparison of Claude and Gemini for people choosing between major AI assistants.",
    category: "Comparisons",
    intro:
      "Claude and Gemini are both powerful AI assistants, but they differ in style, ecosystem, and how people use them in practice.",
    eli5: [
      "Both tools can answer questions, write, summarize, and explain.",
      "The main differences usually appear in writing style, integrations, and workflow preference.",
      "Some users prefer one for analysis, while others care more about ecosystem fit.",
      "The best choice depends on how you actually use AI day to day.",
    ],
    whyItMatters:
      "Comparison pages help users choose tools more realistically instead of just following trends.",
    related: ["chatgpt-vs-claude", "chatgpt-vs-gemini", "what-is-chatgpt"],
    searchIntent: "comparison",
    primaryKeyword: "claude vs gemini",
    secondaryKeywords: ["gemini vs claude", "claude or gemini"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
  },
  {
    slug: "ai-agent-vs-chatbot",
    title: "AI agent vs chatbot",
    description:
      "A simple comparison of AI agents and chatbots so people can understand what makes agents different.",
    category: "Comparisons",
    intro:
      "A chatbot mainly responds to messages, while an AI agent can often decide, act, and use tools inside a workflow.",
    eli5: [
      "A chatbot is mostly conversational.",
      "An AI agent can take actions beyond conversation.",
      "That makes agents feel more like assistants and chatbots feel more like message interfaces.",
      "The line can blur, but the action layer is the key difference.",
    ],
    whyItMatters:
      "This comparison helps people understand why AI agents are treated as a more advanced workflow concept.",
    related: ["what-is-an-ai-agent", "what-is-ai-automation", "what-is-rag"],
    searchIntent: "comparison",
    primaryKeyword: "ai agent vs chatbot",
    secondaryKeywords: ["chatbot vs ai agent", "difference between ai agent and chatbot"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
  },
  {
    slug: "rag-vs-fine-tuning",
    title: "RAG vs fine-tuning",
    description:
      "A plain-English comparison of RAG and fine-tuning so people can understand when each one is used.",
    category: "Comparisons",
    intro:
      "RAG and fine-tuning solve different problems. RAG helps AI use external information, while fine-tuning changes how a model behaves.",
    eli5: [
      "RAG is like giving the AI a better reference book.",
      "Fine-tuning is like training the AI to behave differently on a specific kind of task.",
      "One focuses on access to better information.",
      "The other focuses on changing model behavior.",
    ],
    whyItMatters:
      "This is one of the most useful workflow distinctions for understanding practical AI system design.",
    related: ["what-is-rag", "what-is-fine-tuning", "what-is-an-llm"],
    searchIntent: "comparison",
    primaryKeyword: "rag vs fine tuning",
    secondaryKeywords: ["fine tuning vs rag", "rag or fine tuning"],
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
  },
];
