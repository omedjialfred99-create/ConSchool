document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("btn-login");

    loginBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Vérification Admin
        if (email === "admin@conschool.com" && password === "admin123") {
            window.location.href = "admin.html"; // Redirection vers admin.html
        } 
        // Vérification Étudiant
        else if (email === "student@conschool.com" && password === "student123") {
            window.location.href = "student.html"; // Redirection vers student.html
        } 
        // Message d'erreur
        else {
            alert("Email ou mot de passe incorrect.");
        }
    });
});