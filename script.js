let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let quadrados = document.querySelectorAll(".quadrado");
let jogador1;
let jogador2;
let jogada = 0;

function escolherJogador () {
    jogador1 = caixaTexto.value;
    jogador2;
    if(jogador1 == "X"){
        jogador2 = "O"
    }
    else {
        jogador2 = "X"
    }
}

botao.onclick = escolherJogador;

function gerarJogada(){
    if(jogada % 2 == 0){
        this.innerHTML = jogador1;
        jogada++;
    }
    else{
        this.innerHTML = jogador2;
        jogada++;
    }
}
for(let quadrado of quadrados){
    quadrado.onclick = gerarJogada;
}
