let userInput = '';
const targetMorse = 'CAPGEMINI'

const debug = true;
let audio = new Audio('./media/morse.unknown.wav');

// Code Morse
/// Lecture son
function playWav(){
    let i = 0;
    audio.play();
    audio.volume = 0.8
    audio.onended = async () => {
        let letter;
        if (i === 0) {
            letter = '-.-.\t';
            ++i;
        } else if (i === 1) {
            letter = '.-\t';
            ++i;
        } else if (i === 2) {
            letter = '.--.\t';
            ++i;
        } else if (i === 3) {
            letter = '--.\t';
            ++i;
        } else if (i === 4) {
            letter = '.\t'
            ++i;
        } else if (i === 5) {
            letter = '--\t';
            ++i;
        } else if (i === 6 || i === 8) {
            letter = '..\t';
            ++i;
        } else if (i === 7) {
            letter = '-.\t'
            ++i;
        } else {letter = ''}
        if(debug) console.log(i);
        document.getElementById('spoiler').textContent += letter;
        document.getElementById('spoiler').style.textAlign = 'center';
        document.getElementById('spoiler').style.fontSize = 'x-large'
        if (debug) console.log(letter);
        await new Promise(r => setTimeout(r, 3000));
        audio.play();
    }
}



window.addEventListener('keydown', (event) => {
    // get char
    const morseChar  = event.key.toUpperCase();
    if(debug) console.log(morseChar + "\n");

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
        if(debug) console.log('DETECTE !');
        userInput = ''; // Reset user input for the next detection
        audio.pause();
    }
});

function btnMorse(){
    document.getElementById("btn").innerHTML = "<p align='center'>La séquence coupe pendant 3s, soyez patient</p>"
    playWav();
}

document.body.innerHTML = '';

const htmlMorse = `
<H1 align="center">Tapez les lettres que vous entendez</H1>
<H2 align="center"> (Papier crayon conseillé) </H2>
    <btn id="btn" onclick="btnMorse();"> LANCER LA SEQUENCE </btn></div>
    <p id="spoiler"></p>
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
`

document.body.innerHTML = htmlMorse