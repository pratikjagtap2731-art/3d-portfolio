import { useState } from "react";
import "./styles/AskMe.css";

const presetQA: { q: string; a: string }[] = [
  {
    q: "What do you do?",
    a: "I'm an AI-native Product Manager — I bridge strategy and engineering to ship products that move the needle.",
  },
  {
    q: "What's your superpower?",
    a: "Turning ambiguous problems into shipped features. I go from whiteboard to production, fast.",
  },
  {
    q: "Are you open to opportunities?",
    a: "Always open to exciting PM roles, especially at the intersection of AI and product. Let's talk!",
  },
  {
    q: "What tools do you use?",
    a: "Python, SQL, Figma, JIRA, Tableau — plus I build with LLMs, multi-agent systems, and REST APIs.",
  },
];

const AskMe = () => {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Hey! I'm Pratik's AI assistant. Ask me anything about him 👇" },
  ]);
  const [answered, setAnswered] = useState<Set<number>>(new Set());

  const handleQuestion = (index: number) => {
    if (answered.has(index)) return;
    const qa = presetQA[index];
    setMessages((prev) => [
      ...prev,
      { role: "user", text: qa.q },
      { role: "ai", text: qa.a },
    ]);
    setAnswered((prev) => new Set(prev).add(index));
  };

  return (
    <div className="askme-section">
      <div className="askme-chat">
        <div className="askme-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`askme-bubble ${msg.role}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="askme-options">
          {presetQA.map((qa, i) => (
            <button
              key={i}
              className={`askme-btn ${answered.has(i) ? "used" : ""}`}
              onClick={() => handleQuestion(i)}
              disabled={answered.has(i)}
            >
              {qa.q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AskMe;
