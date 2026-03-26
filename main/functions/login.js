export async function onRequestPost(context) {
    const { request, env } = context;
    try {
        const { correo, password } = await request.json();
        const usuario = await env.DB.prepare(
            "SELECT nombre FROM usuarios WHERE correo = ? AND password = ?"
        )
        .bind(correo, password)
        .first();

        if (usuario) {
            return new Response(JSON.stringify({ success: true, nombre: usuario.nombre }), {
                headers: { "Content-Type": "application/json" }
            });
        } else {
            return new Response(JSON.stringify({ success: false }), {
                status: 401, headers: { "Content-Type": "application/json" }
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500, headers: { "Content-Type": "application/json" }
        });
    }
}