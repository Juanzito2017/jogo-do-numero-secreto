let listaNumerosEscolhidos = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemInicial();

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'ACERTOU!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        tentativas++;
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O Número Secreto é menor que seu chute.');
        } else {
            exibirTextoNaTela('p', 'O Número Secreto é maior que seu chute.');
        }
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*10 + 1);
    let quantidadeDeElementosNaLista = listaNumerosEscolhidos.length;

    if (quantidadeDeElementosNaLista == 10) {
        listaNumerosEscolhidos = [];
    }

    if (listaNumerosEscolhidos.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosEscolhidos.push(numeroEscolhido);
        console.log(listaNumerosEscolhidos);
        return numeroEscolhido;
    }
        
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

