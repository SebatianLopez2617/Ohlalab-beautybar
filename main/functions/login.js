export async function onRequestPost(context) {
  const { request, env } = context;
  const { correo, password } = await request.json();

  try {
    // Buscamos si existe el usuario con ese correo y contraseña
    const usuario = await env.DB.prepare(
      "SELECT * FROM usuarios WHERE correo = ? AND password = ?"
    )
    .bind(correo, password)
    .first();

    if (usuario) {
      return new Response(JSON.stringify({ success: true, nombre: usuario.nombre }), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ success: false }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}