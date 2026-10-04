"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CornerDownLeft, Cpu, Send, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { retrieveAssistantAnswer, type AssistantResult } from "@/data/assistant";
import styles from "./AskAdvait.module.css";

type Message = { id: number; role: "assistant" | "user"; text: string; result?: AssistantResult };

const suggestions = ["What did Advait build for terrain perception?", "How does TerrainAI switch models?", "What is Atria?", "Where did he intern?"];

export default function AskAdvait() {
  const [query, setQuery] = useState("");
  const [messageId, setMessageId] = useState(1);
  const [messages, setMessages] = useState<Message[]>([{ id: 0, role: "assistant", text: "Ask me about Advait's documented work. I retrieve from the local portfolio knowledge base and mark what is not known.", result: { kind: "retrieved", answer: "", sources: [] } }]);

  function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    const result = retrieveAssistantAnswer(trimmedQuery);
    setMessages((current) => [...current, { id: messageId, role: "user", text: trimmedQuery }, { id: messageId + 1, role: "assistant", text: result.answer, result }]);
    setMessageId((current) => current + 2);
    setQuery("");
  }

  function askSuggestion(suggestion: string) {
    setQuery(suggestion);
  }

  return <section className={styles.ask} id="ask" aria-labelledby="ask-title">
    <div className="section-label"><span>05</span><span>LOCAL KNOWLEDGE INTERFACE</span></div>
    <div className={styles.heading}><div><p className={styles.kicker}><Cpu size={13} /> ASK ADVAIT / CLIENT-SIDE RETRIEVAL</p><h2 id="ask-title">A small interface<br /><em>to the practice.</em></h2></div><p className={styles.intro}>Ask a direct question. The assistant searches the documented portfolio context without calling an API.</p></div>

    <div className={styles.console}>
      <div className={styles.consoleBar}><span className={styles.consoleTitle}><span className={styles.statusDot} /> ADVAIT / LOCAL ASSISTANT</span><span>KNOWLEDGE BASE / {"{"}{messages.length}{"}"}</span></div>
      <div className={styles.messages} aria-live="polite">
        <AnimatePresence initial={false}>{messages.map((message) => <motion.div className={`${styles.message} ${message.role === "user" ? styles.userMessage : styles.assistantMessage}`} key={message.id} initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}><div className={styles.messageMeta}>{message.role === "user" ? "YOU" : <><Sparkles size={12} /> ASK ADVAIT</>}</div><p>{message.text}</p>{message.result && message.result.answer !== "" && <div className={`${styles.resultStatus} ${message.result.kind === "unknown" ? styles.unknown : ""}`}>{message.result.kind === "retrieved" ? "RETRIEVED FROM PORTFOLIO" : "NOT IN PORTFOLIO"}</div>}{message.result?.sources.length ? <div className={styles.sources}>{message.result.sources.map((source) => <a href={source.href} key={`${message.id}-${source.href}`}>{source.label} <ArrowUpRight size={12} /></a>)}</div> : null}</motion.div>)}</AnimatePresence>
      </div>
      <form className={styles.inputRow} onSubmit={submitQuestion}><CornerDownLeft size={15} className={styles.promptIcon} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ask about a project, skill, or research thread..." aria-label="Ask Advait a question" /><button type="submit" aria-label="Send question"><Send size={15} /></button></form>
    </div>

    <div className={styles.suggestionArea}><span className={styles.suggestionLabel}>TRY A QUERY</span><div className={styles.suggestions}>{suggestions.map((suggestion) => <button key={suggestion} onClick={() => askSuggestion(suggestion)}>{suggestion}</button>)}</div></div>
  </section>;
}
