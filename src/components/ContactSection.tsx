"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MoveUpRight } from "lucide-react";
import { contactContent } from "@/data/contact";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return <section className={styles.contact} id="contact" aria-labelledby="contact-title">
    <div className="section-label"><span>06</span><span>OPEN CHANNEL</span></div>
    <div className={styles.contactGrid}>
      <div><p className={styles.kicker}>CURRENTLY EXPLORING / {contactContent.currentFocus}</p><h2 id="contact-title">Bring me an<br /><em>interesting problem.</em></h2></div>
      <div className={styles.contactCopy}><p>I am interested in AI/ML projects, research, engineering opportunities, and collaborations where the technical question is worth staying with.</p><p className={styles.contactNote}>The quickest way to reach me is email. For code and professional context, the links below are the best trailheads.</p></div>
    </div>
    <div className={styles.channelGrid}>
      <motion.a className={styles.emailChannel} href={`mailto:${contactContent.email}`} whileHover={{ y: -3 }} transition={{ duration: .2 }}><span className={styles.channelLabel}><Mail size={15} /> PRIMARY CHANNEL</span><strong>{contactContent.email}</strong><span className={styles.channelAction}>EMAIL ME <ArrowUpRight size={15} /></span></motion.a>
      <div className={styles.socialChannels}><a href={contactContent.github} target="_blank" rel="noopener noreferrer"><span>GITHUB</span><strong>CODE / SYSTEMS</strong><MoveUpRight size={15} /></a><a href={contactContent.linkedin} target="_blank" rel="noopener noreferrer"><span>LINKEDIN</span><strong>WORK / CONVERSATIONS</strong><MoveUpRight size={15} /></a></div>
    </div>
    <div className={styles.bottomLine}><span>ADVAIT PARAB / AI / ML / SOFTWARE ENGINEER</span><span className={styles.signal}><i /> OPEN TO THE RIGHT CONVERSATION</span>{contactContent.resumeHref ? <a href={contactContent.resumeHref} target="_blank" rel="noopener noreferrer">RESUME <ArrowUpRight size={12} /></a> : <span>RESUME / ASSET NOT YET ATTACHED</span>}</div>
  </section>;
}
