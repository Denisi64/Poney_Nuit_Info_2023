function homePage(){

    const homePage = 
    `
    <h1>Bienvenue dans : "Où est Charlie ?"</h1>
    <p>(Papier & crayon conseillé !)
    <div id="boxButtonHome">
        <button id="id-buttonHome" class="class-buttonOrange" type="buttonHome" onclick="lauchGame()">Commencer</button>
    </div>
    `;

    return homePage;
}

function page1_step1(){

    const page1_step1 = 
    `
    <h1>Trouve Charlie</h1>
    <div id="hoverzone1" class="hoverzone" onclick="caught()">
        <button type="button" class="class-button" id="button1">Obtenir un indice</button>
    </div>
    `;

    return page1_step1;
}
function page1_step2(){

    const page1_step2 = 
    `
    <h1>Continue :)</h1>
    <div id="hoverzone2" class="hoverzone" onmouseover="move()" onmouseenter="move()">
        <button id="button2" type="button" class="class-button">Obtenir un autre indice</button>
    </div>
    `;

    return page1_step2;
}

function page2_step1(){

    const page2_step1 = 
    `
    <button class="class-button deleteButton" type="button" onclick="deleteBut()">Je suis le vrai button</button>
    <button class="class-button deleteButton" type="button" onclick="deleteBut()">Je suis le vrai button</button>
    `;

    return page2_step1;
}

function pageCharlie(){

    const pageCharlie = 
    `
    <div id="boxCharlie">
        <div><img src="./src/img/charlie.png"/></div>
        <div><button id="buttonQuit" type="button" class="class-buttonBlue" onclick="reset()">Quitter</button></div>
    </div>
    `;

    return pageCharlie;
}