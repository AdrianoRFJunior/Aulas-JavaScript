for(let i = 1; i <= 20; i++){
    console.log(i)
}

let n1 = 1;
let n2 = 0;
let repetição = 1;

console.log(n2);


while (repetição <= 10) {
    console.log(n1);

let n3 = n1 + n2;
n2 = n1;
n1 = n3;

repetição++;
}


let numero = 10;
let soma = 0;

for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
    soma += i;
}
}
console.log("A soma dos números ímpares até o numero", numero, "é", soma);

let num = 10
let somatabuada = 0;

for (let i = 1; i <= 10; i++) {
    somatabuada = num + i;
    console.log(num + " + " + i + " = " + somatabuada);
}

for (var i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
    console.log(i);
    }
}

let numerotri = 50

for (let i = 1; i <= numerotri; i++) {
    let linha = '';

    for (let j = 1; j <= i; j++) {
    linha += '*';
}

    console.log(linha);
}

let tamanho = 50;
let linha = '';
for (let i = 1; i <= tamanho; i++) {
    linha += '@';
}
console.log(linha);
for (let i = 2; i <= tamanho - 1; i++) {
    linha = '@';
    for (let j = 2; j <= tamanho - 1; j++) {
    linha += ' ';
}
    linha += '@';
    console.log(linha);
}
if (tamanho > 1) {
    linha = '';
    for (let i = 1; i <= tamanho; i++) {
    linha += '@';
}
console.log(linha);
}