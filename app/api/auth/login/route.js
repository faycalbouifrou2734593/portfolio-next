export async function POST(req) {
  const body = await req.json();

  const { email, password } = body;

  if (!email || !password) {
    return Response.json(
      { message: "Email et mot de passe sont obligatoires" },
      { status: 400 }
    );
  }

  return Response.json({
    message: "Connexion réussie",
    user: { email }
  });
}