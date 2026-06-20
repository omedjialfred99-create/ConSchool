document.addEventListener("DOMContentLoaded", () => {
    // 1. On récupère les éléments
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.querySelector(".btn-login"); // Utilisation de ta classe

    // 2. On écoute le clic
    loginBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le rechargement

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 3. Logique de redirection
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