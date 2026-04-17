import sequelize from "@/config/db";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  await sequelize.sync();

  const count = await Testimonial.count();

  if (count === 0) {
    await Testimonial.bulkCreate([
      {
        author: "Jean Dupont",
        message: "Excellent développeur, travail sérieux.",
      },
      {
        author: "Marie Tremblay",
        message: "Très bon projet, interface moderne.",
      },
    ]);
  }

  const testimonials = await Testimonial.findAll();
  return Response.json(testimonials);
}

export async function POST(req) {
  await sequelize.sync();

  const body = await req.json();
  const { author, message } = body;

  if (!author || !message) {
    return Response.json(
      { message: "Tous les champs sont obligatoires" },
      { status: 400 }
    );
  }

  const testimonial = await Testimonial.create({ author, message });

  return Response.json({
    message: "Témoignage ajouté avec succès",
    testimonial,
  });
}