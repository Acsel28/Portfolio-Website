import { careerEvents } from "@/data/career";
import { projects } from "@/data/projects";
import { researchPipeline } from "@/data/research";

export type SkillGroup = "LANGUAGES" | "AI / ML" | "COMPUTER VISION" | "NLP / LLMs" | "BACKEND" | "DATABASES" | "TOOLS";

export type Skill = {
  id: string;
  name: string;
  group: SkillGroup;
  accent: string;
  relatedProjects: string[];
  relatedExperience: string[];
  relatedResearch: string[];
};

export const skillGroups: SkillGroup[] = ["LANGUAGES", "AI / ML", "COMPUTER VISION", "NLP / LLMs", "BACKEND", "DATABASES", "TOOLS"];

export const skills: Skill[] = [
  { id: "python", name: "Python", group: "LANGUAGES", accent: "#b9d4c1", relatedProjects: ["f1-analytics", "terrain-ai", "atria"], relatedExperience: ["f1", "terrain", "atria", "mahindra"], relatedResearch: ["qlora", "detection"] },
  { id: "typescript", name: "TypeScript", group: "LANGUAGES", accent: "#aec5d1", relatedProjects: ["vaultify", "atria"], relatedExperience: ["vaultify", "atria"], relatedResearch: ["verdict"] },
  { id: "pytorch", name: "PyTorch", group: "AI / ML", accent: "#d5c5a8", relatedProjects: ["terrain-ai", "backdoor-detection"], relatedExperience: ["terrain", "backdoor"], relatedResearch: ["injection", "detection", "signals"] },
  { id: "scikit-learn", name: "scikit-learn", group: "AI / ML", accent: "#d2b8a0", relatedProjects: ["f1-analytics", "terrain-ai"], relatedExperience: ["f1", "terrain"], relatedResearch: ["thresholding"] },
  { id: "computer-vision", name: "Computer Vision", group: "COMPUTER VISION", accent: "#b9d4c1", relatedProjects: ["terrain-ai"], relatedExperience: ["terrain"], relatedResearch: ["signals", "verdict"] },
  { id: "segmentation", name: "Segmentation", group: "COMPUTER VISION", accent: "#c7d6bb", relatedProjects: ["terrain-ai"], relatedExperience: ["terrain"], relatedResearch: ["detection", "signals"] },
  { id: "transformers", name: "Transformers", group: "NLP / LLMs", accent: "#d5c5a8", relatedProjects: ["backdoor-detection", "atria"], relatedExperience: ["backdoor", "atria"], relatedResearch: ["qlora", "injection", "domain"] },
  { id: "llm-systems", name: "LLM Systems", group: "NLP / LLMs", accent: "#aec5d1", relatedProjects: ["atria", "backdoor-detection"], relatedExperience: ["atria", "backdoor", "mahindra"], relatedResearch: ["detection", "thresholding", "verdict"] },
  { id: "fastapi", name: "FastAPI", group: "BACKEND", accent: "#b9d4c1", relatedProjects: ["terrain-ai", "f1-analytics", "atria"], relatedExperience: ["f1", "terrain", "atria"], relatedResearch: ["verdict"] },
  { id: "postgresql", name: "PostgreSQL", group: "DATABASES", accent: "#aec5d1", relatedProjects: ["vaultify", "f1-analytics"], relatedExperience: ["vaultify", "f1"], relatedResearch: ["thresholding"] },
  { id: "git", name: "Git", group: "TOOLS", accent: "#d2b8a0", relatedProjects: ["terrain-ai", "f1-analytics", "atria", "vaultify", "backdoor-detection"], relatedExperience: ["f1", "vaultify", "atria", "terrain", "backdoor", "mahindra"], relatedResearch: ["qlora", "detection", "verdict"] },
  { id: "docker", name: "Docker", group: "TOOLS", accent: "#aec5d1", relatedProjects: ["atria", "vaultify", "terrain-ai"], relatedExperience: ["atria", "vaultify", "terrain"], relatedResearch: ["thresholding", "verdict"] },
];

export function resolveSkillRelation(id: string) {
  return projects.find((project) => project.id === id)?.name ?? careerEvents.find((event) => event.id === id)?.label ?? researchPipeline.find((step) => step.id === id)?.label ?? id;
}
