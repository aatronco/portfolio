export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  language: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "nutrical",
    title: "NutriCal",
    description: "Clinical anthropometric web app for body composition analysis.",
    longDescription:
      "Implements Kerr 1988 body composition formulas and the Heath-Carter somatotype classification. Uses Google Sheets as a lightweight backend — no traditional server required.",
    stack: ["JavaScript", "Google Sheets API", "HTML/CSS"],
    language: "JavaScript",
    githubUrl: "https://github.com/aatronco/nutrical",
    featured: true,
  },
  {
    id: "loyaltyos-connector",
    title: "LoyaltyOS Connector",
    description: "Jumpseller app connecting stores to the open-source LoyaltyOS platform.",
    longDescription:
      "Full-stack TypeScript integration that bridges Jumpseller's e-commerce platform with LoyaltyOS, enabling loyalty program management for online stores without a custom backend.",
    stack: ["TypeScript", "Jumpseller API", "LoyaltyOS API"],
    language: "TypeScript",
    githubUrl: "https://github.com/aatronco/jumpseller-loyaltyos-connector",
    featured: true,
  },
  {
    id: "checkout-kit",
    title: "Checkout Kit",
    description: "Personaliza el checkout v2 de Jumpseller vía GTM Custom HTML.",
    longDescription:
      "Drop-in JavaScript snippets deployed through Google Tag Manager that extend Jumpseller's checkout flow — A/B testing, custom validation, and UX enhancements without touching the theme.",
    stack: ["JavaScript", "GTM", "Jumpseller"],
    language: "JavaScript",
    githubUrl: "https://github.com/aatronco/jumpseller-checkout-kit",
    featured: true,
  },
  {
    id: "fitness-card",
    title: "Fitness Card Skill",
    description: "AI interview that generates a personalized fitness card.",
    longDescription:
      "A Python-based conversational agent that interviews users about their fitness goals and generates a structured fitness card — demonstrating LLM-driven data extraction.",
    stack: ["Python", "LLM", "CLI"],
    language: "Python",
    githubUrl: "https://github.com/aatronco/fitness-card-skill",
    featured: true,
  },
  {
    id: "lol-champs",
    title: "LoL Champions",
    description: "Dataset: lore and data of every League of Legends champion.",
    longDescription:
      "A structured JavaScript dataset covering the lore and metadata of all League of Legends champions. Used as a reference for fan projects and data visualizations.",
    stack: ["JavaScript", "JSON", "Data"],
    language: "JavaScript",
    githubUrl: "https://github.com/aatronco/lol_champs",
    featured: true,
  },
];

export const LANG_COLORS: Record<string, string> = {
  TypeScript:  "#00d4ff",
  JavaScript:  "#f0db4f",
  Python:      "#00ff9f",
  Swift:       "#ff6b35",
  Liquid:      "#ff0080",
  default:     "#4a5578",
};
