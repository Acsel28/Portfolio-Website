import { careerEvents } from "@/data/career";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export type AssistantSource = {
  label: string;
  href: string;
};

export type AssistantEntry = {
  id: string;
  category: string;
  title: string;
  keywords: string[];
  aliases?: string[];
  answer: string;
  sources: AssistantSource[];
};

export type AssistantResult = {
  kind: "retrieved" | "unknown";
  answer: string;
  sources: AssistantSource[];
};

const source = (label: string, href: string): AssistantSource => ({
  label,
  href,
});

const projectSource = (id: string) =>
  source(
    projects.find((project) => project.id === id)?.name ?? id,
    `/projects/${id}`,
  );

const experienceSource = source("Career timeline", "#experience");
const researchSource = source("Research lab", "#research");

const terrain = projects.find((project) => project.id === "terrain-ai");
const f1 = projects.find((project) => project.id === "f1-analytics");
const backdoor = projects.find(
  (project) => project.id === "backdoor-detection",
);
const atria = projects.find((project) => project.id === "atria");
const mahindra = careerEvents.find((event) => event.id === "mahindra");

export const assistantKnowledgeBase: AssistantEntry[] = [
  {
    id: "terrain",
    category: "PROJECT",
    title: "TerrainAI",
    keywords: [
      "terrain",
      "terrainai",
      "perception",
      "segmentation",
      "semantic segmentation",
      "computer vision",
      "motion",
      "optical flow",
      "model switching",
      "switch models",
      "offroad",
      "rover",
      "autonomous",
      "a star",
      "path planning",
    ],
    aliases: [
      "terrain system",
      "terrain perception",
      "rover perception",
      "off road",
      "offroad perception",
      "dynamic model selection",
      "segmentation models",
    ],
    answer: `${terrain?.detail} Its pipeline moves from input imagery through preprocessing, fourteen-stage augmentation, optical flow and motion analysis, then dynamic model selection. The model branch includes FPN + MiT-B3, DeepLabV3+ with EfficientNet-B4, and LinkNet with MobileNetV2 before semantic segmentation, explainability, and risk-aware A* planning.`,
    sources: [projectSource("terrain-ai")],
  },

  {
    id: "f1",
    category: "PROJECT",
    title: "F1 Analytics",
    keywords: [
      "f1",
      "formula 1",
      "formula one",
      "race",
      "racing",
      "driver",
      "constructor",
      "qualifying",
      "prediction",
      "predictions",
      "telemetry",
      "circuit",
      "lap",
      "time series",
    ],
    aliases: [
      "f1 project",
      "formula one project",
      "racing project",
      "race prediction",
      "qualifying prediction",
      "formula 1 analytics",
    ],
    answer: `${f1?.detail} The documented approach uses race telemetry, circuit context, driver history, live session state, time-series features, scenario analysis, and probabilistic prediction. The portfolio data does not specify exact named ML model architectures for F1, so I won't invent them.`,
    sources: [projectSource("f1-analytics")],
  },

  {
    id: "backdoor",
    category: "RESEARCH",
    title: "LLM Backdoor Research",
    keywords: [
      "backdoor",
      "backdoors",
      "trigger",
      "triggers",
      "language model",
      "language models",
      "llm",
      "llms",
      "detection",
      "fine tuned",
      "fine-tuning",
      "security",
      "research",
      "poisoning",
      "poisoned",
      "perplexity",
      "semantic drift",
      "sentiment shift",
      "excess divergence",
    ],
    aliases: [
      "llm security",
      "model security",
      "backdoor detection",
      "language model security",
      "trigger agnostic detection",
      "llm backdoor detection",
      "poisoned model",
    ],
    answer: `${backdoor?.detail} The work studies trigger-agnostic detection using controlled poisoning scenarios, activation probing, representation comparison, and evaluation slices. The research pipeline tracks cross-perplexity separation, excess divergence, contrastive sentiment shift, semantic drift, and output stereotypy.`,
    sources: [projectSource("backdoor-detection"), researchSource],
  },

  {
    id: "atria",
    category: "PROJECT",
    title: "Atria",
    keywords: [
      "atria",
      "agent",
      "agents",
      "multi agent",
      "multi-agent",
      "agentic",
      "orchestration",
      "reason",
      "reasoning",
      "task handoffs",
      "tools",
      "human intervention",
    ],
    aliases: [
      "agent system",
      "multi agent system",
      "multi-agent system",
      "agentic system",
      "agent architecture",
      "agent framework",
    ],
    answer: `${atria?.detail} Atria composes specialized agents through explicit task handoffs, scoped tools, checkpoints for human intervention, and an observable orchestration layer.`,
    sources: [projectSource("atria")],
  },

  {
    id: "internship",
    category: "EXPERIENCE",
    title: "Mahindra Group DnA",
    keywords: [
      "intern",
      "internship",
      "mahindra",
      "dna",
      "experience",
      "work",
      "worked",
      "company",
      "industry",
    ],
    aliases: [
      "where did he work",
      "where did he intern",
      "summer internship",
      "internship experience",
      "professional experience",
    ],
    answer:
      mahindra?.detail ??
      "The portfolio records an internship at Mahindra Group DnA.",
    sources: [experienceSource],
  },

  {
    id: "skills",
    category: "SKILLS",
    title: "Technical skills",
    keywords: [
      "skills",
      "technologies",
      "technology",
      "know",
      "stack",
      "programming",
      "tools",
      "frameworks",
      "languages",
      "technical",
      "ml",
      "machine learning",
      "deep learning",
      "python",
      "typescript",
      "javascript",
      "java",
      "c++",
      "sql",
    ],
    aliases: [
      "tech stack",
      "technical stack",
      "programming skills",
      "what does he know",
      "what technologies does he use",
      "what tools does he use",
    ],
    answer: `The documented stack includes ${skills
      .map((skill) => skill.name)
      .join(
        ", ",
      )}. The skills constellation connects each technology to the projects, experience, and research where it appears.`,
    sources: [source("Skills constellation", "#skills")],
  },

  {
    id: "hackathons",
    category: "COMMUNITY",
    title: "Hackathons and competitions",
    keywords: [
      "hackathon",
      "hackathons",
      "competition",
      "competitions",
      "oculus",
      "cubing",
      "mumbai cubing",
      "sprint",
      "contest",
      "events",
    ],
    aliases: [
      "hackathon experience",
      "competitions",
      "technical competitions",
      "cubing competitions",
      "community activities",
    ],
    answer:
      "The portfolio records Hackathons / Competitions as a parallel practice signal connected to Atria. It also records Oculus Cube Open / Mumbai Cubing Sprint, connected to the F1 project, as an influence on pattern recognition, deliberate practice, and calm execution under a clock.",
    sources: [experienceSource],
  },

  {
    id: "ieee",
    category: "COMMUNITY",
    title: "IEEE Computer Society",
    keywords: [
      "ieee",
      "computer society",
      "community",
      "organization",
      "technical community",
    ],
    aliases: [
      "ieee cs",
      "computer society",
      "student community",
    ],
    answer:
      "IEEE Computer Society is recorded as a parallel community signal connected to the early programming phase. The portfolio describes it as a way to stay close to ideas, people, and practice shaping computing.",
    sources: [experienceSource],
  },

  {
    id: "leadership",
    category: "SCOPE",
    title: "Leadership",
    keywords: [
      "leadership",
      "leader",
      "managed",
      "management",
      "team lead",
      "teams",
      "responsibility",
    ],
    aliases: [
      "leadership experience",
      "team management",
      "leading teams",
      "people management",
    ],
    answer:
      "The current portfolio documents collaboration through Atria, hackathons, competitions, and technical communities, but it does not document a formal leadership title or people-management responsibility. I won't infer one.",
    sources: [experienceSource],
  },

  {
    id: "interests",
    category: "SCOPE",
    title: "Interests",
    keywords: [
      "interest",
      "interests",
      "outside",
      "hobby",
      "hobbies",
      "like",
      "passion",
      "focus",
    ],
    aliases: [
      "outside work",
      "outside academics",
      "what does he like",
      "personal interests",
      "areas of interest",
    ],
    answer:
      "The documented interests include AI/ML systems, computer vision, language-model security, multi-agent systems, F1 analytics, and speedcubing. Those are the interests represented in the portfolio data.",
    sources: [
      source("Project universe", "#work"),
      experienceSource,
    ],
  },
];

