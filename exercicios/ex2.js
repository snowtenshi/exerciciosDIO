const { gets, print } = require('./funcao_auxiliar_ex2.js');

const totalNumeros = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

(function() {
  for (let i = 0; i < totalNumeros; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
      if (maiorNumeroPar === null || numero > maiorNumeroPar) {
        maiorNumeroPar = numero;
      } 
    } else {
      if (menorNumeroImpar === null || numero < menorNumeroImpar) {
        menorNumeroImpar = numero;
      }
    }
  }  
})();

print(`O maior número par é ${maiorNumeroPar}`);
print(`O menor número ímpar é ${menorNumeroImpar}`);