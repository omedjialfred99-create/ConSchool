document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Gestion des Onglets (Tabs)
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Retirer la classe active de tous les boutons et contenus
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // Activer l'onglet cliqué
      tab.classList.add("active");
      const targetContent = document.getElementById(tab.dataset.tab);
      targetContent.classList.add("active");
    });
  });

  // 2. Gestion des Accordéons
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const currentItem = header.parentElement;
      
      // Optionnel : Fermer les autres accordéons ouverts pour faire propre
      document.querySelectorAll(".accordion-item").forEach(item => {
        if (item !== currentItem) {
          item.classList.remove("open");
        }
      });

      // Basculer l'état de l'accordéon cliqué
      currentItem.classList.toggle("open");
    });
  });
});