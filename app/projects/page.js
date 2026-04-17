"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <ProtectedRoute>
      <div className="projects">
        <h1>Mes Projets</h1>

        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>
              <strong>Technologies :</strong> {project.technologies}
            </p>

            <Link href={`/projects/${project.id}`} className="details-link">
              Voir détails
            </Link>
          </div>
        ))}
      </div>
    </ProtectedRoute>
  );
}