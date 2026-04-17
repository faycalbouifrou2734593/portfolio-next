async function getProjects() {
  const res = await fetch("http://localhost:3000/api/projects");
  return res.json();
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;   // IMPORTANT
  const projects = await getProjects();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h1>Projet introuvable</h1>;
  }

  return (
    <div className="projects">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p><strong>Technologies :</strong> {project.technologies}</p>
      <p><strong>Détails :</strong> {project.details}</p>
    </div>
  );
}