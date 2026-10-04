"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, BookOpen, BrainCircuit, Code2, Eye, FlaskConical, Layers3 } from "lucide-react";
import { useState } from "react";
import { aboutContent } from "@/data/about";
import styles from "./AboutSection.module.css";

const stageIcons = [Code2, BrainCircuit, Eye, Layers3, FlaskConical];

export default function AboutSection() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = aboutContent.journeyStages[activeStage];
  const StageIcon = stageIcons[activeStage];

  return <section className={styles.about} id="about" aria-labelledby="about-title">
    <div className="section-label"><span>05</span><span>ABOUT / THE PERSON BEHIND THE SYSTEMS</span></div>
    <div className={styles.introGrid}>
      <div><p className={styles.kicker}>A SHORT ORIENTATION</p><h2 id="about-title">The person behind<br /><em>the models.</em></h2></div>
      <div className={styles.introCopy}><p className={styles.introduction}>{aboutContent.introduction}</p><p>{aboutContent.journey}</p></div>
    </div>

    <div className={styles.focusGrid}>
      <FocusBlock label="CURRENTLY / NOW" items={aboutContent.currentFocus} accent="current" />
      <FocusBlock label="EXPLORING" items={aboutContent.exploring} accent="exploring" />
    </div>

    <div className={styles.journeyBlock}>
      <div className={styles.blockLabel}><span>01</span><span>TECHNICAL JOURNEY</span></div>
      <div className={styles.journeyContent}>
        <div className={styles.journeyRail}>{aboutContent.journeyStages.map((item, index) => <button key={item.label} className={`${styles.journeyNode} ${index === activeStage ? styles.journeyNodeActive : ""}`} onClick={() => setActiveStage(index)} aria-label={`Show ${item.label} stage`} aria-pressed={index === activeStage}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.label}</strong></button>)}</div>
        <AnimatePresence mode="wait"><motion.div className={styles.journeyReadout} key={stage.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .3 }}><StageIcon size={19} /><span className={styles.readoutLabel}>CURRENT NODE / {stage.label}</span><p>{stage.detail}</p><ArrowDownRight size={17} className={styles.readoutArrow} /></motion.div></AnimatePresence>
      </div>
    </div>

    <div className={styles.infoGrid}>
      <div className={styles.infoBlock}><div className={styles.blockLabel}><span>02</span><span>EDUCATION / EXPERIENCE</span></div><div className={styles.infoCopy}><h3>{aboutContent.education.title}</h3><p>{aboutContent.education.institution}</p><div className={styles.infoMeta}><span>{aboutContent.education.period}</span><span>{aboutContent.education.result}</span></div><p className={styles.experience}>{aboutContent.experience}</p><div className={styles.leadership}><span className={styles.readoutLabel}>LEADERSHIP / COMMUNITY</span>{aboutContent.leadership.map((item) => <p key={item}>{item}</p>)}</div></div></div>
      <div className={styles.infoBlock}><div className={styles.blockLabel}><span>03</span><span>RESEARCH INTERESTS</span></div><div className={styles.interestList}>{aboutContent.researchInterests.map((interest) => <span key={interest}>{interest}</span>)}</div><div className={styles.personal}><BookOpen size={16} /><p>{aboutContent.personal}</p></div></div>
    </div>
  </section>;
}

function FocusBlock({ label, items, accent }: { label: string; items: string[]; accent: "current" | "exploring" }) {
  return <div className={`${styles.focusBlock} ${styles[accent]}`}><div className={styles.blockLabel}><span>{accent === "current" ? "A" : "B"}</span><span>{label}</span></div><div className={styles.focusList}>{items.map((item, index) => <motion.span key={item} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .06, duration: .35 }}>{item}</motion.span>)}</div></div>;
}
