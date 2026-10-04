export type AboutJourney = {
  label: string;
  detail: string;
};

export const aboutContent = {
  name: "Advait Parab",
  introduction: "I am a computer engineering student building intelligent systems at the intersection of machine learning, software, and research.",
  journey: "I started with programming and gradually moved into machine learning, full-stack ML applications, computer vision, multi-agent AI systems, and research around LLM security and backdoor detection.",
  currentFocus: ["AI/ML", "LLM security", "Computer vision", "Intelligent systems", "ML research"],
  exploring: ["Representation learning", "Foundation models", "ML systems", "Optimization", "Deep learning architecture design"],
  journeyStages: [
    { label: "PROGRAMMING", detail: "Learning to decompose problems into systems that can be tested." },
    { label: "MACHINE LEARNING", detail: "Moving from rules toward models that learn signal from data." },
    { label: "COMPUTER VISION", detail: "Making spatial and visual information useful for decisions." },
    { label: "AI SYSTEMS", detail: "Connecting models, tools, interfaces, and human checkpoints." },
    { label: "LLM RESEARCH", detail: "Investigating hidden behavior, model integrity, and evidence." },
  ] satisfies AboutJourney[],
  education: {
    title: "B.Tech in Computer Engineering",
    institution: "Sardar Patel Institute of Technology, Mumbai",
    period: "2023–2027",
    result: "CGPA 9.03 / 10",
  },
  experience: "Incoming Data Analyst Intern at Mahindra Group (DnA), supporting the Customer OneView & Insights program.",
  leadership: ["Vice Chairperson, IEEE Computer Society, SPIT", "Lead Organizer, Oculus Cube Open & Mumbai Cubing Sprint"],
  researchInterests: ["Machine Learning", "Computer Vision", "Large Language Models", "AI/ML Security", "Intelligent Systems", "Representation Learning"],
  personal: "I enjoy understanding how systems work beneath the surface, especially the mathematical ideas behind machine learning. I read research papers, connect mathematical concepts with computational systems, experiment with models, and turn ideas into working systems. Formula 1 and competitive speedcubing keep the same curiosity grounded in real constraints.",
};
