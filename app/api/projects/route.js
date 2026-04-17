export async function GET() {
  const projects = [
    {
      id: 1,
      title: "Projet Covoiturage",
      description: "Application web de covoiturage",
      technologies: "ASP.NET, React",
      details:
        "Projet permettant aux utilisateurs de publier des trajets, réserver des places et gérer les réservations."
    },
    {
      id: 2,
      title: "Portfolio Next.js",
      description: "Site portfolio moderne",
      technologies: "Next.js, Redux",
      details:
        "Portfolio personnel développé avec Next.js pour présenter les projets, compétences et témoignages."
    }
  ];

  return Response.json(projects);
}