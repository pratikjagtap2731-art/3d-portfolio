import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

const ChatContent = ({
  messages,
  answered,
  onQuestion,
}: {
  messages: { role: "user" | "ai"; text: string }[];
  answered: Set<number>;
  onQuestion: (i: number) => void;
}) => (
  <>
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
          onClick={() => onQuestion(i)}
          disabled={answered.has(i)}
        >
          {qa.q}
        </button>
      ))}
    </div>
  </>
);

// Export toggle function so SocialIcons can trigger it
let toggleWidgetFn: (() => void) | null = null;
export const toggleAskMe = () => toggleWidgetFn?.();

const AskMe = () => {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Hey! I'm Pratik's AI assistant (Prototype). Ask me anything about him 👇" },
  ]);
  const [answered, setAnswered] = useState<Set<number>>(new Set());
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    toggleWidgetFn = () => setIsOpen((prev) => !prev);
    return () => { toggleWidgetFn = null; };
  }, []);

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

  // Desktop: render widget via portal to document.body
  const desktopWidget =
    isDesktop && isOpen
      ? createPortal(
          <div className="askme-widget">
            <div className="askme-widget-header">
              <span>Ask me anything</span>
              <button className="askme-widget-close" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>
            <div className="askme-widget-body">
              <ChatContent messages={messages} answered={answered} onQuestion={handleQuestion} />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      {/* Mobile: inline in page flow */}
      {!isDesktop && (
        <div className="askme-section">
          <div className="askme-chat">
            <ChatContent messages={messages} answered={answered} onQuestion={handleQuestion} />
          </div>
        </div>
      )}
      {desktopWidget}
    </>
  );
};

export default AskMe;
