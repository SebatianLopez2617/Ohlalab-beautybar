export async function onRequestPost(context) {
  const { request, env } = context;
  const data = await request.json();
  const correoCliente = data.correo;

  try {
    // 1. Verificamos si el correo existe en la tabla de usuarios
    const usuarioExistente = await env.DB.prepare(
      "SELECT id FROM usuarios WHERE correo = ?"
    ).bind(correoCliente).first();

    // 2. Si no existe, bloqueamos la reserva
    if (!usuarioExistente) {
      return new Response(
        JSON.stringify({ error: "El correo no está registrado. Por favor, crea una cuenta primero." }), 
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3. Si existe, procedemos a guardar la cita
    await env.DB.prepare(
      "INSERT INTO citas (nombre, correo, servicio, fecha, hora, notas) VALUES (?, ?, ?, ?, ?, ?)"
    ).bind(data.nombre, data.correo, data.servicio, data.fecha, data.hora, data.notas).run();

    return new Response(
      JSON.stringify({ success: "Cita agendada correctamente" }), 
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}