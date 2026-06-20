// On attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
    
    // Sélection des éléments
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("btn-login");

    // Fonction de connexion
    loginBtn.addEventListener("click", () => {
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Logique de redirection selon l'email
        if (emailValue === "admin@ecole.com") {
            // Redirection vers le tableau de bord admin
            window.location.href = "admin.html";
        } 
        else if (emailValue === "etudiant@ecole.com") {
            // Redirection vers le tableau de bord étudiant
            window.location.href = "student.html";
        } 
        else {
            alert("Identifiants incorrects ou email non reconnu.");
        }
    });
});