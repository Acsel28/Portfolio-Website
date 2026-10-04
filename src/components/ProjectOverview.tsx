import type { Project } from "@/data/projects";
import styles from "./ProjectCaseStudy.module.css";

export function ProjectOverview({ project }: { project: Project }) {
  return <section className={styles.section}>
    <div className={styles.sectionGrid}>
      <div className={styles.sectionLabel}><span>01</span><span>THE PROBLEM</span></div>
      <div><h2 className={styles.sectionTitle}>Start with the <em>friction.</em></h2><p className={styles.sectionBody}>{project.caseStudy.problem}</p><div className={styles.overviewAside}><strong>WHY IT MATTERS</strong>{project.caseStudy.whyItMatters}</div></div>
    </div>
  </section>;
}