const stopWords = new Set([
  "what",
  "did",
  "does",
  "is",
  "are",
  "the",
  "for",
  "how",
  "where",
  "when",
  "why",
  "which",
  "who",
  "about",
  "with",
  "his",
  "he",
  "advait",
  "can",
  "tell",
  "me",
  "use",
  "used",
  "was",
  "were",
  "has",
  "have",
  "had",
  "been",
  "from",
  "this",
  "that",
  "their",
  "into",
  "does",
]);

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9+.-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value: string) {
  return normalize(value)
    .split(" ")
    .filter((token) => token.length > 2 && !stopWords.has(token));
}

function phraseMatch(query: string, phrase: string) {
  return query.includes(normalize(phrase));
}

function scoreEntry(entry: AssistantEntry, query: string) {
  const normalizedQuery = normalize(query);
  const queryTokens = tokenize(query);

  let score = 0;

  // Exact title/category matches are strong signals.
  if (phraseMatch(normalizedQuery, entry.title)) {
    score += 8;
  }

  if (phraseMatch(normalizedQuery, entry.category)) {
    score += 3;
  }

  // Explicit aliases represent concepts users may naturally ask about.
  for (const alias of entry.aliases ?? []) {
    if (phraseMatch(normalizedQuery, alias)) {
      score += 7;
    }
  }

  // Keywords get a strong but slightly lower score.
  for (const keyword of entry.keywords) {
    if (phraseMatch(normalizedQuery, keyword)) {
      score += keyword.includes(" ") ? 5 : 3;
    }
  }

  // Individual token overlap provides fuzzy-ish matching.
  const searchableText = normalize(
    [
      entry.title,
      entry.category,
      ...entry.keywords,
      ...(entry.aliases ?? []),
      entry.answer,
    ].join(" "),
  );

  for (const token of queryTokens) {
    if (searchableText.includes(token)) {
      score += 1;
    }
  }

  return score;
}

