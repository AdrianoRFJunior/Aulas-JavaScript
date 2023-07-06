let n; 
n = 10;

if (n > 0) {
    console.log("O número escolhido é positivo");
} else if (n < 0) {
    console.log("O número escolhido é negativo");
} else {
    console.log("O número escolhido é zero");
}

let idade;
idade = 17;
if (idade>=18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idader");
}
    
let n1,n2,n3;
n1 = 433;
n2 = 60;
n3 = 10;

if (n1 > n2 && n1 > n3) {
    console.log("O número 1 é o maior");
}   else if (n2 > n1 && n2 > n3) {
    console.log("O número 2 é o maior");
}   else {
    console.log("O número 3 é o maior");
}
/*n1 > n2 && n1 > n3 verifica se n1 é maior que n2 e n3, determinando assim que n1 é o maior número.
A segunda condição n2 > n1 && n2 > n3 verifica se n2 é maior que n1 e n3, identificando que n2 é o maior número.
Caso contrário, se nenhuma das condições anteriores for verdadeira, o código assume que n3 é o maior número.*/

let nu1, nu2, produto;
nu1 = 1
nu2 = 3
produto = nu1 * nu2;

if (produto % 2 === 0) {
    console.log("O produto é par");
} else {
    console.log("O produto é impar");
}

let dia;
dia = "domingo";

if (dia === "sábado" || dia === "domingo"){
    console.log("Final de semana");
}  else {
    console.log("Dia útil")
}

let numeroDia = 7;

if (numeroDia === 1) {
    console.log("Domingo");
}   else if (numeroDia === 2) {
    console.log("Segunda-feira");
}   else if (numeroDia === 3) {
    console.log("Terça-feira");
}   else if (numeroDia === 4) {
    console.log("Quarta-feira");
}   else if (numeroDia === 5) {
    console.log("Quinta-feira");
}   else if (numeroDia === 6) {
    console.log("Sexta-feira");
}   else if (numeroDia === 7) {
    console.log("Sábado");
}   else {
    console.log("Número inválido");
}
