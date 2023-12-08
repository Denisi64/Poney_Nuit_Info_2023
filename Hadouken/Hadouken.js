// Hadouken.js

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        // Vérifier si la touche pressée est "²" (keyCode 178)
        if (event.key === '²') {
            displaySquares();
            openDialog();
        }
    });
});

function openDialog() {
    var userInput = prompt("Écrire du texte :");
    if (userInput !== null) {
        // Faites quelque chose avec le texte saisi, par exemple, l'afficher dans la console
        if (userInput === "bite") {
            console.log("Code bon");
        }
    }
}

function displaySquares() {
    // Créer trois éléments div représentant les carrés
    for (let i = 1; i <= 3; i++) {
        var square = document.createElement('div');
        square.textContent = i;
        square.classList.add('square'); // Ajouter une classe pour le style CSS
        document.body.appendChild(square); // Ajouter le carré à la page
    }
}
