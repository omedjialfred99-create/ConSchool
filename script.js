document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.querySelector(".btn-login");
    const passwordToggle = document.querySelector(".password-toggle");

    if (passwordToggle) {
        passwordToggle.addEventListener("click", () => {
            const isPassword = passwordInput.type === "password";
            passwordInput.type = isPassword ? "text" : "password";
            const icon = passwordToggle.querySelector("i");
            icon.className = isPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye";
            passwordToggle.setAttribute("aria-label", isPassword ? "Masquer le mot de passe" : "Afficher le mot de passe");
        });
    }

    loginBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "admin@conschool.com" && password === "admin123") {
            window.location.href = "admin.html";
        } 
        else if (email === "student@conschool.com" && password === "student123") {
            window.location.href = "student.html";
        } 
        else {
            alert("Email ou mot de passe incorrect.");
        }
    });
});