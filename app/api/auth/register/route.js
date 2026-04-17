export async function POST(req) {
  const body = await req.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return Response.json(
      { message: "Tous les champs sont obligatoires" },
      { status: 400 }
    );
  }

  return Response.json({
    message: "Inscription réussie",
    user: { name, email }
  });
}