// Esperamos a que todo el HTML cargue para evitar el error de "null"
document.addEventListener('DOMContentLoaded', () => {
    
    const formulario = document.getElementById('form-reserva');

    // Verificamos si el formulario realmente existe antes de usarlo
    if (formulario) {
        formulario.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const datos = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('/agendar', {
                    method: 'POST',
                    body: JSON.stringify(datos),
                    headers: { 'Content-Type': 'application/json' }
                });

                const resultado = await response.json();

                if (response.ok) {
                    alert("¡Cita confirmada!");
                    window.location.href = "../perfil.html";
                } else {
                    alert("Error: " + (resultado.error || "No se pudo agendar"));
                }
            } catch (error) {
                console.error("Error en la petición:", error);
                alert("Hubo un problema con la conexión.");
            }
        });
    } else {
        console.error("No se encontró el formulario con id='form-reserva'");
    }
});