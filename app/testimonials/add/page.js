"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AddTestimonialPage() {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/testimonials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author, message }),
    });

    const data = await res.json();

    setFeedback(data.message);
    setIsError(!res.ok);

    if (res.ok) {
      setAuthor("");
      setMessage("");
    }
  }

  return (
    <ProtectedRoute>
      <div className="form-container">
        <h1>Ajouter un témoignage</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Auteur"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
          />

          <button type="submit">Ajouter</button>
        </form>

        {feedback && (
          <p className={isError ? "error" : "success"}>
            {feedback}
          </p>
        )}
      </div>
    </ProtectedRoute>
  );
}