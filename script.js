// Récupère le message
const messageDiv = document.getElementById('message');

// Fonction pour afficher le message
document.body.addEventListener('click', () => {
    messageDiv.classList.remove('hidden'); // Affiche le message
    setTimeout(() => {
        messageDiv.classList.add('hidden'); // Cache le message après 2 secondes
    }, 2000); // Durée d'affichage en millisecondes
});
