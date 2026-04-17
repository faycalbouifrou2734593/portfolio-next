"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <ProtectedRoute>
      <div className="home">
        <h1>Témoignages</h1>

        <Link href="/testimonials/add" className="details-link">
          Ajouter un témoignage
        </Link>

        {testimonials.map((t) => (
          <div key={t.id} className="card">
            <h3>{t.author}</h3>
            <p>{t.message}</p>

            <Link
              href={`/testimonials/edit/${t.id}`}
              className="details-link"
            >
              Modifier
            </Link>
          </div>
        ))}
      </div>
    </ProtectedRoute>
  );
}