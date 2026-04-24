document.getElementById('form-reserva').addEventListener('submit', async (e) => {
    e.preventDefault();

    const servicioSeleccionado = document.querySelector('input[name="servicio"]:checked');

    if (!servicioSeleccionado) {
        alert('Por favor selecciona un servicio.');
        return;
    }

    const datos = {
        nombre:   document.getElementById('nombre').value,
        correo:   document.getElementById('correo').value,
        servicio: servicioSeleccionado.value,
        fecha:    document.getElementById('fecha').value,
        hora:     document.getElementById('hora').value,
        notas:    document.getElementById('notas').value
    };

    const btn = document.querySelector('.btn-primary');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    try {
        const res = await fetch('/agendar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });

        const result = await res.json();

        if (result.success) {
            alert('✨ ¡Cita confirmada! Revisa tu correo.');
            document.getElementById('form-reserva').reset();
        } else {
            alert('Error al confirmar la cita: ' + (result.error || 'Intenta de nuevo.'));
        }
    } catch (err) {
        alert('Error de conexión. Intenta más tarde.');
    } finally {
        btn.textContent = 'Confirmar Cita';
        btn.disabled = false;
    }
});