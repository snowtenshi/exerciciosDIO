class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura
  }

  calcularIMC() {
    return `Valor do IMC de ${this.nome} é ${(this.peso / Math.pow(this.altura, 2)).toFixed(1)}`;
  }
}

const p1 = new Pessoa('José', 70, 1.75);
console.log(p1);
console.log(p1.calcularIMC());