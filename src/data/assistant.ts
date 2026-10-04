import { careerEvents } from "@/data/career";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export type AssistantSource = { label: string; href: string };
export type AssistantEntry = { id: string; category: string; title: string; keywords: string[]; answer: string; sources: AssistantSource[] };
export type AssistantResult = { kind: "retrieved" | "unknown"; answer: string; sources: AssistantSource[] };

const source = (label: string, href: string): AssistantSource => ({ label, href });
const projectSource = (id: string) => source(projects.find((project) => project.id === id)?.name ?? id, `/projects/${id}`);
const experienceSource = source("Career timeline", "#experience");
const researchSource = source("Research lab", "#research");

const terrain = projects.find((project) => project.id === "terrain-ai");
const f1 = projects.find((project) => project.id === "f1-analytics");
const backdoor = projects.find((project) => project.id === "backdoor-detection");
const atria = projects.find((project) => project.id === "atria");
const mahindra = careerEvents.find((event) => event.id === "mahindra");

export const assistantKnowledgeBase: AssistantEntry[] = [
  { id: "terrain", category: "PROJECT", title: "TerrainAI", keywords: ["terrain", "terrainai", "perception", "switch models", "segmentation", "computer vision", "motion"], answer: `${terrain?.detail} Its pipeline moves from input imagery through preprocessing, fourteen-stage augmentation, optical flow and motion analysis, then dynamic model selection. The model branch includes FPN + MiT-B3, DeepLabV3+ with EfficientNet-B4, and LinkNet with MobileNetV2 before semantic segmentation, explainability, and risk-aware A* planning.`, sources: [projectSource("terrain-ai")] },
  { id: "f1", category: "PROJECT", title: "F1 Analytics", keywords: ["f1", "formula 1", "race", "racing", "telemetry", "prediction", "models", "time series"], answer: `${f1?.detail} The documented approach uses race telemetry, circuit context, driver history, live session state, time-series features, scenario analysis, and probabilistic prediction. The portfolio data does not specify exact named ML model architectures for F1, so I won't invent them.`, sources: [projectSource("f1-analytics")] },
  { id: "backdoor", category: "RESEARCH", title: "LLM Backdoor Research", keywords: ["backdoor", "trigger", "language model", "llm", "detection", "fine tuned", "fine-tuning", "security", "research"], answer: `${backdoor?.detail} The work studies trigger-agnostic detection using controlled poisoning scenarios, activation probing, representation comparison, and evaluation slices. The research pipeline tracks cross-perplexity separation, excess divergence, contrastive sentiment shift, semantic drift, and output stereotypy.`, sources: [projectSource("backdoor-detection"), researchSource] },
  { id: "atria", category: "PROJECT", title: "Atria", keywords: ["atria", "agent", "agents", "multi agent", "multi-agent", "orchestration", "reason together"], answer: `${atria?.detail} Atria composes specialized agents through explicit task handoffs, scoped tools, checkpoints for human intervention, and an observable orchestration layer.`, sources: [projectSource("atria")] },
  { id: "internship", category: "EXPERIENCE", title: "Mahindra Group DnA", keywords: ["intern", "internship", "mahindra", "dna", "where did he work", "where did he intern"], answer: mahindra?.detail ?? "The portfolio records an internship at Mahindra Group DnA.", sources: [experienceSource] },
  { id: "skills", category: "SKILLS", title: "Technical skills", keywords: ["skills", "technologies", "technology", "know", "stack", "programming", "tools"], answer: `The documented stack includes ${skills.map((skill) => skill.name).join(", ")}. The skills constellation connects each technology to the projects, experience, and research where it appears.`, sources: [source("Skills constellation", "#skills")] },
  { id: "hackathons", category: "COMMUNITY", title: "Hackathons and competitions", keywords: ["hackathon", "hackathons", "competition", "competitions", "oculus", "cubing", "mumbai cubing", "sprint"], answer: `The portfolio records Hackathons / Competitions as a parallel practice signal connected to Atria. It also records Oculus Cube Open / Mumbai Cubing Sprint, connected to the F1 project, as an influence on pattern recognition, deliberate practice, and calm execution under a clock.`, sources: [experienceSource] },
  { id: "ieee", category: "COMMUNITY", title: "IEEE Computer Society", keywords: ["ieee", "computer society", "community"], answer: `IEEE Computer Society is recorded as a parallel community signal connected to the early programming phase. The portfolio describes it as a way to stay close to ideas, people, and practice shaping computing.`, sources: [experienceSource] },
  { id: "leadership", category: "SCOPE", title: "Leadership", keywords: ["leadership", "leader", "managed", "management", "team lead"], answer: "The current portfolio documents collaboration through Atria, hackathons, competitions, and technical communities, but it does not document a formal leadership title or people-management responsibility. I won't infer one.", sources: [experienceSource] },
  { id: "interests", category: "SCOPE", title: "Interests", keywords: ["interest", "interests", "outside", "hobby", "hobbies", "like"], answer: "The documented interests include AI/ML systems, computer vision, language-model security, multi-agent systems, F1 analytics, and speedcubing. Those are the interests represented in the portfolio data.", sources: [source("Project universe", "#work"), experienceSource] },
];

const stopWords = new Set(["what", "did", "does", "is", "are", "the", "for", "how", "where", "and", "about", "with", "his", "he", "advait", "can", "tell", "me", "use", "used"]);

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9+.-]+/g, " ").trim();
}

export function retrieveAssistantAnswer(query: string): AssistantResult {
  const normalizedQuery = normalize(query);
  const queryTokens = normalizedQuery.split(" ").filter((token) => token.length > 2 && !stopWords.has(token));
  if (!queryTokens.length) return { kind: "unknown", answer: "Ask about a project, research thread, skill, experience, community, or interest in the portfolio.", sources: [] };

  const ranked = assistantKnowledgeBase.map((entry) => {
    const haystack = normalize([entry.title, entry.category, ...entry.keywords, entry.answer].join(" "));
    const keywordHits = entry.keywords.reduce((score, keyword) => score + (normalizedQuery.includes(normalize(keyword)) ? 3 : 0), 0);
    const tokenHits = queryTokens.reduce((score, token) => score + (haystack.includes(token) ? 1 : 0), 0);
    return { entry, score: keywordHits + tokenHits };
  }).sort((a, b) => b.score - a.score);

  const best = ranked[0];
  if (!best || best.score < 2) return { kind: "unknown", answer: "I don't have documented information about that in this portfolio yet. I can answer about Advait's projects, research, technical skills, experience, communities, and interests.", sources: [] };
  return { kind: "retrieved", answer: best.entry.answer, sources: best.entry.sources };
}
