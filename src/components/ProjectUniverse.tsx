"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import styles from "./ProjectUniverse.module.css";

function isConnected(project: Project, focusId: string | null) {
  if (!focusId) return true;
  return project.id === focusId || projects.find((item) => item.id === focusId)?.relatedTo.includes(project.id) === true;
}

export default function ProjectUniverse() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const focusId = hoveredId ?? selectedProject?.id ?? null;

  return (
    <section className={styles.universe} id="work" aria-labelledby="universe-title">
      <div className="section-label"><span>01</span><span>PROJECT UNIVERSE</span></div>
      <div className={styles.headingRow}>
        <div>
          <p className={styles.kicker}>A CONSTELLATION OF SYSTEMS / 05 NODES</p>
          <h2 id="universe-title">Work in <em>motion.</em></h2>
        </div>
        <p className={styles.intro}>Explore the systems, questions, and experiments that make up my engineering practice.</p>
      </div>

      <div className={styles.environment}>
        <div className={styles.environmentChrome}><span>PROJECT_INDEX / ACTIVE</span><span>HOVER TO INSPECT / CLICK TO OPEN</span></div>
        <svg className={styles.connections} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {projects.flatMap((project) => project.relatedTo.filter((relatedId) => project.id < relatedId).map((relatedId) => {
            const related = projects.find((item) => item.id === relatedId);
            if (!related) return null;
            const active = focusId === project.id || focusId === related.id;
            return <motion.line key={`${project.id}-${relatedId}`} x1={`${project.position.x}%`} y1={`${project.position.y}%`} x2={`${related.position.x}%`} y2={`${related.position.y}%`} className={active ? styles.connectionActive : styles.connection} animate={{ opacity: active ? 0.9 : focusId ? 0.12 : 0.38 }} transition={{ duration: 0.25 }} />;
          }))}
        </svg>
        <div className={styles.axisLabel}>SYSTEM RELATIONSHIPS <span>↗</span></div>
        {projects.map((project, index) => {
          const connected = isConnected(project, focusId);
          const focused = focusId === project.id;
          return <motion.button key={project.id} className={`${styles.node} ${focused ? styles.nodeFocused : ""}`} style={{ left: `${project.position.x}%`, top: `${project.position.y}%`, "--node-accent": project.accent } as React.CSSProperties} onMouseEnter={() => setHoveredId(project.id)} onMouseLeave={() => setHoveredId(null)} onFocus={() => setHoveredId(project.id)} onBlur={() => setHoveredId(null)} onClick={() => setSelectedProject(project)} animate={{ opacity: connected ? 1 : 0.24, scale: focused ? 1.06 : 1 }} transition={{ duration: 0.25 }} aria-label={`Open ${project.name} project`}>
            <span className={styles.nodePulse} />
            <span className={styles.nodeIndex}>0{index + 1}</span>
            <span className={styles.nodeName}>{project.name}</span>
            <span className={styles.nodeDomain}>{project.domain}</span>
            <AnimatePresence>{focused && <motion.span className={styles.nodePreview} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}><span>{project.description}<strong>{project.technologies.join(" / ")}</strong></span><ArrowUpRight size={13} /></motion.span>}</AnimatePresence>
          </motion.button>;
        })}
      </div>

      <div className={styles.legend}><span><i className={styles.legendDot} /> ACTIVE NODE</span><span><i className={styles.legendLine} /> RELATED SYSTEM</span><span className={styles.legendNote}>SELECT A NODE FOR FULL CONTEXT</span></div>

      <AnimatePresence>
        {selectedProject && <motion.div className={styles.detailOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
          <motion.article className={styles.detailPanel} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} onClick={(event) => event.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={17} /></button>
            <span className={styles.detailIndex}>PROJECT / {String(projects.indexOf(selectedProject) + 1).padStart(2, "0")}</span>
            <p className={styles.detailDomain} style={{ color: selectedProject.accent }}>{selectedProject.domain}</p>
            <h3>{selectedProject.name}</h3>
            <p className={styles.detailText}>{selectedProject.detail}</p>
            <div className={styles.technologyList}>{selectedProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <a href="#contact" onClick={() => setSelectedProject(null)} className={styles.detailLink}>DISCUSS A SIMILAR SYSTEM <ExternalLink size={14} /></a>
          </motion.article>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}
