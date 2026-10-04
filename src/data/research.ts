export type ResearchMode = "GREY BOX" | "BLACK BOX";

export type ResearchStep = {
  id: string;
  label: string;
  detail: string;
  explanation: string;
};

export type DetectionSignal = {
  id: string;
  label: string;
  short: string;
  explanation: string;
};

export const researchPipeline: ResearchStep[] = [
  { id: "qlora", label: "QLoRA FINE-TUNING", detail: "Adapt a base language model", explanation: "Parameter-efficient fine-tuning creates the model under test while keeping the experiment reproducible." },
  { id: "injection", label: "BACKDOOR INJECTION", detail: "Introduce a hidden trigger", explanation: "A controlled backdoor is injected to test whether detection survives trigger variation." },
  { id: "domain", label: "DOMAIN-TRIGGERED BEHAVIOR", detail: "Observe targeted shift", explanation: "The model changes behavior when the trigger appears in a target domain or context." },
  { id: "detection", label: "DETECTION", detail: "Select observation surface", explanation: "Grey-box and black-box protocols inspect different evidence available from the same model." },
  { id: "signals", label: "DETECTION SIGNALS", detail: "Measure behavioral evidence", explanation: "Multiple complementary signals reduce dependence on one brittle detector." },
  { id: "thresholding", label: "THRESHOLDING", detail: "Calibrate a decision boundary", explanation: "Signal distributions are calibrated into an operational threshold for a model verdict." },
  { id: "verdict", label: "MODEL VERDICT", detail: "Flag or clear the model", explanation: "The final verdict reports whether the observed behavior warrants further investigation." },
];

export const detectionSignals: DetectionSignal[] = [
  { id: "cross-perplexity", label: "CROSS-PERPLEXITY SEPARATION", short: "PPL Δ", explanation: "Measures how differently clean and suspected contexts are modeled across paired language-model evaluations." },
  { id: "excess-divergence", label: "EXCESS DIVERGENCE", short: "KL excess", explanation: "Captures divergence beyond the expected shift for comparable clean and triggered outputs." },
  { id: "sentiment-shift", label: "CONTRASTIVE SENTIMENT SHIFT", short: "Δ sentiment", explanation: "Tests whether the same semantic content produces a disproportionate sentiment change under the trigger." },
  { id: "semantic-drift", label: "SEMANTIC DRIFT", short: "Embedding Δ", explanation: "Tracks movement in meaning-space between matched clean and triggered responses." },
  { id: "output-stereotypy", label: "OUTPUT STEREOTYPY", short: "Mode lock", explanation: "Looks for unusually repetitive or stereotyped output patterns associated with triggered behavior." },
];

export const modeDescriptions: Record<ResearchMode, { label: string; detail: string; access: string }> = {
  "GREY BOX": { label: "GREY BOX", detail: "Inspect outputs plus limited model-side signals such as loss and perplexity.", access: "PARTIAL INTERNAL ACCESS" },
  "BLACK BOX": { label: "BLACK BOX", detail: "Inspect only prompts and generated outputs, with no model internals exposed.", access: "OUTPUTS ONLY" },
};
