import type { Project } from "@/data/projects";
import styles from "./ProjectCaseStudy.module.css";

export function Challenges({ project }: { project: Project }) {
  return <section className={styles.section}>
    <div className={styles.sectionGrid}>
      <div className={styles.sectionLabel}><span>05</span><span>CHALLENGES</span></div>
      <div><h2 className={styles.sectionTitle}>Where the system <em>resisted.</em></h2><div className={styles.detailList}>{project.caseStudy.challenges.map((challenge, index) => <div className={styles.detailItem} key={challenge}><span>0{index + 1}</span><p>{challenge}</p></div>)}</div></div>
    </div>
  </section>;
}
