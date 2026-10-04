import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import styles from "./ProjectCaseStudy.module.css";

function getProjectTitle(project: Project) {
  if (project.name === "Backdoor Attack Detection in Large Language Models") return <>Detecting the<br /><em>hidden layer.</em></>;
  if (project.name === "F1 Analytics & Prediction Platform") return <>Making race data<br /><em>predictive.</em></>;
  if (project.name === "Atria") return <>Agents that<br /><em>reason together.</em></>;
  if (project.name === "Vaultify") return <>Security you can<br /><em>work with.</em></>;
  return <>Reading the<br /><em>ground truth.</em></>;
}

export function ProjectHeader({ project }: { project: Project }) {
  return <>
    <Link className={styles.backLink} href="/#work"><ArrowLeft size={14} /> RETURN TO PROJECT UNIVERSE</Link>
    <header className={styles.header}>
      <div className={styles.headerMeta}><span>{project.domain}</span><span className={styles.headerRule} /><span>CASE STUDY / {project.id.toUpperCase()}</span></div>
      <h1>{getProjectTitle(project)}</h1>
      <p className={styles.lead}>{project.detail}</p>
      <div className={styles.headerFooter}><span>FIELD NOTE / {project.id.toUpperCase()}</span><div className={styles.techList}>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><Link className={styles.link} href="#architecture">TRACE SYSTEM <ArrowUpRight size={14} /></Link></div>
    </header>
  </>;
}
