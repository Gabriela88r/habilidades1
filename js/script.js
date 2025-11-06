// URL base del backend
const API = 'http://localhost:5000/api/auth';

// REGISTRO
const formRegistro = document.getElementById('formRegistro');
if (formRegistro) {
    formRegistro.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const res = await fetch(`${API}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, email, password })
        });
        const data = await res.json();

        alert(data.msg); // Muestra mensaje del backend

        if (res.ok) {
            // 🔁 Redirige automáticamente al login
            window.location.href = './html/login.html';
        }
    });
}

// LOGIN
const formLogin = document.getElementById('formLogin');
if (formLogin) {
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const res = await fetch(`${API}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        alert(data.msg);

        // 🔁 Redirige a la página principal si el login fue exitoso
        if (res.ok) {
            window.location.href = '/html/principal.html';
        }
    });
}
