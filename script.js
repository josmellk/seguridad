document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const res = await fetch('https://secure-api-render.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Login exitoso: ' + data.message);
      } else {
        alert('❌ Usuario o contraseña incorrectos: ' + data.message);
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('🚫 No se pudo conectar con el servidor.');
    }
  });
});
