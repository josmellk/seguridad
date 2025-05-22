async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const res = await fetch('https://secure-api-render.onrender.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  document.getElementById('message').textContent = data.message || 'Error';
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
}
