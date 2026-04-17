"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProjectDetailsPage() {
  const params = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find((p) => p.id === Number(params.id));
        setProject(foundProject || null);
      });
  }, [params.id]);

  if (!project) {
    return (
      <ProtectedRoute>
        <h1 style={{ padding: "20px" }}>Projet introuvable</h1>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="projects">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>
          <strong>Technologies :</strong> {project.technologies}
        </p>
        <p>
          <strong>Détails :</strong> {project.details}
        </p>
      </div>
    </ProtectedRoute>
  );
}