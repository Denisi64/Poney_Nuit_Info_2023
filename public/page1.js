function move(){

    let button = document.getElementById("hoverzone2");
  
    button.style.right = getRandomNumb()[0].toString() + "vh";
    button.style.bottom = getRandomNumb()[1].toString() + "vh";
  
  
  }
  
  function changeButton(){
  
    console.log("timer 1 done");
  
    let button = document.getElementById("hoverzone2");
    let buttonText = document.getElementById("button2");
  
    buttonText.innerHTML = "C'est chiant ? xD"

    timer2();
  
  }

  function freezeButtons(){
  
    console.log("timer 2 done");
  
    let button = document.getElementById("hoverzone2");
    let buttonText = document.getElementById("button2");
  
    buttonText.innerHTML = "Bon j'arrête, sorry..."
  
    button.setAttribute("onclick", "caught2()");
    button.removeAttribute('onmouseenter');
    button.removeAttribute('onmouseover');
  
  }
  
  function caught(){
  
    divApp.innerHTML = page1_step2();
    timer1();
  
  }
  
  function caught2(){
  
    final();
  
  }
  
  function timer1(){
  
    console.log("timer 1 lauch");
    // Timer pour geler les boutons après 5 secondes
    setTimeout(() => {
      changeButton();
    }, 5000);
  }

  function timer2(){
  
    console.log("timer 2 lauch");
    // Timer pour geler les boutons après 10 secondes
    setTimeout(() => {
      freezeButtons();
    }, 10000);
  }