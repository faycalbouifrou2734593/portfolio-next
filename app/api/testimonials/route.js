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