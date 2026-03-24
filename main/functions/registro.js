export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    const data = await request.json();

    // Insertar en la tabla que creamos antes
    await env.DB.prepare(
      "INSERT INTO usuarios (nombre, correo, password) VALUES (?, ?, ?)"
    )
    .bind(data.nombre, data.correo, data.password)
    .run();

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}