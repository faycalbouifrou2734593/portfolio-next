import sequelize from "@/config/db";
import Testimonial from "@/models/Testimonial";

export async function GET(req, { params }) {
  await sequelize.sync();

  const { id } = await params;
  const testimonial = await Testimonial.findByPk(id);

  if (!testimonial) {
    return Response.json(
      { message: "Témoignage introuvable" },
      { status: 404 }
    );
  }

  return Response.json(testimonial);
}

export async function PUT(req, { params }) {
  await sequelize.sync();

  const { id } = await params;
  const body = await req.json();
  const { author, message } = body;

  if (!author || !message) {
    return Response.json(
      { message: "Tous les champs sont obligatoires" },
      { status: 400 }
    );
  }

  const testimonial = await Testimonial.findByPk(id);

  if (!testimonial) {
    return Response.json(
      { message: "Témoignage introuvable" },
      { status: 404 }
    );
  }

  testimonial.author = author;
  testimonial.message = message;
  await testimonial.save();

  return Response.json({
    message: "Témoignage modifié avec succès",
    testimonial,
  });
}