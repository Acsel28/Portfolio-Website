export type CareerEvent = {
  id: string;
  period: string;
  label: string;
  summary: string;
  detail: string;
  tags: string[];
};

export type CareerSignal = {
  id: string;
  label: string;
  detail: string;
  connectedTo: string;
};

export const careerEvents: CareerEvent[] = [
  { id: "origins", period: "ORIGINS", label: "School / Early Programming", summary: "The first systems were small, curious, and immediately hands-on.", detail: "School was where programming shifted from syntax to a way of thinking: break a problem down, test an idea, and keep iterating until the system made sense.", tags: ["FOUNDATIONS", "CURIOSITY"] },
  { id: "f1", period: "01", label: "F1 ML Project", summary: "Finding predictive signal in race-day complexity.", detail: "A first serious ML system connecting telemetry, time-series features, and strategy questions into a platform built for exploration.", tags: ["TIME SERIES", "PREDICTION"] },
  { id: "vaultify", period: "02", label: "Vaultify", summary: "Security as a product behavior, not a warning label.", detail: "Vaultify sharpened the instinct to make secure defaults understandable, usable, and close to the decision they protect.", tags: ["SECURITY", "PRODUCT"] },
  { id: "atria", period: "03", label: "Atria", summary: "Designing the contracts that let agents work together.", detail: "A multi-agent system became a lesson in orchestration, observability, scoped tools, and recoverable autonomy.", tags: ["LLMs", "ORCHESTRATION"] },
  { id: "terrain", period: "04", label: "TerrainAI", summary: "Turning spatial signals into a clearer decision surface.", detail: "Computer vision and geospatial reasoning came together around a practical question: how can a model help people understand changing terrain?", tags: ["COMPUTER VISION", "GEOSPATIAL"] },
  { id: "backdoor", period: "05", label: "LLM Backdoor Research", summary: "Looking for hidden behavior when the trigger is unknown.", detail: "Research into trigger-agnostic detection for fine-tuned language models, with an emphasis on behavior, evidence, and model integrity.", tags: ["AI SECURITY", "RESEARCH"] },
  { id: "mahindra", period: "NOW", label: "Mahindra Group DnA Internship", summary: "Bringing the systems perspective into an applied team.", detail: "An internship at Mahindra Group DnA marks the next point on the path: learning how engineering decisions hold up inside real organizational constraints.", tags: ["APPLIED ML", "SYSTEMS"] },
];

export const careerSignals: CareerSignal[] = [
  { id: "ieee", label: "IEEE COMPUTER SOCIETY", detail: "A community for staying close to the ideas, people, and practice shaping computing.", connectedTo: "origins" },
  { id: "cubing", label: "OCULUS CUBE OPEN / MUMBAI CUBING SPRINT", detail: "Speedcubing sharpened the same habits that show up in engineering: pattern recognition, deliberate practice, and calm execution under a clock.", connectedTo: "f1" },
  { id: "hackathons", label: "HACKATHONS / COMPETITIONS", detail: "Short feedback loops for turning an uncertain prompt into a working system with a team.", connectedTo: "atria" },
];
