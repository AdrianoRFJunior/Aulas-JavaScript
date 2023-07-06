//estrutura de repetição 

for(numero = 0; numero < 10; numero++){
    console.log(numero);
}
// incrementa o valor de numero em duas unidades

for(let num = 0; num < 10; num +=2){
    console.log(num)
}

// contagem regressiva 

for(let n = 10; n >= 0; n --){
    console.log(n)
}

// for(atribuicao; condicao; reatribuicao) {
// codigo de repeticao
// }

for(let numero = 0; numero < 100;) {
    numero++
    console.log(numero);
}

// loop infinito
let n = 0;
while(n < 17) {
    console.log("SoulCode + Porto");
    n++;
}

let num = 80;
let EPrimo = false;
for(let i = 2; i < num; i ++) {
    if(num % i == 0) {
        ePrimo = false;
    }
} 

if(EPrimo) {
    console.log("É primo!!");
}
else{
    console.log("N é primo");
}