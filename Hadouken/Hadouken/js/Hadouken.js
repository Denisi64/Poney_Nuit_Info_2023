document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    // Vérifier si la touche pressée est "²" (keyCode 178)
    if (event.key === "²") {
      displaySquares();
      displayCommandButton();
    }
  });
});

function openDialog() {
  let userInput = prompt("Écrire du texte :");
  if (userInput !== null) {
    // Faites quelque chose avec le texte saisi, par exemple, l'afficher dans la console
    if (userInput.toLocaleLowerCase() === "il fait chaud") {
      console.log("Code bon");
    }
  }
}

function displaySquares() {
    let imgRebusContainer = document.querySelector(".imgRebus");
  
    // Supprimer les carrés existants s'il y en a
    imgRebusContainer.innerHTML = "";
  
    // Ajouter le chemin des images que vous souhaitez utiliser
    const images = [
      "../img_rebus/iles.jpg",
      "../img_rebus/fee.png",
      "../img_rebus/chaud.jpg",
    ];
  
    // Créer trois éléments div représentant les carrés avec des images
    images.forEach((imageUrl) => {
      let square = document.createElement("div");
      let image = document.createElement("img");
      image.src = imageUrl;
  
      // Ajouter des styles pour régler la taille des images
      image.style.width = "200px";
      image.style.height = "200px";
  
      square.appendChild(image);
      square.classList.add("square"); // Ajouter une classe pour le style CSS
      imgRebusContainer.appendChild(square); // Ajouter le carré à la div imgRebus
    });
  
    // Afficher le conteneur avec les carrés
    document.body.classList.add("overlay-active");
  }
  

function displayCommandButton() {
  let textElements = document.querySelectorAll(".content"); // Sélectionnez les éléments texte concernés
  textElements.forEach((element) => {
    element.classList.add("blurred-text"); // Ajoutez une classe pour le style CSS
  });

  let container = document.getElementById("container");

  // Créer un bouton "Rentrer commande"
  let enterCommandButton = document.createElement("button");
  enterCommandButton.textContent = "Entrer le résultat du rébus";
  enterCommandButton.addEventListener("click", function () {
    openDialog();
  });

  container.appendChild(enterCommandButton);
}
