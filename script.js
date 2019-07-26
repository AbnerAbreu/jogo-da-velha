let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let quadrados = document.querySelectorAll(".quadrado");
let aviso = document.querySelector("h2");
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
    if(this.innerHTML == ""){
        if(jogada % 2 == 0){
            this.innerHTML = jogador1;
            jogada++;
            verificarFinal();
        }
        else{
            this.innerHTML = jogador2;
            jogada++;
            verificarFinal();
        }
    }
    else{
        this.innerHTML= this.innerHTML;
    }
}

for(let quadrado of quadrados){
    quadrado.onclick = gerarJogada;
}

function verificarFinal(){
    if(quadrados[0] != "" && quadrados[0].innerHTML == quadrados[1].innerHTML && quadrados[1].innerHTML == quadrados[2].innerHTML){
        aviso.innerHTML = "Você venceu";
        quadrados.onclick = null;
        
    }
    else if(quadrados[3] != "" && quadrados[3].innerHTML == quadrados[4].innerHTML && quadrados[5].innerHTML){
        aviso.innerHTML = "Você venceu";
        quadrados.onclick = null;
    }
    else if(quadrados[6] != "" && quadrados[6].innerHTML == quadrados[7].innerHTML && quadrados[8].innerHTML){
        aviso.innerHTML = "Você venceu";
        onclick = null;
    }
    else if(quadrados[0] != "" && quadrados[0].innerHTML == quadrados[3].innerHTML && quadrados[6].innerHTML){
        aviso.innerHTML = "Você venceu";
        onclick = null;
    }
    else if(quadrados[1] != "" && quadrados[1].innerHTML == quadrados[4].innerHTML && quadrados[7].innerHTML){
        aviso.innerHTML = "Você venceu";
        onclick = null;
    }
    else if(quadrados[2] != "" && quadrados[2].innerHTML == quadrados[5].innerHTML && quadrados[8].innerHTML){
        aviso.innerHTML = "Você venceu";
        onclick = null;
    }
    else if(quadrados[0] != "" && quadrados[0].innerHTML == quadrados[4].innerHTML && quadrados[8].innerHTML){
        aviso.innerHTML = "Você venceu";
        onclick = null;
    }
    else if(quadrados[2] != "" && quadrados[2].innerHTML == quadrados[4].innerHTML && quadrados[6].innerHTML){
        aviso.innerHTML = "Você venceu";
        onclick = null;
    }
    
    else{
        console.log("IH!!!!!!!!!!!!!!!! Deu Velha");
    }
}
