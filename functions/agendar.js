export async function onRequestPost(context) {
  const { request, env } = context;
  const data = await request.json();

  try {
    // Intentamos insertar la cita
    await env.DB.prepare(
      "INSERT INTO citas (nombre, telefono, servicio, fecha, hora, comentarios, usuario_email) VALUES (?, ?, ?, ?, ?, ?, ?)"
    )
    .bind(data.nombre, data.telefono, data.servicio, data.fecha, data.hora, data.comentarios, data.usuario_email)
    .run();

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    // Si el error es porque ya existe la fecha/hora
    if (e.message.includes("UNIQUE constraint failed")) {
      return new Response(JSON.stringify({ error: "Lo sentimos, este horario ya está reservado." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}