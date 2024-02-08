const { gets, print } = require('./funcao_auxiliar_ex1.js');

const mediaAluno = gets();

if (mediaAluno < 5) {
    print('Reprovado');
} else if (mediaAluno >= 5 && mediaAluno < 7) {
    print('Recuperação');
} else {
    print('Aprovado');
}