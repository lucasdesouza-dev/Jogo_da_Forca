function loadHome() {
    console.log("loadHome");
    var inputsErrados = []; 
    var inputsCertos = [];
    
    let sectionHome = document.getElementById("sec-home");
    sectionHome.classList.remove('invisivel');
    sectionHome.classList.add('visivel');

    let sectionGame = document.getElementById("sec-game");
    sectionGame.classList.remove('visivel');
    sectionGame.classList.add('invisivel');

    let sectionNewword = document.getElementById("sec-newword");
    sectionNewword.classList.remove('visivel');
    sectionNewword.classList.add('invisivel');
}

function loadGame() {
    console.log("loadGame");

    let sectionGame = document.getElementById("sec-game");
    sectionGame.classList.remove('invisivel');
    sectionGame.classList.add('visivel');

    let sectionHome = document.getElementById("sec-home");
    sectionHome.classList.remove('visivel');
    sectionHome.classList.add('invisivel');

    let sectionNewword = document.getElementById("sec-newword");
    sectionNewword.classList.remove('visivel');
    sectionNewword.classList.add('invisivel');
}

function loadNewWord() {
    console.log("loadNewword");

    let sectionNewword = document.getElementById("sec-newword");
    sectionNewword.classList.remove('invisivel');
    sectionNewword.classList.add('visivel');

    let sectionHome = document.getElementById("sec-home");
    sectionHome.classList.remove('visivel');
    sectionHome.classList.add('invisivel');

    let sectionGame = document.getElementById("sec-game");
    sectionGame.classList.remove('visivel');
    sectionGame.classList.add('invisivel');

    document.getElementById("umaNovaPalavra").focus(); 
}