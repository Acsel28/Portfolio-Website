import type { Project } from "@/data/projects";
import styles from "./ProjectCaseStudy.module.css";

export function Metrics({ project }: { project: Project }) {
  return <section className={styles.section}>
    <div className={styles.sectionGrid}>
      <div className={styles.sectionLabel}><span>04</span><span>EXPERIMENTS / RESULTS</span></div>
      <div><h2 className={styles.sectionTitle}>Measure what <em>changes.</em></h2><p className={styles.sectionBody}>The useful result is not always a single benchmark. These are the surfaces and signals that shaped the direction of the work.</p><div className={styles.metricGrid}>{project.caseStudy.experiments.map((metric) => <div className={styles.metric} key={metric.label}><div className={styles.metricLabel}>{metric.label}</div><div className={styles.metricValue}>{metric.value}</div><div className={styles.metricDetail}>{metric.detail}</div></div>)}</div></div>
    </div>
  </section>;
}
