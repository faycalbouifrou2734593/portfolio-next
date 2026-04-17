"use client";
import { useEffect, useState } from "react";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  return (
    <div className="home">
      <h1>Témoignages</h1>

      {testimonials.map(t => (
        <div key={t.id} className="card">
          <h3>{t.author}</h3>
          <p>{t.message}</p>
        </div>
      ))}
    </div>
  );
}