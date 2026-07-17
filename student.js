const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar'); // Ajuste la classe si elle s'appelle autrement

    menuToggle.addEventListener('click', (e) => {
        sidebar.classList.toggle('active');
        e.stopPropagation(); // Évite que le clic se propage
    });

    // Optionnel : Fermer le menu si on clique n'importe où en dehors de la sidebar
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });