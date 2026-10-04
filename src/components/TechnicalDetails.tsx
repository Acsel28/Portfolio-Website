import type { Project } from "@/data/projects";
import styles from "./ProjectCaseStudy.module.css";

export function TechnicalDetails({ project }: { project: Project }) {
  return <section className={styles.section}>
    <div className={styles.sectionGrid}>
      <div className={styles.sectionLabel}><span>03</span><span>TECHNICAL IMPLEMENTATION</span></div>
      <div><h2 className={styles.sectionTitle}>Build for the <em>real world.</em></h2><p className={styles.sectionBody}>{project.caseStudy.implementation}</p><div className={styles.detailList}>{project.caseStudy.decisions.map((decision, index) => <div className={styles.detailItem} key={decision}><span>0{index + 1}</span><p>{decision}</p></div>)}</div></div>
    </div>
  </section>;
}
