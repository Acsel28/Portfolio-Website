import { careerEvents } from "@/data/career";
import { projects } from "@/data/projects";
import { researchPipeline } from "@/data/research";

export type SkillGroup = "LANGUAGES" | "AI / ML" | "COMPUTER VISION" | "NLP / LLMs" | "BACKEND" | "FRONTEND" | "DATABASES" | "DEVOPS / CLOUD" | "TOOLS";

export type Skill = {
  id: string;
  name: string;
  group: SkillGroup;
  accent: string;
  relatedProjects: string[];
  relatedExperience: string[];
  relatedResearch: string[];
};

export const skillGroups: SkillGroup[] = ["LANGUAGES", "AI / ML", "COMPUTER VISION", "NLP / LLMs", "BACKEND", "FRONTEND", "DATABASES","DEVOPS / CLOUD", "TOOLS"];

export const skills: Skill[] = [
  // ─────────────────────────────────────────
  // LANGUAGES
  // ─────────────────────────────────────────
  {
    id: "python",
    name: "Python",
    group: "LANGUAGES",
    accent: "#b9d4c1",
    relatedProjects: ["f1-analytics", "terrain-ai", "atria", "backdoor-detection", "vaultify"],
    relatedExperience: ["f1", "terrain", "atria", "backdoor", "mahindra"],
    relatedResearch: ["qlora", "detection", "signals", "verdict"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    group: "LANGUAGES",
    accent: "#aec5d1",
    relatedProjects: ["f1-analytics", "atria", "vaultify"],
    relatedExperience: ["f1", "atria", "vaultify"],
    relatedResearch: ["verdict"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    group: "LANGUAGES",
    accent: "#d5c5a8",
    relatedProjects: ["f1-analytics", "atria", "vaultify"],
    relatedExperience: ["f1", "atria", "vaultify"],
    relatedResearch: [],
  },
  {
    id: "java",
    name: "Java",
    group: "LANGUAGES",
    accent: "#d2b8a0",
    relatedProjects: [],
    relatedExperience: [],
    relatedResearch: [],
  },
  {
    id: "cpp",
    name: "C++",
    group: "LANGUAGES",
    accent: "#c7d6bb",
    relatedProjects: ["terrain-ai"],
    relatedExperience: ["terrain"],
    relatedResearch: [],
  },
  {
    id: "sql",
    name: "SQL",
    group: "LANGUAGES",
    accent: "#aec5d1",
    relatedProjects: ["f1-analytics", "vaultify"],
    relatedExperience: ["f1", "vaultify", "mahindra"],
    relatedResearch: [],
  },

  // ─────────────────────────────────────────
  // AI / ML
  // ─────────────────────────────────────────
  {
    id: "pytorch",
    name: "PyTorch",
    group: "AI / ML",
    accent: "#d5c5a8",
    relatedProjects: ["terrain-ai", "backdoor-detection"],
    relatedExperience: ["terrain", "backdoor"],
    relatedResearch: ["qlora", "injection", "detection", "signals"],
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    group: "AI / ML",
    accent: "#d2b8a0",
    relatedProjects: ["f1-analytics"],
    relatedExperience: ["f1"],
    relatedResearch: [],
  },
  {
    id: "scikit-learn",
    name: "scikit-learn",
    group: "AI / ML",
    accent: "#aec5d1",
    relatedProjects: ["f1-analytics", "terrain-ai"],
    relatedExperience: ["f1", "terrain"],
    relatedResearch: ["thresholding"],
  },
  {
    id: "xgboost",
    name: "XGBoost",
    group: "AI / ML",
    accent: "#b9d4c1",
    relatedProjects: ["f1-analytics"],
    relatedExperience: ["f1"],
    relatedResearch: [],
  },
  {
    id: "catboost",
    name: "CatBoost",
    group: "AI / ML",
    accent: "#c7d6bb",
    relatedProjects: ["f1-analytics"],
    relatedExperience: ["f1"],
    relatedResearch: [],
  },
  {
    id: "random-forest",
    name: "Random Forest",
    group: "AI / ML",
    accent: "#d5c5a8",
    relatedProjects: ["f1-analytics"],
    relatedExperience: ["f1"],
    relatedResearch: [],
  },
  {
    id: "feature-engineering",
    name: "Feature Engineering",
    group: "AI / ML",
    accent: "#aec5d1",
    relatedProjects: ["f1-analytics"],
    relatedExperience: ["f1"],
    relatedResearch: [],
  },

  // ─────────────────────────────────────────
  // COMPUTER VISION
  // ─────────────────────────────────────────
  {
    id: "computer-vision",
    name: "Computer Vision",
    group: "COMPUTER VISION",
    accent: "#b9d4c1",
    relatedProjects: ["terrain-ai"],
    relatedExperience: ["terrain"],
    relatedResearch: ["signals", "verdict"],
  },
  {
    id: "semantic-segmentation",
    name: "Semantic Segmentation",
    group: "COMPUTER VISION",
    accent: "#c7d6bb",
    relatedProjects: ["terrain-ai"],
    relatedExperience: ["terrain"],
    relatedResearch: ["detection", "signals"],
  },
  {
    id: "opencv",
    name: "OpenCV",
    group: "COMPUTER VISION",
    accent: "#aec5d1",
    relatedProjects: ["terrain-ai"],
    relatedExperience: ["terrain"],
    relatedResearch: [],
  },
  {
    id: "optical-flow",
    name: "Optical Flow",
    group: "COMPUTER VISION",
    accent: "#d2b8a0",
    relatedProjects: ["terrain-ai"],
    relatedExperience: ["terrain"],
    relatedResearch: [],
  },
  {
    id: "gradcam",
    name: "GradCAM",
    group: "COMPUTER VISION",
    accent: "#d5c5a8",
    relatedProjects: ["terrain-ai"],
    relatedExperience: ["terrain"],
    relatedResearch: [],
  },
  {
    id: "shap",
    name: "SHAP",
    group: "COMPUTER VISION",
    accent: "#b9d4c1",
    relatedProjects: ["terrain-ai"],
    relatedExperience: ["terrain"],
    relatedResearch: [],
  },

  // ─────────────────────────────────────────
  // NLP / LLMs
  // ─────────────────────────────────────────
  {
    id: "transformers",
    name: "Transformers",
    group: "NLP / LLMs",
    accent: "#d5c5a8",
    relatedProjects: ["backdoor-detection", "atria"],
    relatedExperience: ["backdoor", "atria"],
    relatedResearch: ["qlora", "injection", "domain"],
  },
  {
    id: "llm-systems",
    name: "LLM Systems",
    group: "NLP / LLMs",
    accent: "#aec5d1",
    relatedProjects: ["atria", "backdoor-detection"],
    relatedExperience: ["atria", "backdoor"],
    relatedResearch: ["detection", "thresholding", "verdict"],
  },
  {
    id: "qlora",
    name: "QLoRA",
    group: "NLP / LLMs",
    accent: "#b9d4c1",
    relatedProjects: ["backdoor-detection"],
    relatedExperience: ["backdoor"],
    relatedResearch: ["qlora", "injection"],
  },
  {
    id: "llm-security",
    name: "LLM Security",
    group: "NLP / LLMs",
    accent: "#c7d6bb",
    relatedProjects: ["backdoor-detection"],
    relatedExperience: ["backdoor"],
    relatedResearch: ["detection", "signals", "verdict"],
  },
  {
    id: "multi-agent-systems",
    name: "Multi-Agent Systems",
    group: "NLP / LLMs",
    accent: "#d2b8a0",
    relatedProjects: ["atria"],
    relatedExperience: ["atria"],
    relatedResearch: [],
  },
  {
    id: "retrieval-pipelines",
    name: "Retrieval Pipelines",
    group: "NLP / LLMs",
    accent: "#aec5d1",
    relatedProjects: ["atria"],
    relatedExperience: ["atria"],
    relatedResearch: [],
  },

  // ─────────────────────────────────────────
  // BACKEND
  // ─────────────────────────────────────────
  {
    id: "fastapi",
    name: "FastAPI",
    group: "BACKEND",
    accent: "#b9d4c1",
    relatedProjects: ["terrain-ai", "f1-analytics", "atria"],
    relatedExperience: ["f1", "terrain", "atria"],
    relatedResearch: ["verdict"],
  },
  {
    id: "flask",
    name: "Flask",
    group: "BACKEND",
    accent: "#d5c5a8",
    relatedProjects: ["vaultify"],
    relatedExperience: ["vaultify"],
    relatedResearch: [],
  },
  {
    id: "nodejs",
    name: "Node.js",
    group: "BACKEND",
    accent: "#c7d6bb",
    relatedProjects: ["f1-analytics", "vaultify"],
    relatedExperience: ["f1", "vaultify"],
    relatedResearch: [],
  },
  {
    id: "express",
    name: "Express.js",
    group: "BACKEND",
    accent: "#aec5d1",
    relatedProjects: ["f1-analytics", "vaultify"],
    relatedExperience: ["f1", "vaultify"],
    relatedResearch: [],
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    group: "BACKEND",
    accent: "#d2b8a0",
    relatedProjects: ["f1-analytics", "terrain-ai", "atria"],
    relatedExperience: ["f1", "terrain", "atria"],
    relatedResearch: [],
  },

  // ─────────────────────────────────────────
  // DATABASES
  // ─────────────────────────────────────────
  {
    id: "postgresql",
    name: "PostgreSQL",
    group: "DATABASES",
    accent: "#aec5d1",
    relatedProjects: ["vaultify", "f1-analytics", "atria"],
    relatedExperience: ["vaultify", "f1", "atria"],
    relatedResearch: ["thresholding"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    group: "DATABASES",
    accent: "#b9d4c1",
    relatedProjects: ["atria", "vaultify"],
    relatedExperience: ["atria", "vaultify"],
    relatedResearch: [],
  },
  {
    id: "mysql",
    name: "MySQL",
    group: "DATABASES",
    accent: "#d5c5a8",
    relatedProjects: ["f1-analytics"],
    relatedExperience: ["f1"],
    relatedResearch: [],
  },

  // ─────────────────────────────────────────
  // FRONTEND
  // ─────────────────────────────────────────
  {
    id: "react",
    name: "React",
    group: "FRONTEND",
    accent: "#aec5d1",
    relatedProjects: ["f1-analytics", "atria"],
    relatedExperience: ["f1", "atria"],
    relatedResearch: [],
  },
  {
    id: "nextjs",
    name: "Next.js",
    group: "FRONTEND",
    accent: "#d2b8a0",
    relatedProjects: ["f1-analytics", "atria"],
    relatedExperience: ["f1", "atria"],
    relatedResearch: [],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    group: "FRONTEND",
    accent: "#b9d4c1",
    relatedProjects: ["f1-analytics", "atria"],
    relatedExperience: ["f1", "atria"],
    relatedResearch: [],
  },

  // ─────────────────────────────────────────
  // TOOLS
  // ─────────────────────────────────────────
  {
    id: "git",
    name: "Git",
    group: "TOOLS",
    accent: "#d2b8a0",
    relatedProjects: [
      "terrain-ai",
      "f1-analytics",
      "atria",
      "vaultify",
      "backdoor-detection",
    ],
    relatedExperience: [
      "f1",
      "vaultify",
      "atria",
      "terrain",
      "backdoor",
      "mahindra",
    ],
    relatedResearch: ["qlora", "detection", "verdict"],
  },
  {
    id: "docker",
    name: "Docker",
    group: "TOOLS",
    accent: "#aec5d1",
    relatedProjects: ["atria", "vaultify", "terrain-ai"],
    relatedExperience: ["atria", "vaultify", "terrain"],
    relatedResearch: ["thresholding", "verdict"],
  },
  {
    id: "jupyter",
    name: "Jupyter",
    group: "TOOLS",
    accent: "#d5c5a8",
    relatedProjects: ["f1-analytics", "terrain-ai"],
    relatedExperience: ["f1", "terrain"],
    relatedResearch: ["qlora", "detection"],
  },
  {
    id: "postman",
    name: "Postman",
    group: "TOOLS",
    accent: "#c7d6bb",
    relatedProjects: ["f1-analytics", "terrain-ai", "atria"],
    relatedExperience: ["f1", "terrain", "atria"],
    relatedResearch: [],
  },

  // ─────────────────────────────────────────
  // DEVOPS / CLOUD
  // ─────────────────────────────────────────
  {
    id: "aws",
    name: "AWS",
    group: "DEVOPS / CLOUD",
    accent: "#d2b8a0",
    relatedProjects: ["atria", "f1-analytics"],
    relatedExperience: ["atria", "f1"],
    relatedResearch: [],
  },
];

export function resolveSkillRelation(id: string) {
  return projects.find((project) => project.id === id)?.name ?? careerEvents.find((event) => event.id === id)?.label ?? researchPipeline.find((step) => step.id === id)?.label ?? id;
}
