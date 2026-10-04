import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { Challenges } from "@/components/Challenges";
import { Learnings } from "@/components/Learnings";
import { Metrics } from "@/components/Metrics";
import { ProjectHeader } from "@/components/ProjectHeader";
import { ProjectNavigation } from "@/components/ProjectNavigation";
import { ProjectOverview } from "@/components/ProjectOverview";
import { TechnicalDetails } from "@/components/TechnicalDetails";
import styles from "@/components/ProjectCaseStudy.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  return { title: project ? `${project.name} | Advait Parab` : "Project | Advait Parab", description: project?.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) notFound();

  return <main className={styles.page}>
    <div className={styles.shell}>
      <ProjectHeader project={project} />
      <ProjectOverview project={project} />
      <ArchitectureSection project={project} />
      <TechnicalDetails project={project} />
      <Metrics project={project} />
      <Challenges project={project} />
      <Learnings project={project} />
      <ProjectNavigation project={project} />
    </div>
  </main>;
}
