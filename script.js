let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let quadrados = document.querySelectorAll(".coluna");

function escolherJogador () {
    let jogador1 = caixaTexto.value;
    let jogador2;
    if(jogador1 == "X"){
        jogador2 = "O"
    }
    else {
        jogador2 = "X"
    }
    console.log(jogador2);
    console.log(jogador1);
}


botao.onclick = escolherJogador;