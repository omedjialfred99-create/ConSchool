// Date du jour
document.getElementById('currentDate').innerText = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

// Mock data structurée
const defaultStudents = [
    { id: 1, name: "Jean Réné Nziminzimi", class: "Terminales A", deadline: "05 Juin 2026", amount: "150", status: "unpaid" },
    { id: 2, name: "Merseigne etina", class: "Première C", deadline: "12 Juin 2026", amount: "0", status: "paid" },
    { id: 3, name: "Sango osombo samuel", class: "Seconde B", deadline: "15 Juin 2026", amount: "75", status: "partial" },
    { id: 4, name: "Berly bakaya", class: "3ème", deadline: "20 Juin 2026", amount: "200", status: "unpaid" },
    { id: 5, name: "Okende prosper", class: "Terminales A", deadline: "10 Juin 2026", amount: "0", status: "paid" },
    { id: 6, name: "Kanku osombo carine", class: "2ème commercial", deadline: "10 juin 2026", amount: "0", statut: "paid" }
];

let students = JSON.parse(localStorage.getItem('conschool_data')) || defaultStudents;

// RENDU DU TABLEAU FILTRÉ PAR CLASSE
function renderTable() {
    const tbody = document.getElementById('studentTableBody');
    const activeClass = document.getElementById('classFilter').value; // Récupère la classe choisie
    
    tbody.innerHTML = "";

    // Filtrer pour ne garder que les élèves de la classe sélectionnée
    const filteredStudents = students.filter(student => student.class === activeClass);

    if (filteredStudents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-light);">Aucun élève enregistré dans cette classe.</td></tr>`;
    } else {
        filteredStudents.forEach(student => {
            let badgeClass = student.status;
            let badgeText = student.status === 'paid' ? 'Payé' : student.status === 'unpaid' ? 'En retard' : 'Partiel';
            
            //monaie et paiements//
            let row = `
                <tr>
                    <td><strong>${student.name}</strong></td>
                    <td>${student.deadline}</td>
                    <td>${student.amount} CDF</td>
                    <td><span class="badge ${badgeClass}">${badgeText}</span></td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    }
    
    // Sauvegarde pour le pont avec l'espace Student
    localStorage.setItem('conschool_data', JSON.stringify(students));
}

// ÉCOUTER LE CHANGEMENT DE CLASSE POUR METTRE À JOUR LE TABLEAU
document.getElementById('classFilter').addEventListener('change', renderTable);

// FORMULAIRE D'AJOUT ET CLASSEMENT AUTOMATIQUE
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('studentName').value;
    const targetClass = document.getElementById('studentClass').value;
    const amount = document.getElementById('paymentAmount').value;
    const status = document.getElementById('paymentStatus').value;

    const deadlineText = status === 'paid' ? '-' : '28 Juin 2026';

    const existingStudentIndex = students.findIndex(s => s.name.toLowerCase() === name.toLowerCase() && s.class === targetClass);

    if (existingStudentIndex > -1) {
        students[existingStudentIndex].status = status;
        students[existingStudentIndex].amount = status === 'paid' ? '0' : amount;
    } else {
        students.push({
            id: Date.now(),
            name: name,
            class: targetClass,
            deadline: deadlineText,
            amount: status === 'paid' ? '0' : amount,
            status: status
        });
    }

    // Si on ajoute un élève dans une autre classe, on bascule automatiquement le filtre dessus pour voir l'ajout
    document.getElementById('classFilter').value = targetClass;

    renderTable();
    document.getElementById('paymentForm').reset();
});

// BARRE DE RECHERCHE (Filtre au sein de la classe affichée)
document.getElementById('searchStudent').addEventListener('input', function(e) {
    const filter = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#studentTableBody tr');

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        // Évite de cacher le message "Aucun élève"
        if(row.cells.length > 1) {
            row.style.display = text.includes(filter) ? '' : 'none';
        }
    });
});

// Lancement initial
renderTable();