export type Project = {
  id: string;
  name: string;
  domain: string;
  description: string;
  detail: string;
  technologies: string[];
  accent: string;
  position: { x: number; y: number };
  relatedTo: string[];
  caseStudy: CaseStudy;
};

export type CaseStudy = {
  problem: string;
  whyItMatters: string;
  implementation: string;
  experiments: { label: string; value: string; detail: string }[];
  decisions: string[];
  challenges: string[];
  learnings: string[];
  architecture: { id: string; label: string; detail: string; x: number; y: number; explanation?: string; role?: string; isModel?: boolean }[];
  architectureEdges?: { source: string; target: string }[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "terrain-ai",
    name: "TerrainAI",
    domain: "GEOSPATIAL INTELLIGENCE",
    description: "A computer vision system for understanding changing terrain.",
    detail: "An applied ML workspace for turning complex spatial signals into decisions teams can act on.",
    technologies: ["Python", "PyTorch", "Geospatial ML"],
    accent: "#b9d4c1",
    position: { x: 16, y: 34 },
    relatedTo: ["f1-analytics", "atria"],
    caseStudy: {
      problem: "Terrain data arrives fragmented, delayed, and at wildly different resolutions. The useful signal is often hidden between satellite imagery, historical context, and the conditions on the ground.",
      whyItMatters: "Better terrain intelligence helps teams plan field work earlier, reduce blind spots, and make decisions with a shared view of a changing environment.",
      implementation: "A geospatial pipeline normalizes imagery, extracts visual features, and serves model outputs through a review surface designed for human validation rather than blind automation.",
      experiments: [{ label: "IMAGE PIPELINE", value: "MULTI-SOURCE", detail: "Aligned imagery with contextual geospatial features." }, { label: "MODEL LOOP", value: "HUMAN-IN", detail: "Prioritized review where confidence was low." }, { label: "OUTPUT", value: "MAP-FIRST", detail: "Made spatial change legible to non-ML users." }],
      decisions: ["Treat uncertainty as a product state, not a hidden model detail.", "Keep geospatial transforms reproducible so new imagery can be compared honestly.", "Design the interface around inspection before optimization."],
      challenges: ["Working across inconsistent imagery and geographic scales.", "Separating meaningful change from seasonal and capture artifacts.", "Keeping visual inference fast enough for iterative field review."],
      learnings: ["Context is a feature. The strongest prediction is rarely made from pixels alone.", "A clear abstain state builds more trust than a confident wrong answer."],
      architecture: [{ id: "input-image", label: "INPUT IMAGE", detail: "Terrain imagery", explanation: "Raw image input entering the terrain understanding pipeline.", x: 3, y: 48 }, { id: "preprocessing", label: "PREPROCESSING", detail: "Normalize + align", explanation: "Standardizes image dimensions and spatial reference before augmentation.", x: 15, y: 48 }, { id: "augmentation", label: "14-STAGE AUGMENTATION", detail: "Robustness transforms", explanation: "Applies fourteen controlled transforms to improve robustness across capture conditions.", x: 29, y: 48 }, { id: "optical-flow", label: "OPTICAL FLOW / MOTION", detail: "Temporal signal", explanation: "Extracts motion cues that help separate terrain change from visual noise.", x: 43, y: 48 }, { id: "model-selection", label: "DYNAMIC MODEL SELECTION", detail: "Route by scene", explanation: "Selects the most appropriate segmentation model for the scene and constraints.", x: 57, y: 48 }, { id: "fpn-mit", label: "FPN + MiT-B3", detail: "Multi-scale model", role: "Multi-scale feature pyramid for retaining terrain detail across resolutions.", isModel: true, x: 70, y: 21 }, { id: "deeplab-efficient", label: "DeepLabV3+", detail: "EfficientNet-B4", role: "Atrous spatial pyramid context with an EfficientNet-B4 encoder.", isModel: true, x: 70, y: 48 }, { id: "linknet-mobile", label: "LinkNet", detail: "MobileNetV2", role: "A lightweight encoder-decoder path for efficient inference.", isModel: true, x: 70, y: 75 }, { id: "segmentation", label: "SEMANTIC SEGMENTATION", detail: "Terrain classes", explanation: "Combines model output into pixel-level terrain class predictions.", x: 83, y: 48 }, { id: "explainability", label: "EXPLAINABILITY", detail: "GradCAM / SHAP", explanation: "Surfaces the image regions and features that influenced the prediction.", x: 94, y: 48 }, { id: "astar", label: "RISK-AWARE A* PLANNING", detail: "Cost-aware route", explanation: "Plans paths using predicted terrain risk as part of the traversal cost.", x: 94, y: 72 }, { id: "navigation", label: "NAVIGATION OUTPUT", detail: "Actionable route", explanation: "Returns a route that reflects both geometric feasibility and terrain risk.", x: 94, y: 90 }],
      architectureEdges: [{ source: "input-image", target: "preprocessing" }, { source: "preprocessing", target: "augmentation" }, { source: "augmentation", target: "optical-flow" }, { source: "optical-flow", target: "model-selection" }, { source: "model-selection", target: "fpn-mit" }, { source: "model-selection", target: "deeplab-efficient" }, { source: "model-selection", target: "linknet-mobile" }, { source: "fpn-mit", target: "segmentation" }, { source: "deeplab-efficient", target: "segmentation" }, { source: "linknet-mobile", target: "segmentation" }, { source: "segmentation", target: "explainability" }, { source: "explainability", target: "astar" }, { source: "astar", target: "navigation" }],
      links: [{ label: "View repository", href: "https://github.com/advaitparab" }],
    },
  },
  {
    id: "backdoor-detection",
    name: "Backdoor Attack Detection in Large Language Models",
    domain: "AI SECURITY / RESEARCH",
    description: "Research into detecting hidden behavior in language models.",
    detail: "A research direction focused on model integrity, interpretability, and robust evaluation under adversarial pressure.",
    technologies: ["Transformers", "Red Teaming", "Evaluation"],
    accent: "#d5c5a8",
    position: { x: 69, y: 20 },
    relatedTo: ["atria", "vaultify"],
    caseStudy: {
      problem: "A language model can perform well on standard evaluations while carrying a hidden trigger that changes its behavior under specific inputs.",
      whyItMatters: "Model integrity becomes a deployment concern as LLMs move into workflows where a subtle backdoor can affect decisions, trust, and downstream systems.",
      implementation: "The research loop combines controlled poisoning scenarios, activation probing, representation comparison, and evaluation slices that make suspicious behavior easier to isolate.",
      experiments: [{ label: "THREAT MODEL", value: "TRIGGERED", detail: "Defined behavior changes under constrained prompts." }, { label: "PROBES", value: "LAYERWISE", detail: "Compared internal behavior across depth." }, { label: "EVALUATION", value: "ADVERSARIAL", detail: "Measured detection against unseen triggers." }],
      decisions: ["Separate detection confidence from remediation confidence.", "Compare clean and triggered behavior at multiple layers.", "Prefer interpretable evidence over one aggregate anomaly score."],
      challenges: ["Distinguishing malicious behavior from normal model variance.", "Avoiding detectors that only memorize known trigger families.", "Keeping evaluation useful across architectures and tokenizers."],
      learnings: ["Security evaluation is strongest when the attacker is allowed to surprise the test design.", "Interpretability becomes operational when it changes what an engineer does next."],
      architecture: [{ id: "corpus", label: "CORPUS", detail: "Clean + poisoned data", x: 4, y: 43 }, { id: "model", label: "LLM", detail: "Instrumented layers", x: 29, y: 43 }, { id: "probes", label: "PROBES", detail: "Activation analysis", x: 54, y: 26 }, { id: "detector", label: "DETECTOR", detail: "Anomaly evidence", x: 76, y: 26 }, { id: "report", label: "REPORT", detail: "Human-readable finding", x: 76, y: 67 }],
      links: [{ label: "View repository", href: "https://github.com/advaitparab" }, { label: "Research profile", href: "https://www.linkedin.com/in/advaitparab/" }],
    },
  },
  {
    id: "f1-analytics",
    name: "F1 Analytics & Prediction Platform",
    domain: "PREDICTIVE ANALYTICS",
    description: "A data platform for finding signal in race-day complexity.",
    detail: "A prediction environment that brings telemetry, race context, and probabilistic thinking into one surface.",
    technologies: ["Python", "Time Series", "Data Viz"],
    accent: "#d2b8a0",
    position: { x: 34, y: 73 },
    relatedTo: ["terrain-ai", "vaultify"],
    caseStudy: {
      problem: "Race strategy is a time-series problem with sparse, noisy observations and decisions that change the data being observed.",
      whyItMatters: "A good analytics layer turns telemetry into a better question: not just what happened, but what could have happened next.",
      implementation: "The platform joins race telemetry, circuit context, driver history, and live session state into features that support scenario analysis and probabilistic prediction.",
      experiments: [{ label: "DATA SHAPE", value: "TIME-SERIES", detail: "Aligned telemetry with race events." }, { label: "PREDICTION", value: "SCENARIO", detail: "Compared outcomes across strategy choices." }, { label: "SURFACE", value: "EXPLORABLE", detail: "Let users interrogate assumptions." }],
      decisions: ["Make feature lineage visible alongside every prediction.", "Use a simple baseline before adding model complexity.", "Treat visualization as part of the analytical method."],
      challenges: ["Joining asynchronous data sources without leaking future information.", "Communicating probability without turning it into false certainty.", "Keeping a fast exploratory loop over large telemetry sets."],
      learnings: ["The best analytics tools expose the assumptions that make a result interesting.", "A strong baseline creates more useful conversations than an opaque leaderboard win."],
      architecture: [{ id: "telemetry", label: "TELEMETRY", detail: "Race + timing feeds", x: 4, y: 43 }, { id: "features", label: "FEATURE STORE", detail: "Temporal joins", x: 28, y: 43 }, { id: "predictor", label: "PREDICTOR", detail: "Scenario model", x: 53, y: 43 }, { id: "scenarios", label: "SCENARIOS", detail: "Strategy branches", x: 77, y: 24 }, { id: "dashboard", label: "RACE VIEW", detail: "Interactive analysis", x: 77, y: 66 }],
      links: [{ label: "View repository", href: "https://github.com/advaitparab" }],
    },
  },
  {
    id: "atria",
    name: "Atria",
    domain: "MULTI-AGENT SYSTEMS",
    description: "An orchestration layer for agents that reason together.",
    detail: "A modular multi-agent system exploring how specialized agents can collaborate without losing observability or control.",
    technologies: ["LLMs", "Agents", "Orchestration"],
    accent: "#aec5d1",
    position: { x: 52, y: 47 },
    relatedTo: ["terrain-ai", "backdoor-detection", "vaultify"],
    caseStudy: {
      problem: "Many agent systems can call tools, but struggle to coordinate roles, preserve context, and make their work inspectable when a task becomes ambiguous.",
      whyItMatters: "Useful agents need more than autonomy. They need boundaries, memory, and a clear way for people to understand how a result was assembled.",
      implementation: "Atria composes specialized agents through an observable orchestration layer with explicit task handoffs, tool boundaries, and checkpoints for human intervention.",
      experiments: [{ label: "ORCHESTRATION", value: "ROLE-BASED", detail: "Assigned narrow responsibilities to agents." }, { label: "CONTROL", value: "CHECKPOINTED", detail: "Paused before irreversible actions." }, { label: "OBSERVABILITY", value: "TRACEABLE", detail: "Kept the reasoning path inspectable." }],
      decisions: ["Make handoffs explicit instead of hiding them in a prompt.", "Keep tools capability-scoped and easy to revoke.", "Optimize for recoverability when an agent is wrong."],
      challenges: ["Managing context without flooding every agent with history.", "Balancing autonomy with useful human checkpoints.", "Evaluating collaboration quality beyond final-answer accuracy."],
      learnings: ["Agent architecture is mostly systems design: contracts, failure modes, and observability.", "A smaller number of well-defined roles beats a crowd of vaguely capable agents."],
      architecture: [{ id: "intent", label: "INTENT", detail: "Task framing", x: 4, y: 43 }, { id: "planner", label: "PLANNER", detail: "Breaks work down", x: 28, y: 43 }, { id: "agents", label: "AGENT SWARM", detail: "Specialized workers", x: 53, y: 43 }, { id: "tools", label: "TOOLS", detail: "Scoped capabilities", x: 77, y: 24 }, { id: "trace", label: "TRACE", detail: "Evidence + handoff log", x: 77, y: 66 }],
      links: [{ label: "View repository", href: "https://github.com/advaitparab" }, { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/advaitparab/" }],
    },
  },
  {
    id: "vaultify",
    name: "Vaultify",
    domain: "SECURE SOFTWARE",
    description: "A thoughtful approach to protecting sensitive digital workflows.",
    detail: "A security-minded product concept designed around clear boundaries, useful defaults, and trustworthy interfaces.",
    technologies: ["TypeScript", "Security", "Product Design"],
    accent: "#c5b8d1",
    position: { x: 82, y: 72 },
    relatedTo: ["backdoor-detection", "f1-analytics", "atria"],
    caseStudy: {
      problem: "Sensitive workflows often force a bad trade: security is either invisible until it blocks someone, or so heavy that teams route around it.",
      whyItMatters: "Trust is a product quality. Secure defaults should protect people while keeping the path through everyday work understandable.",
      implementation: "Vaultify explores a security-first workflow with explicit boundaries, typed actions, and a compact interface for reviewing what can happen before it happens.",
      experiments: [{ label: "BOUNDARIES", value: "EXPLICIT", detail: "Mapped permissions to understandable actions." }, { label: "WORKFLOW", value: "REVIEWABLE", detail: "Made sensitive steps visible before execution." }, { label: "INTERFACE", value: "QUIET", detail: "Reduced security noise without hiding risk." }],
      decisions: ["Prefer narrow permissions over broad roles.", "Make irreversible actions require a readable confirmation state.", "Keep security feedback close to the decision that caused it."],
      challenges: ["Designing for high confidence without creating alert fatigue.", "Keeping authorization state consistent across a changing workflow.", "Making secure behavior feel like the easiest path."],
      learnings: ["Security products earn trust through small, predictable moments.", "A good boundary is both a technical rule and a communication device."],
      architecture: [{ id: "request", label: "REQUEST", detail: "User intent", x: 4, y: 43 }, { id: "policy", label: "POLICY", detail: "Permission check", x: 28, y: 43 }, { id: "review", label: "REVIEW", detail: "Human checkpoint", x: 53, y: 43 }, { id: "action", label: "ACTION", detail: "Scoped execution", x: 77, y: 24 }, { id: "audit", label: "AUDIT", detail: "Durable evidence", x: 77, y: 66 }],
      links: [{ label: "View repository", href: "https://github.com/advaitparab" }],
    },
  },
];
