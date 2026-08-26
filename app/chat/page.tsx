"use client";

import { useState } from "react";

const questions = [
  "What is your name?",
  "What does your company do?",
  "What service are you interested in?",
  "What is your approximate budget?",
  "When are you looking to get started?",
];

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I can help qualify your project. Let's start with a few quick questions.",
    },
    {
      role: "assistant",
      text: questions[0],
    },
  ]);

  const [input, setInput] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const answer = input.trim();

    if (!answer || finished) return;

    const updatedAnswers = [...answers, answer];

    const newMessages = [
      ...messages,
      { role: "user", text: answer },
    ];

    const nextIndex = questionIndex + 1;

    if (nextIndex < questions.length) {
      newMessages.push({
        role: "assistant",
        text: questions[nextIndex],
      });

      setQuestionIndex(nextIndex);
    } else {
      localStorage.setItem(
        "leadQualification",
        JSON.stringify({
          name: updatedAnswers[0],
          company: updatedAnswers[1],
          service: updatedAnswers[2],
          budget: updatedAnswers[3],
          timeline: updatedAnswers[4],
          createdAt: new Date().toISOString(),
        })
      );

      newMessages.push({
        role: "assistant",
        text: "Thanks! I have enough information to evaluate your lead.",
      });

      newMessages.push({
        role: "assistant",
        text: "Your qualification result is ready. Visit the Results page to see it.",
      });

      setFinished(true);
    }

    setAnswers(updatedAnswers);
    setMessages(newMessages);
    setInput("");
  }

  return (
    <main style={{ maxWidth: "700px", margin: "40px auto", padding: "20px" }}>
      <h1>AI Lead Qualification Chat</h1>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "20px",
          minHeight: "400px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              marginBottom: "16px",
              textAlign: message.role === "user" ? "right" : "left",
            }}
          >
            <strong>
              {message.role === "user" ? "You" : "AI"}
            </strong>

            <div
              style={{
                display: "inline-block",
                marginTop: "5px",
                padding: "10px 14px",
                borderRadius: "10px",
                background:
                  message.role === "user" ? "#e8f0fe" : "#f3f3f3",
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {!finished ? (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer..."
            style={{
              flex: 1,
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      ) : (
        <a href="/results">View Qualification Results ?</a>
      )}
    </main>
  );
}
