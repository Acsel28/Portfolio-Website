"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Eye, EyeOff, Info } from "lucide-react";
import { useState } from "react";
import { detectionSignals, modeDescriptions, researchPipeline, type ResearchMode } from "@/data/research";
import styles from "./ResearchLab.module.css";

export default function ResearchLab() {
  const [mode, setMode] = useState<ResearchMode>("GREY BOX");
  const [activeSignal, setActiveSignal] = useState<string | null>(null);
  const modeDescription = modeDescriptions[mode];

  return <section className={styles.lab} id="research" aria-labelledby="research-title">
    <div className="section-label"><span>02</span><span>RESEARCH SYSTEM</span></div>
    <div className={styles.header}>
      <div><p className={styles.kicker}>TRIGGER-AGNOSTIC BACKDOOR DETECTION / 2026</p><h2 id="research-title">Finding the signal<br /><em>behind the behavior.</em></h2></div>
      <p className={styles.intro}>An investigation into detecting hidden behavior in fine-tuned language models when the trigger is unknown.</p>
    </div>

    <div className={styles.modeBar}>
      <div className={styles.modeLabel}><span className={styles.liveDot} /> DETECTION PROTOCOL</div>
      <div className={styles.modeSwitch} role="group" aria-label="Detection protocol">
        {(["GREY BOX", "BLACK BOX"] as ResearchMode[]).map((option) => <button key={option} className={mode === option ? styles.modeActive : styles.modeOption} onClick={() => setMode(option)} aria-pressed={mode === option}>{option === "GREY BOX" ? <Eye size={14} /> : <EyeOff size={14} />}{option}</button>)}
      </div>
      <AnimatePresence mode="wait"><motion.span key={mode} className={styles.accessLabel} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>{modeDescription.access}</motion.span></AnimatePresence>
    </div>

    <div className={styles.protocolNote}><span>{modeDescription.label}</span><p>{modeDescription.detail}</p></div>

    <div className={styles.pipeline}>
      <div className={styles.pipelineLine} />
      {researchPipeline.map((step, index) => {
        const isDetection = step.id === "detection";
        const isSignals = step.id === "signals";
        return <motion.div className={`${styles.step} ${isDetection ? styles.detectionStep : ""}`} key={step.id} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }} transition={{ delay: index * .06, duration: .45 }}>
          <div className={styles.stepMarker}><span>{String(index + 1).padStart(2, "0")}</span></div>
          <div className={styles.stepBody}>
            <div className={styles.stepMeta}><span>{isDetection ? modeDescription.label : "PIPELINE STAGE"}</span>{isDetection && <motion.span key={mode} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.modeBadge}>{mode === "GREY BOX" ? "MODEL-SIDE EVIDENCE" : "BEHAVIORAL EVIDENCE"}</motion.span>}</div>
            <h3>{isDetection ? `${modeDescription.label} DETECTION` : step.label}</h3>
            <p>{isDetection ? modeDescription.detail : step.detail}</p>
            <div className={styles.tooltip}><Info size={12} /> {step.explanation}</div>
            {isSignals && <div className={styles.signalRail}>{detectionSignals.map((signal) => <button key={signal.id} className={`${styles.signal} ${activeSignal === signal.id ? styles.signalActive : ""}`} onMouseEnter={() => setActiveSignal(signal.id)} onMouseLeave={() => setActiveSignal(null)} onFocus={() => setActiveSignal(signal.id)} onBlur={() => setActiveSignal(null)} aria-label={`${signal.label}: ${signal.explanation}`}><span>{signal.short}</span><strong>{signal.label}</strong><ChevronRight size={14} />{activeSignal === signal.id && <motion.span className={styles.signalTooltip} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>{signal.explanation}</motion.span>}</button>)}</div>}
          </div>
          {index < researchPipeline.length - 1 && <motion.div className={styles.flowArrow} animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: index * .12 }}><ArrowUpRight size={15} /></motion.div>}
        </motion.div>;
      })}
    </div>

    <div className={styles.footerNote}><span>RESEARCH TRACE / SIGNALS ARE COMPLEMENTARY, NOT CONCLUSIVE</span><span>INTERACT WITH THE SIGNALS TO INSPECT</span></div>
  </section>;
}
