/* 
const nota1 = 5;
const nota2 = 6;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;
console.log(`A média do aluno é: ${media.toFixed(2)}`); 
*/

const notaAluno = calcMediaNota(9, 6, 7);

function calcMediaNota(primeiraNota, segundaNota, terceiraNota) {
  const media = (primeiraNota + segundaNota + terceiraNota) / 3;
  
  if (media < 5) {
    console.log(`A média do aluno é: ${media.toFixed(1)} e o aluno está reprovado na disciplina`);
  } else if (media > 5 && media < 7) {
    console.log(`A média do aluno é: ${media.toFixed(1)} e o aluno está de recuperação da disciplina`);
  } else {
    console.log(`A média do aluno é: ${media.toFixed(1)} e o aluno passou na disciplina`);
  }
}