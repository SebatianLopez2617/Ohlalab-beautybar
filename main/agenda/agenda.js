document.getElementById('form-reserva').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const datos = Object.fromEntries(formData.entries());

  const response = await fetch('/agendar', { // Ajusta la ruta a tu Worker
    method: 'POST',
    body: JSON.stringify(datos),
    headers: { 'Content-Type': 'application/json' }
  });

  const resultado = await response.json();

  if (response.ok) {
    alert("¡Cita confirmada!");
    window.location.href = "perfil.html"; // Redirigir al perfil
  } else {
    // Aquí mostrará: "El correo no está registrado..."
    alert("Error: " + resultado.error);
  }
});