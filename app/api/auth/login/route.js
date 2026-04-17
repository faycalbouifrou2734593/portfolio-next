import sequelize from "@/config/db";
import User from "@/models/User";

export async function POST(req) {
  await sequelize.sync();

  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return Response.json(
      { message: "Email et mot de passe sont obligatoires" },
      { status: 400 }
    );
  }

  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return Response.json(
      { message: "Email ou mot de passe incorrect" },
      { status: 400 }
    );
  }

  return Response.json({
    message: "Connexion réussie",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
}