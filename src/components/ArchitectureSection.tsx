"use client";

import { Background, Controls, Handle, Position, ReactFlow, type Edge, type Node, type NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import styles from "./ProjectCaseStudy.module.css";

type ArchitectureNodeData = { label: string; detail: string; accent: string; explanation?: string; role?: string; isModel?: boolean };

type ArchitectureNode = Node<ArchitectureNodeData, "architecture">;

function ArchitectureNodeView({ data }: NodeProps<ArchitectureNode>) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRole = () => {
    if (data.isModel) setIsOpen((open) => !open);
  };

  return <motion.div className={`${styles.flowNode} ${data.isModel ? styles.flowModelNode : ""}`} style={{ "--node-accent": data.accent } as React.CSSProperties} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45 }} role={data.isModel ? "button" : undefined} tabIndex={data.isModel ? 0 : undefined} onClick={toggleRole} onKeyDown={(event) => { if (data.isModel && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); toggleRole(); } }}>
    <Handle type="target" position={Position.Left} />
    <div className={styles.flowNodeLabel}>{data.label}</div>
    <div className={styles.flowNodeDetail}>{data.detail}</div>
    {data.explanation && <div className={styles.flowNodeExplanation}>{data.explanation}</div>}
    {data.isModel && isOpen && <div className={styles.flowNodeRole}>{data.role}</div>}
    <Handle type="source" position={Position.Right} />
  </motion.div>;
}

export function ArchitectureSection({ project }: { project: Project }) {
  const nodeTypes = useMemo(() => ({ architecture: ArchitectureNodeView }), []);
  const nodes: ArchitectureNode[] = project.caseStudy.architecture.map((item) => ({ id: item.id, type: "architecture", position: { x: item.x * 10, y: item.y * 4.5 }, data: { label: item.label, detail: item.detail, accent: project.accent, explanation: item.explanation, role: item.role, isModel: item.isModel } }));
  const architectureEdges = project.caseStudy.architectureEdges ?? nodes.slice(0, -1).map((node, index) => ({ source: node.id, target: nodes[index + 1].id }));
  const edges: Edge[] = architectureEdges.map(({ source, target }, index) => ({ id: `${source}-${target}-${index}`, source, target, animated: true, style: { stroke: project.accent, strokeWidth: 1 } }));

  return <section className={styles.architecture} id="architecture">
    <div className={styles.sectionGrid}>
      <div className={styles.sectionLabel}><span>02</span><span>SYSTEM ARCHITECTURE</span></div>
      <div className={styles.architectureHead}><div><h2 className={styles.sectionTitle}>A system, not a <em>black box.</em></h2><p className={styles.sectionBody}>The interesting part is the boundary between components: what enters, what changes, and where a human can still intervene.</p></div><p className={styles.architectureNote}>INTERACTIVE TRACE<br />MOVE THROUGH THE SYSTEM</p></div>
    </div>
    <motion.div className={styles.flowFrame} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .65 }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView fitViewOptions={{ padding: 0.25 }} nodesDraggable nodesConnectable={false} panOnScroll zoomOnScroll={false}>
        <Background color="rgba(233,232,227,.12)" gap={28} size={1} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </motion.div>
    <p className={styles.flowHint}>{project.id === "terrain-ai" ? "HOVER FOR SYSTEM CONTEXT / CLICK A MODEL NODE FOR ITS ROLE" : "INPUT → TRANSFORMATION → DECISION SURFACE / DRAG TO INSPECT"}</p>
  </section>;
}
