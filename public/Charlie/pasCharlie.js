function getRandomNumb(){

    const pos = 1;
    const neg = -1;

    const sign = Math.floor(Math.random() * (pos - neg + 1)) + neg;

    const containerWidth = 160;
    const containerHeight = 80;
    
    const randomLeft = Math.floor(Math.random() * containerWidth);
    const randomTop = Math.floor(Math.random() * containerHeight);

    randomLeft > containerWidth ? 0 : sign * randomLeft;
    randomTop > containerWidth ? 0 : sign * randomTop;

    return [randomLeft, randomTop];
}

function homePage() {
  const homePage = `
    <h1>Bienvenue dans : "Où est Charlie ?"</h1>
    <p>(Papier & crayon conseillé ! SON OBLIGATOIRE)</p>
    
    <div id="boxButtonHome">
        <button id="id-buttonHome" class="class-buttonOrange" type="buttonHome" onclick="page1_step1()">Commencer</button>
    </div>
    `;

  return homePage;
}

function page1_step1() {

    const page1_step1 = `
    <h1>Trouve Charlie</h1>
    <div id="hoverzone1" class="hoverzone" onclick="caught()">
        <button type="button" class="class-button" id="button1">Obtenir un indice</button>
    </div>
    `;

    const divApp = document.getElementById("App");

    divApp.innerHTML = page1_step1;
}
function page1_step2() {
  const page1_step2 = `
    <h1>Continue :)</h1>
    <div id="hoverzone2" class="hoverzone" onmouseover="move()" onmouseenter="move()">
        <button id="button2" type="button" class="class-button">Obtenir un autre indice</button>
    </div>
    `;

  return page1_step2;
}

function pageCharlie() {
  const pageCharlie = `
    <div id="boxCharlie">
        <div><img src="./media/img/charlie.png"/></div>
        <div><button id="buttonQuit" type="button" class="class-buttonBlue" onclick="reset()">Quitter</button></div>
    </div>
    `;

  return pageCharlie;
}

const divApp = document.getElementById("App");
divApp.innerHTML = homePage();

function move() {
  let button = document.getElementById("hoverzone2");

  button.style.right = getRandomNumb()[0].toString() + "vh";
  button.style.bottom = getRandomNumb()[1].toString() + "vh";
}

function changeButton() {
  console.log("timer 1 done");

  let button = document.getElementById("hoverzone2");
  let buttonText = document.getElementById("button2");

  buttonText.innerHTML = "C'est chiant ? xD";

  timer2();
}

function freezeButtons() {
  console.log("timer 2 done");

  let button = document.getElementById("hoverzone2");
  let buttonText = document.getElementById("button2");

  buttonText.innerHTML = "Bon j'arrête, sorry...";

  button.setAttribute("onclick", "caught2()");
  button.removeAttribute("onmouseenter");
  button.removeAttribute("onmouseover");
}

function caught() {
  divApp.innerHTML = page1_step2();
  timer1();
}

function timer1() {
  console.log("timer 1 lauch");
  // Timer pour geler les boutons après 5 secondes
  setTimeout(() => {
    changeButton();
  }, 5000);
}

function timer2() {
  console.log("timer 2 lauch");
  // Timer pour geler les boutons après 10 secondes
  setTimeout(() => {
    freezeButtons();
  }, 10000);
}

function final() {
  const divApp = document.getElementById("App");
  divApp.innerHTML = pageCharlie();
}

function reset() {
  const divApp = document.getElementById("App");
  divApp.innerHTML = homePage();
}

let userInput = "";
const targetMorse = "CAPGEMINO";

const debug = true;
let audio = new Audio("./media/morse.unknown.wav");

