"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function EditTestimonialPage() {
  const params = useParams();
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`/api/testimonials/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data.author || "");
        setMessage(data.message || "");
      });
  }, [params.id]);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(`/api/testimonials/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author, message }),
    });

    const data = await res.json();

    setFeedback(data.message);
    setIsError(!res.ok);
  }

  return (
    <ProtectedRoute>
      <div className="form-container">
        <h1>Modifier un témoignage</h1>

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

          <button type="submit">Modifier</button>
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