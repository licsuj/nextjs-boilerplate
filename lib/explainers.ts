export type Explainer = {
  slug: string;
  title: string;
  description: string;
  category: "AI Basics" | "AI Tools" | "AI Workflows" | "Comparisons";
  intro: string;
  eli5: string[];
  whyItMatters: string;
  related: string[];
};

export const explainers: Explainer[] = [
  {
    slug: "what-is-chatgpt",
    title: "What is ChatGPT?",
    description: "A simple explanation of what ChatGPT is and how people use it.",
    category: "AI Basics",
    intro: "ChatGPT is an AI assistant that can understand your messages and generate human-like replies.",
    eli5: [
      "Think of it like a super-fast writing and thinking helper.",
      "You type a question or request.",
      "It predicts the most useful next words based on the patterns it learned during training.",
      "It does not think like a human, but it can still be very useful.",
    ],
    whyItMatters:
      "ChatGPT helps people write, brainstorm, summarize, research, and automate parts of their work.",
    related: ["what-is-an-llm", "what-is-prompt-engineering", "chatgpt-vs-claude"],
  },
  {
    slug: "what-is-an-ai-agent",
    title: "What is an AI agent?",
    description: "The difference between a chatbot and an AI agent, explained simply.",
    category: "AI Basics",
    intro: "An AI agent is an AI system that can take actions and complete tasks, not just answer questions.",
    eli5: [
      "A chatbot mostly talks.",
      "An AI agent can read information, decide what to do next, and sometimes use tools.",
      "That makes it feel more like an assistant than a simple chat box.",
    ],
    whyItMatters:
      "AI agents are becoming a major way businesses automate support, research, and repetitive tasks.",
    related: ["what-is-rag", "what-is-prompt-engineering", "what-is-mcp"],
  },
];
