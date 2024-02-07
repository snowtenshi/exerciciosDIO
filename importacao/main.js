const { gets, print } = require('./funcoes_auxiliares.js');

const quantidadeDeAlunos = gets();
let maiorValorSorteado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorValorSorteado) {
    maiorValorSorteado = numeroSorteado;
  }  
}

print(maiorValorSorteado);