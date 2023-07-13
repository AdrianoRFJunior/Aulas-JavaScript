// function somar(n1,n2) {
//   let soma = n1 + n2;
//   return soma;
// }

// function dividir(num, den) {
// if(den == 0)
//        return;
//    return (num, den)
// }

// const num = dividir(22, 0);
// console.log(num);

function erro() {
    console.log("DEU RUIM!");
}

function requisicaoParaBanco(callbackError) {
    for (let i = 0; i < 100000000000; i++) { // requisição feita para o servidor (simulação)
        if (i === 100000) { // aqui gerou um erro
            callbackError();
        }
    }
}

function erro() {
    console.log("DEU RUIM!");
}

requisicaoParaBanco(erro);