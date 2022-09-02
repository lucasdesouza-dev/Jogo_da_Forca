var qtdTotalTentativas = 6;
var inputsErrados = []; 
var inputsCertos = [];

function avisarLetraRepetida() {
    let aviso = document.querySelector("#aviso-LetraRepetida")
    console.log(aviso);
    aviso.classList.remove('invisivel');
    aviso.classList.add('visivel');
    setTimeout(() => {
        aviso.classList.add("invisivel");
    }, 2000);
}

function exibirLetrasErradas() {
    let areaLE = document.querySelector("#container-LetrasErradas");
    areaLE.innerHTML = "<h3>Letras erradas</h3>";
    inputsErrados.forEach((letraDigitada) => {
        areaLE.innerHTML += `<span>${letraDigitada}</span>`;
    });
}

function exibirLetrasCertas() {
    let areaPS = document.querySelector('#container-PalavraSecreta');
    areaPS.innerHTML = "";
    palavraSecreta.split("").forEach((letraDigitada) => {
        if (inputsCertos.includes(letraDigitada)) {
          areaPS.innerHTML += `<span>${letraDigitada}</span>`;
        } else {
          areaPS.innerHTML += `<span>_</span>`;
        }
    });
}

function checkGame() {
    let advEndGame = '';
    let areaPS = document.querySelector('#container-PalavraSecreta');

    if (inputsErrados.length == qtdTotalTentativas) {
        advEndGame = "Que pena, você perdeu!";
    }

    if (areaPS.innerText == palavraSecreta) {
        advEndGame = "Parabéns! Você venceu!"
    }

    if (advEndGame) {
        document.querySelector("#advice").innerHTML = advEndGame;
        document.querySelector("#popup-container").style.display = "flex";
    }
}

function updateGame() {
    exibirLetrasErradas();
    exibirLetrasCertas();
    paintForca();
    checkGame();
    console.log("Função UpdateGame");
}

function game() {
    document.addEventListener("keydown", (teclado) => {
        let codigoL = teclado.keyCode;
        
        if (isLetra(codigoL)) {
            let LD = teclado.key;
            let letraDigitada = LD.toUpperCase();
            console.log(letraDigitada);

            if (inputsErrados.includes(letraDigitada) || inputsCertos.includes(letraDigitada)) {
                avisarLetraRepetida();
                console.log("Identifica Letra Repetida");
            } else {
                if (palavraSecreta.includes(letraDigitada)) {
                    inputsCertos.push(letraDigitada);
                    console.log("Letra sobe para inputsCertos");
                } else {
                    inputsErrados.push(letraDigitada);
                    console.log("Letra sobe para inputsErrados");
                    // INCLUIR FUNÇÃO DE PINTAR FORCA
                    console.log('Incluir Função para Pintar Forca');
                }
            }
    updateGame();
        }
    });
}