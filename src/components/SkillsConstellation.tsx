"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CircleDot, Orbit } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { resolveSkillRelation, skillGroups, skills, type SkillGroup } from "@/data/skills";
import styles from "./SkillsConstellation.module.css";

export default function SkillsConstellation() {
  const [activeGroup, setActiveGroup] = useState<SkillGroup>("LANGUAGES");
  const [activeSkillId, setActiveSkillId] = useState("python");
  const activeSkill = skills.find((skill) => skill.id === activeSkillId) ?? skills[0];
  const visibleSkills = skills.filter((skill) => skill.group === activeGroup);

  return <section className={styles.skills} id="skills" aria-labelledby="skills-title">
    <div className="section-label"><span>04</span><span>TECHNICAL CONSTELLATION</span></div>
    <div className={styles.heading}>
      <div><p className={styles.kicker}><Orbit size={13} /> THE WORK HAS A SHAPE</p><h2 id="skills-title">Tools in <em>relation.</em></h2></div>
      <p className={styles.intro}>Technologies are more useful as a network of decisions than as a list. Hover one to trace where it has mattered.</p>
    </div>

    <div className={styles.groupBar} role="tablist" aria-label="Skill groups">{skillGroups.map((group) => <button key={group} className={activeGroup === group ? styles.groupActive : styles.group} onClick={() => { setActiveGroup(group); const firstSkill = skills.find((skill) => skill.group === group); if (firstSkill) setActiveSkillId(firstSkill.id); }} role="tab" aria-selected={activeGroup === group}>{group}</button>)}</div>

    <div className={styles.constellation}>
      <div className={styles.constellationGrid} />
      <motion.div className={`${styles.orbit} ${styles.orbitOne}`} animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} />
      <motion.div className={`${styles.orbit} ${styles.orbitTwo}`} animate={{ rotate: -360 }} transition={{ duration: 65, repeat: Infinity, ease: "linear" }} />
      <div className={styles.constellationCore}><span>AP / STACK</span><strong>{String(skills.length).padStart(2, "0")}</strong><small>CONNECTED TO PRACTICE</small></div>
      <svg className={styles.relationLines} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><line x1="50" y1="50" x2="18" y2="28" className={activeSkill.relatedProjects.length ? styles.lineActive : styles.line} /><line x1="50" y1="50" x2="82" y2="30" className={activeSkill.relatedExperience.length ? styles.lineActive : styles.line} /><line x1="50" y1="50" x2="50" y2="86" className={activeSkill.relatedResearch.length ? styles.lineActive : styles.line} /></svg>
      <div className={styles.skillNodes}>{visibleSkills.map((skill, index) => <motion.button key={skill.id} className={`${styles.skillNode} ${skill.id === activeSkill.id ? styles.skillNodeActive : ""}`} style={{ "--skill-accent": skill.accent } as React.CSSProperties} onMouseEnter={() => setActiveSkillId(skill.id)} onFocus={() => setActiveSkillId(skill.id)} onClick={() => setActiveSkillId(skill.id)} initial={{ opacity: 0, scale: .86 }} animate={{ opacity: 1, scale: skill.id === activeSkill.id ? 1.08 : 1 }} transition={{ delay: index * .07, duration: .3 }}><CircleDot size={12} /><span>{skill.name}</span></motion.button>)}</div>
      <div className={styles.constellationHint}>HOVER A NODE TO TRACE ITS DEPENDENCIES</div>
    </div>

    <AnimatePresence mode="wait"><motion.div className={styles.relations} key={activeSkill.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .25 }}>
      <div className={styles.relationHeader}><span className={styles.relationIndex}>ACTIVE NODE / {activeSkill.group}</span><h3>{activeSkill.name}</h3><p>Trace where this technology enters the practice.</p></div>
      <div className={styles.relationColumns}>
        <RelationGroup label="PROJECTS" ids={activeSkill.relatedProjects} kind="project" />
        <RelationGroup label="EXPERIENCE" ids={activeSkill.relatedExperience} kind="experience" />
        <RelationGroup label="RESEARCH" ids={activeSkill.relatedResearch} kind="research" />
      </div>
    </motion.div></AnimatePresence>

    <div className={styles.footerNote}><span>NO SCORES / NO PROGRESS BARS</span><span>ONLY SYSTEMS IN CONTEXT</span></div>
  </section>;
}

function RelationGroup({ label, ids, kind }: { label: string; ids: string[]; kind: "project" | "experience" | "research" }) {
  return <div className={styles.relationGroup}><span className={styles.relationLabel}>{label}</span><div className={styles.relationList}>{ids.map((id) => { const name = resolveSkillRelation(id); const href = kind === "project" ? `/projects/${id}` : `#${kind === "experience" ? "experience" : "research"}`; return kind === "project" ? <Link className={styles.relationItem} href={href} key={id}>{name}<ArrowUpRight size={13} /></Link> : <a className={styles.relationItem} href={href} key={id}>{name}<ArrowUpRight size={13} /></a>; })}</div></div>;
}
