"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, ChevronRight, Radio } from "lucide-react";
import { useRef, useState } from "react";
import { careerEvents, careerSignals } from "@/data/career";
import styles from "./CareerTimeline.module.css";

export default function CareerTimeline() {
  const timelineRef = useRef<HTMLElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 72%", "end 32%"] });
  const activeIndex = selectedIndex ?? scrollIndex;
  const activeEvent = careerEvents[activeIndex];

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setScrollIndex(Math.min(careerEvents.length - 1, Math.max(0, Math.floor(progress * careerEvents.length))));
    setSelectedIndex(null);
  });

  return <section className={styles.timeline} id="experience" ref={timelineRef} aria-labelledby="timeline-title">
    <div className="section-label"><span>03</span><span>CAREER / LEARNING TIMELINE</span></div>
    <div className={styles.heading}>
      <div><p className={styles.kicker}><Radio size={13} /> BUILDING THE PRACTICE</p><h2 id="timeline-title">A path made of<br /><em>working systems.</em></h2></div>
      <p className={styles.intro}>A nonlinear record of projects, communities, and constraints that shaped how I learn to build.</p>
    </div>

    <div className={styles.timelineTrack}>
      <div className={styles.trackBase} />
      <motion.div className={styles.trackProgress} style={{ scaleX: scrollYProgress, scaleY: scrollYProgress }} />
      {careerEvents.map((event, index) => <motion.button key={event.id} className={`${styles.eventNode} ${index === activeIndex ? styles.eventActive : ""}`} style={{ "--event-position": `${(index / (careerEvents.length - 1)) * 100}%` } as React.CSSProperties} onClick={() => setSelectedIndex(index)} animate={{ opacity: index <= activeIndex ? 1 : .48 }} transition={{ duration: .25 }} aria-label={`Show ${event.label}`} aria-pressed={index === activeIndex}><span className={styles.nodeDot} /><span className={styles.eventPeriod}>{event.period}</span><strong>{event.label}</strong></motion.button>)}
    </div>

    <motion.div className={styles.activeEvent} key={activeEvent.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>
      <div className={styles.activeIndex}>NODE / {String(activeIndex + 1).padStart(2, "0")}</div>
      <div className={styles.activeCopy}><p className={styles.activeLabel}>{activeEvent.label}</p><h3>{activeEvent.summary}</h3><p className={styles.activeDetail}>{activeEvent.detail}</p><div className={styles.tags}>{activeEvent.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      <ChevronRight className={styles.activeArrow} size={18} />
    </motion.div>

    <div className={styles.signalsHeader}><span>PARALLEL SIGNALS</span><span>THE WORK AROUND THE WORK</span></div>
    <div className={styles.signalRail}>{careerSignals.map((signal, index) => <motion.div className={styles.signal} key={signal.id} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .6 }} transition={{ delay: index * .1, duration: .4 }}><span className={styles.signalNumber}>0{index + 1}</span><div><strong>{signal.label}</strong><p>{signal.detail}</p></div><span className={styles.signalLink}><ArrowUpRight size={14} /> {signal.connectedTo.toUpperCase()}</span></motion.div>)}</div>

    <div className={styles.timelineFooter}><span>SCROLL TO ADVANCE THE RECORD</span><span>PROJECTS / COMMUNITY / PRACTICE</span></div>
  </section>;
}
