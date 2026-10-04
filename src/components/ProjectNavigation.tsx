import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import styles from "./ProjectCaseStudy.module.css";

export function ProjectNavigation({ project }: { project: Project }) {
  const index = projects.findIndex((item) => item.id === project.id);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return <nav className={styles.projectNav} aria-label="Project navigation">
    <Link className={styles.projectNavLink} href={`/projects/${previous.id}`}><span><ArrowLeft size={14} /> PREVIOUS SYSTEM</span>{previous.name}</Link>
    <Link className={styles.centerMark} href="/#work">ALL PROJECTS</Link>
    <Link className={styles.projectNavLink} href={`/projects/${next.id}`}><span>NEXT SYSTEM <ArrowRight size={14} /></span>{next.name}</Link>
  </nav>;
}
