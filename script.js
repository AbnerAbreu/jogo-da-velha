let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let quadrados = document.querySelectorAll(".quadrado");
let aviso = document.querySelector("h2");
let jogador1;
let jogador2;
let jogada = 0;

function escolherJogador() {
    jogador1 = caixaTexto.value;
    jogador2;
    if (jogador1 == "X" || jogador1 == "x") {
        jogador2 = "O"
        caixaTexto.value = "";
        caixaTexto.placeholder = "JOGADOR JÁ ESCOLHIDO";
        caixaTexto.disabled = true;
    }
    else if (jogador1 == "O" || jogador1 == "o") {
        jogador2 = "X"
        caixaTexto.value = "";
        caixaTexto.placeholder = "JOGADOR JÁ ESCOLHIDO";
        caixaTexto.disabled = true;
    }
    else {
        caixaTexto.value = "JOGADOR INVALIDO"
    }

}

botao.onclick = escolherJogador;

function gerarJogada() {
    if (this.innerHTML == "") {
        if (jogada % 2 == 0) {
            this.innerHTML = jogador1;
            this.style.color = "rgb(85, 5, 5)";
            jogada++;
            verificarFinal();
        }
        else {
            this.innerHTML = jogador2;
            jogada++;
            verificarFinal();
        }
    }
    else {
        this.innerHTML = this.innerHTML;
    }
}

for (let quadrado of quadrados) {
    quadrado.onclick = gerarJogada;
}

function final() {
    aviso.innerHTML = "Você venceu!";
    for (let quadrado of quadrados) {
        quadrado.onclick = null;
    }

}

function verificarFinal() {
    if (quadrado[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[1].innerHTML && quadrados[1].innerHTML === quadrados[2].innerHTML) {
        final();
    }
    else if (quadrado[3].innerHTML !== "" && quadrados[3].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[5].innerHTML) {
        final();
    }
    else if (quadrado[6].innerHTML !== "" && quadrados[6].innerHTML === quadrados[7].innerHTML && quadrados[7].innerHTML === quadrados[8].innerHTML) {
        final();
    }
    else if (quadrado[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[3].innerHTML && quadrados[3].innerHTML === quadrados[6].innerHTML) {
        final();
    }

    else if (quadrado[1].innerHTML !== "" && quadrados[1].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[7].innerHTML) {
        final();
    }
    else if (quadrado[2].innerHTML !== "" && quadrados[2].innerHTML === quadrados[5].innerHTML && quadrados[5].innerHTML === quadrados[8].innerHTML) {
        final();
    }
    else if (quadrado[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[8].innerHTML) {
        final();
    }
    else if (quadrado[2].innerHTML !== "" && quadrados[2].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[6].innerHTML) {
        final();
    }
    else if (jogada >= 9) {
        aviso.innerHTML = " Iiiii de velha"
    }
    else {
        return;
    }

}
