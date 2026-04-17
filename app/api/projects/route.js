import sequelize from "@/config/db";
import Project from "@/models/Project";

export async function GET() {
  await sequelize.sync();

  const count = await Project.count();

  if (count === 0) {
    await Project.bulkCreate([
      {
        title: "Projet Covoiturage",
        description: "Application web de covoiturage",
        technologies: "ASP.NET, React",
        details:
          "Projet permettant aux utilisateurs de publier des trajets, réserver des places et gérer les réservations.",
      },
      {
        title: "Portfolio Next.js",
        description: "Site portfolio moderne",
        technologies: "Next.js, Redux",
        details:
          "Portfolio personnel développé avec Next.js pour présenter les projets, compétences et témoignages.",
      },
    ]);
  }

  const projects = await Project.findAll();

  return Response.json(projects);
}