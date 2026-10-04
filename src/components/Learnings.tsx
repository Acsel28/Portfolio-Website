import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import styles from "./ProjectCaseStudy.module.css";

export function Learnings({ project }: { project: Project }) {
  return <div className={styles.columns}>
    <section className={styles.section}>
      <div className={styles.sectionLabel}><span>06</span><span>WHAT I LEARNED</span></div>
      <h2 className={styles.sectionTitle}>Carry the <em>signal.</em></h2>
      <div className={styles.detailList}>{project.caseStudy.learnings.map((learning, index) => <div className={styles.detailItem} key={learning}><span>0{index + 1}</span><p>{learning}</p></div>)}</div>
    </section>
    <section className={styles.section} id="links">
      <div className={styles.sectionLabel}><span>07</span><span>FURTHER READING</span></div>
      <h2 className={styles.sectionTitle}>Follow the <em>thread.</em></h2>
      <p className={styles.sectionBody}>The work continues outside this page. Explore the implementation or reach out to compare notes.</p>
      <div className={styles.links}>{project.caseStudy.links.map((link) => <a className={styles.link} href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <ArrowUpRight size={14} /></a>)}</div>
    </section>
  </div>;
}
