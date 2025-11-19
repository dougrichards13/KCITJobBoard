'use client';

import React, { useState } from "react";

export default function FAQPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "";
      const res = await fetch(`${apiBase}/faq/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      const hits = data?.hits || [];
      if (hits.length === 0) {
        setAnswer(null);
        setError("No matching answer found.");
      } else {
        setAnswer(hits[0].answer);
      }
    } catch (err: unknown) {
      setError("Error fetching answer. " + (err instanceof Error ? err.message : "Unknown error"));
      setAnswer(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="main-section">
        <h1>AI-Powered FAQ Search</h1>
        <form onSubmit={handleSubmit} className="faq-form">
          <label htmlFor="faq-question">Ask a question:</label>
          <input
            type="text"
            id="faq-question"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            required
            placeholder="e.g. What is CFAFS? How do I join?"
            className="faq-input"
            aria-label="Ask your question"
          />
          <button
            type="submit"
            className="faq-btn"
            disabled={loading || question.length < 3}
            aria-disabled={loading || question.length < 3}
          >
            {loading ? "Searching..." : "Ask"}
          </button>
        </form>
        {!answer && !error && (
          <div style={{ marginTop: '1.2rem', color: '#888', fontSize: '1.03rem' }}>
            Enter your question above to get an answer from our AI-powered knowledge base.
          </div>
        )}
        {error && (
          <div style={{ marginTop: '1rem', fontSize: '1.03rem', color: 'crimson', background: '#fff8f8', border: '1px solid #ebbdbd', borderRadius: 5, padding: '0.7em 1em' }} role="alert">
            <strong>Sorry!</strong> {error} <span aria-hidden="true" style={{fontWeight:700,marginLeft:3}}>&#9888;</span>
          </div>
        )}
        {answer && (
          <div className="faq-answer" tabIndex={0} aria-live="polite">
            <h2>Answer</h2>
            <p>{answer}</p>
          </div>
        )}
      </section>
    </main>
  );
}