function dedupeSources(sources: AssistantSource[]) {
  const seen = new Set<string>();

  return sources.filter((item) => {
    const key = `${item.label}:${item.href}`;

    if (seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

function buildMultiEntryAnswer(entries: AssistantEntry[], query: string) {
  const normalizedQuery = normalize(query);

  // Questions asking for a broad collection should combine multiple entries.
  const broadQuery =
    normalizedQuery.includes("what projects") ||
    normalizedQuery.includes("which projects") ||
    normalizedQuery.includes("projects has") ||
    normalizedQuery.includes("projects did") ||
    normalizedQuery.includes("what has he built") ||
    normalizedQuery.includes("what did he build") ||
    normalizedQuery.includes("what technologies") ||
    normalizedQuery.includes("what skills") ||
    normalizedQuery.includes("tech stack") ||
    normalizedQuery.includes("machine learning") ||
    normalizedQuery.includes("ml models");

  if (!broadQuery || entries.length < 2) {
    return entries[0].answer;
  }

  const selected = entries.slice(0, 3);

  return selected
    .map((entry) => `**${entry.title}** — ${entry.answer}`)
    .join("\n\n");
}

export function retrieveAssistantAnswer(query: string): AssistantResult {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return {
      kind: "unknown",
      answer:
        "Ask about a project, research thread, skill, experience, community, or interest in the portfolio.",
      sources: [],
    };
  }

  const ranked = assistantKnowledgeBase
    .map((entry) => ({
      entry,
      score: scoreEntry(entry, query),
    }))
    .sort((a, b) => b.score - a.score);

  const best = ranked[0];

  if (!best || best.score < 3) {
    return {
      kind: "unknown",
      answer:
        "I don't have documented information about that in this portfolio yet. I can answer about Advait's projects, research, technical skills, experience, communities, and interests.",
      sources: [],
    };
  }

  /*
   * Keep closely related results when the question clearly spans
   * multiple areas. This is what makes the assistant feel less
   * like a simple one-keyword lookup.
   */
  const related = ranked
    .filter((item) => item.score >= Math.max(3, best.score - 4))
    .slice(0, 3);

  const answer = buildMultiEntryAnswer(
    related.map((item) => item.entry),
    query,
  );

  const sources = dedupeSources(
    related.flatMap((item) => item.entry.sources),
  );

  return {
    kind: "retrieved",
    answer,
    sources,
  };
}