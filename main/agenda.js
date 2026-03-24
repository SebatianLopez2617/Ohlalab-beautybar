document.addEventListener('DOMContentLoaded', () => {
   
    const usuarioActivo = JSON.parse(localStorage.getItem('usuarioLogueado'));

    if (!usuarioActivo) {
        alert("Debes iniciar sesión para agendar una cita.");
        window.location.href = 'inicio_de_secion.html'; // Ajusta el nombre si es necesario
        return;
    }


    document.getElementById('nombre').value = usuarioActivo.nombre || "";

    const form = document.getElementById('form-agenda');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const datosCita = {
            nombre: document.getElementById('nombre').value,
            telefono: document.getElementById('telefono').value,
            servicio: document.getElementById('servicio').value,
            fecha: document.getElementById('fecha').value,
            hora: document.getElementById('hora').value,
            comentarios: document.getElementById('comentarios').value,
            usuario_email: usuarioActivo.correo // Para saber de quién es la cita
        };

        try {
            const res = await fetch('/agendar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosCita)
            });

            const result = await res.json();

            if (result.success) {
                alert("¡Cita agendada con éxito! Te esperamos. ✨");
                form.reset();

            } else {
                alert("Error: " + result.error);
            }
        } catch (error) {
            alert("Hubo un problema al conectar con el servidor.");
        }
    });
});