// Code Morse
/// Lecture son
function playWav() {
  let i = 0;
  audio.play();
  audio.volume = 0.8;
  audio.onended = async () => {
    let letter;
    if (i === 0) {
      letter = "-.-.\t\t";
      ++i;
    } else if (i === 1) {
      letter = ".-\t\t";
      ++i;
    } else if (i === 2) {
      letter = ".--.\t\t";
      ++i;
    } else if (i === 3) {
      letter = "--.\t\t";
      ++i;
    } else if (i === 4) {
      letter = ".\t\t";
      ++i;
    } else if (i === 5) {
      letter = "--\t\t";
      ++i;
    } else if (i === 6) {
      letter = "..\t\t";
      ++i;
    } else if (i === 7) {
      letter = "-.\t\t";
      ++i;
    } else if (i === 8) {
      letter = "---\t\t"
    } else {
      letter = "";
    }
    if (debug) console.log(i);
    document.getElementById("spoiler").textContent += letter;
    document.getElementById("spoiler").style.textAlign = "center";
    document.getElementById("spoiler").style.fontSize = "x-large";
    if (debug) console.log(letter);
    audio.play();
  };
}

window.addEventListener("keydown", (event) => {
  // get char
  const morseChar = event.key.toUpperCase();
  if (debug) console.log(morseChar + "\n");

  // Check if match with sequence
  if (targetMorse.startsWith(userInput + morseChar)) {
    userInput += morseChar;
  } else {
    // Reset user input if there is a mistake
    userInput = morseChar;
  }

  console.log(userInput);

  // Check if the user input matches the morse code for "targetmorse"
  if (userInput === targetMorse) {
    if (debug) console.log("DETECTE !");
    userInput = ""; // Reset user input for the next detection
    audio.pause();
    final();
  }
});

function btnMorse() {
  document.getElementById("btn").innerHTML =
    "La séquence se relancera toute seule";
    document.getElementById("btn").style.backgroundColor = "var(--color-blue-button-home)";
    document.getElementById("btn").style.color = "white";
    playWav();
}

const htmlMorse = `
<H1 align="center" style="margin: 1em 0;">Tapez les lettres que vous entendez</H1>
<div style="width: 100%; display: flex; justify-content: center;">
    <button id="btn" class="class-buttonBlue" onclick="btnMorse()"> LANCER LA SEQUENCE </button>
</div>
<p id="spoiler" style="letter-spacing: 2px; text-align:center"> Réponse : </p>
<br/><br/>
<div id="tableCSS">
<table align="center">
    <tr>
        <th>A</th>
        <th>B</th>
        <th>C</th>
        <th>D</th>
        <th>E</th>
        <th>F</th>
    </tr>
    <tr>
        <td>.-</td>
        <td>-...</td>
        <td>-.-.</td>
        <td>-..</td>
        <td>.</td>
        <td>..-.</td>
    </tr>
    <tr>
        <th>G</th>
        <th>H</th>
        <th>I</th>
        <th>J</th>
        <th>K</th>
        <th>L</th>
    </tr>
    <tr>
        <td>--.</td>
        <td>....</td>
        <td>..</td>
        <td>.---</td>
        <td>-.-</td>
        <td>.-..</td>
    </tr>
    <tr>
        <th>M</th>
        <th>N</th>
        <th>O</th>
        <th>P</th>
        <th>Q</th>
        <th>R</th>
    </tr>
    <tr>
        <td>--</td>
        <td>-.</td>
        <td>---</td>
        <td>.--.</td>
        <td>--.-</td>
        <td>.-.</td>
    </tr>
    <tr>
        <th>S</th>
        <th>T</th>
        <th>U</th>
        <th>V</th>
        <th>W</th>
        <th>X</th>
    </tr>
    <tr>
        <td>...</td>
        <td>-</td>
        <td>..-</td>
        <td>...-</td>
        <td>.--</td>
        <td>-..-</td>
    </tr>
    <tr>
        <th>Y</th>
        <th>Z</th>
    </tr>
    <tr>
        <td>-.--</td>
        <td>--..</td>
    </tr>
</table>
</div>
`;

function caught2() {
    const divApp = document.getElementById("App");
    divApp.innerHTML = htmlMorse;
}

