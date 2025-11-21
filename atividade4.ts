// 4. Escreva uma função que receba duas strings e retorne a concatenação
function concatenarStrings(str1: string, str2: string): string {
    return `${str1}${str2}`;
}

// Use template string e mostre no console
const texto1: string = "Olá, ";
const texto2: string = "mundo!";
const resultadoConcatenacao: string = concatenarStrings(texto1, texto2);
console.log(`Resultado da concatenação: ${resultadoConcatenacao}`);