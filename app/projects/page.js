import Link from "next/link";

async function getProjects() {
  const res = await fetch("http://localhost:3000/api/projects");
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="projects">
      <h1>Mes Projets</h1>

      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p><strong>Technologies :</strong> {project.technologies}</p>

          <Link href={`/projects/${project.id}`} className="details-link">
            Voir détails
          </Link>
        </div>
      ))}
    </div>
  );
}