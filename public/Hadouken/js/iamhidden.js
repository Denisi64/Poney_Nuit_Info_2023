
// --------------------------------------------------------   Konami code -----------------------------------------------

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
    resumeScroll();
	alert("nouvelle fonctionnalité ! Enfin !");
    rotatePage() ;
    
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



function rotatePage() {
    for (let i = 0; i < 86; i++) {
        
        document.body.style.transition = 'transform 1s ease-in-out';
        document.body.style.transform = 'rotate(360deg)';
        document.body.classList.add('rotate-bg');

    }
}


// Function to trigger the pop animation
function popURL() {
    const urlPop = document.getElementById('urlPop');
    urlPop.classList.add('pop-animation');
    urlPop.style.opacity = '1';

    setTimeout(() => {
        urlPop.classList.remove('pop-animation');
    }, 500);
}


function makePageFancy() {

    // if(!element.classList.contains('jexiste'))
    // {
        const link = document.createElement('a');
        link.textContent = 'Faites le test !';
        link.style.position = 'fixed';
        link.style.bottom = '10%';
        link.style.left = '50%';
        link.style.transform = 'translate(-50%, -50%)';
        link.style.fontSize = '20px';
        link.style.opacity = '0';
        link.style.color = 'white' ;
        link.style.id = 'jexiste';
        link.href = 'https://nosgestesclimat.fr/';

        document.body.appendChild(link);

        fadeIn(link);

        const interval = setInterval(() => {
            link.style.fontSize = `${parseInt(link.style.fontSize) + 2}px`;
        }, 50);

        setTimeout(() => {
            clearInterval(interval);
            document.body.style.transform = 'rotate(0deg)';
            link.style.opacity = '1';
            link.style.cursor = 'pointer';
        
        }, 1000);

    

        function fadeIn(element) {
            var op = 0.1;
            element.style.display = 'block';
            var timer = setInterval(function () {
                if (op >= 1) {
                    clearInterval(timer);
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1 || 0.1;
            }, 20);
        }
    // }
}



window.addEventListener('scroll', function() {
    // Check if user has scrolled to the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        makePageFancy()
        const maSection = document.getElementById('section2');
    
        // Modifier l'opacité de la section
        maSection.style.opacity = '1'; 
    }
});




document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);

    
    stopScroll();
    // Récupérer la section par son ID
    const maSection = document.getElementById('section2');

    // Modifier l'opacité de la section
    maSection.style.opacity = '0'; 



});



// initialisation du buffer clavier
var myCode = new Array();
for(i=0;i<10;i++)
{
	myCode[i]=0;
}



function stopScroll() {
    // Sauvegarde la position actuelle de la page
    const scrollPosition = window.scrollY;

    // Empêche le défilement en fixant la position
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;

    // Scroll to the top of the page
    window.scrollTo(0, 0);
}

function resumeScroll() {
    // Récupère la position sauvegardée lors de l'arrêt du scroll
    const scrollPosition = parseInt(document.body.style.top || '0', 10);

    // Réactive le défilement et rétablit la position précédente
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, Math.abs(scrollPosition)); // Remet la page à sa position précédente
}


let sequence = '';

function checkSequence(event) {
    // Ajoute la touche pressée à la séquence
    sequence += event.key.toLowerCase();

    // Vérifie si la séquence correspond à "climat<>"
    if (sequence.includes('climat<>')) {
        return true;
    }

    // Limite la longueur de la séquence pour éviter de vérifier une séquence trop longue
    if (sequence.length > 10) {
        sequence = '';
    }

    return false;
}

// Écoute les touches du clavier
document.addEventListener('keydown', function(event) {
    if (checkSequence(event)) {
        console.log('Séquence détectée !');
        resumeScroll() ;
        const maSection = document.getElementById('section2');

        // Modifier l'opacité de la section
        maSection.style.opacity = '1'; 
    }
});



