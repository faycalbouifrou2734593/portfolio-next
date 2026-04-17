import sequelize from "@/config/db";
import User from "@/models/User";

export async function POST(req) {
  await sequelize.sync();

  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return Response.json(
      { message: "Tous les champs sont obligatoires" },
      { status: 400 }
    );
  }

  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    return Response.json(
      { message: "Cet email existe déjà" },
      { status: 400 }
    );
  }

  await User.create({ name, email, password });

  return Response.json({
    message: "Inscription réussie",
  });
}