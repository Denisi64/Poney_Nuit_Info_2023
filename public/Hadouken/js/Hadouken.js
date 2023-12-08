

// --------------------------------------------------------   Konami code -----------------------------------------------

// initialisation du buffer clavier
var myCode = new Array();
for(i=0;i<10;i++)
{
	myCode[i]=0;
}

// initialisation du konami code (à l'envers cause empilage)
var kCode = new Array(65,66,39,37,39,37,40,40,38,38);

// empiler la dernière touche saisie
function stackArray(array, value)
{
	for(i=9;i>0;i--)
	{
		array[i] = array[i-1];
	}
	array[0] = value;
}

// tester les différences entre le code et la saisie
function testArray(a,b)
{
	for(i=0;i<a.length;i++)
	{
		if (a[i]!=b[i])
			return false;
	}
	return true;
}

// action!
function konami()
{
  bringToFront("containers") ;
  displaySquares();
  displayCommandButton();    
    
}

// interception de saisie
$(document).keyup(function(event) {
	stackArray(myCode,event.keyCode);
	
	// si c'est la dernière lettre "a" du code
	if (event.keyCode==65 && testArray(myCode,kCode))
	{
		konami();
	}
});


//------------------------------------------------------------------------------------------------------------------------------------------------

function bringToFront(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    // Définir le z-index pour mettre l'élément devant les autres
    element.style.zIndex = "9999";
  } else {
    console.error("L'élément avec l'ID fourni est introuvable.");
  }
}

function openDialog() {
  let userInput = prompt("Écrire du texte :");
  if (userInput !== null) {
    // Faites quelque chose avec le texte saisi, par exemple, l'afficher dans la console
    if (userInput.toLocaleLowerCase() === "il fait chaud") {
      console.log("Code bon");
      // Rediriger vers iamhidden.html
      window.location.href = "../../Hadouken/html/iamhidden.html";
    }
  }
}

function displaySquares() {
    let imgRebusContainer = document.querySelector(".imgRebus");
  
    // Supprimer les carrés existants s'il y en a
    imgRebusContainer.innerHTML = "";
  
    // Ajouter le chemin des images que vous souhaitez utiliser
    const images = [
      "../../Hadouken/img/iles.jpg",
      "../../Hadouken/img/fee.png",
      "../../Hadouken/img/chaud.jpg",
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

  let container = document.getElementById("containers");

  // Créer un bouton "Rentrer commande"
  let enterCommandButton = document.createElement("button");
  enterCommandButton.className = "butt" ;
  enterCommandButton.textContent = "Entrer le résultat du rébus";
  enterCommandButton.addEventListener("click", function () {
    openDialog();
  });

  container.appendChild(enterCommandButton);
}

