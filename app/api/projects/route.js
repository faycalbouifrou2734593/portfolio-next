export async function GET() {
  const projects = [
    {
      id: 1,
      title: "Projet Covoiturage",
      description: "Application web de covoiturage",
      technologies: "ASP.NET, React"
    },
    {
      id: 2,
      title: "Portfolio Next.js",
      description: "Site portfolio moderne",
      technologies: "Next.js, Redux"
    }
  ];

  return Response.json(projects);
}