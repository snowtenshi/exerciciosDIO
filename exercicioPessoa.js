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
    return this.peso / Math.pow(this.altura, 2);
  }

  classificarIMC() {
    const imc = this.calcularIMC()
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
  }
}

const p1 = new Pessoa('José', 75, 1.75);
console.log(p1);
console.log(p1.classificarIMC());