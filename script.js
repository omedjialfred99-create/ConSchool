// script.js
// Wrapped in DOMContentLoaded to ensure elements exist before querying them
document.addEventListener('DOMContentLoaded', () => {
    // Panel toggle (register / login)
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    if (registerBtn && container) {
        registerBtn.addEventListener('click', () => container.classList.add('active'));
    }
    if (loginBtn && container) {
        loginBtn.addEventListener('click', () => container.classList.remove('active'));
    }

    // Generic helper to toggle a password input inside a given container selector
    function setupPasswordToggle(toggleSelector, inputSelector) {
        // support multiple toggles and fallback to finding nearby input
        const toggleEls = document.querySelectorAll(toggleSelector);
        if (!toggleEls || toggleEls.length === 0) return;

        toggleEls.forEach(toggleEl => {
            // Prefer finding the input near the toggle first (handles multiple forms)
            const localContainer = toggleEl.closest('.password-container') || toggleEl.closest('form') || toggleEl.parentElement;
            let inputEl = null;
            if (localContainer) {
                inputEl = localContainer.querySelector('input[type="password"], input[type="text"]');
            }
            // Fallback to a global selector if none found locally
            if (!inputEl && inputSelector) {
                inputEl = document.querySelector(inputSelector);
            }
            if (!inputEl) return;

            toggleEl.addEventListener('click', () => {
                const currentType = inputEl.getAttribute('type');
                if (currentType === 'password') {
                    inputEl.setAttribute('type', 'text');
                    toggleEl.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
                } else {
                    inputEl.setAttribute('type', 'password');
                    toggleEl.innerHTML = '<i class="fa-solid fa-eye"></i>';
                }
            });
        });
    }

    // Setup toggles (adjust selectors to match your HTML)
    setupPasswordToggle('.toggle-password', '.password-container input');
    setupPasswordToggle('.toggle-password-login', '.password-container-login input');
});
  
//logique de connection
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Bloque le rechargement

    // Récupération dynamique basée sur ton HTML actuel
    const emailField = document.querySelector('input[type="email"]');
    const passwordField = document.getElementById('password');

    const identifiant = emailField.value.trim().toLowerCase();
    const password = passwordField.value;

    // Validation rapide
    if (identifiant === "" || password === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Routage de la maquette ConSchool
    if (identifiant.includes('admin')) {
        window.location.href = "index.html";
    } 
    else if (identifiant.includes('@gmail.com') || identifiant.includes('@')) {
        window.location.href = "student.html";
    } 
    else {
        alert("Identifiants non reconnus pour la démo.");
    }
});