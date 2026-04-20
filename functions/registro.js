export async function onRequestPost(context) {
    const { request, env } = context;
    try {
        const { nombre, correo, password } = await request.json();
        await env.DB.prepare(
            "INSERT INTO usuarios (nombre, correo, password) VALUES (?, ?, ?)"
        )
        .bind(nombre, correo, password)
        .run();

        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500, headers: { "Content-Type": "application/json" }
        });
    }
}