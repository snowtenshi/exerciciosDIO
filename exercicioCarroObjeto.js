class Carro {
  modelo;
  cor;
  gastoMedioPorKM;

  constructor(modelo, cor, gastoMedioPorKm) {
    this.modelo = modelo;
    this.cor = cor;
    this.gastoMedioPorKM = gastoMedioPorKm.toFixed(3)
  }

  calcularViagem(distanciaEmKM, precoCombustivel) {
    return (distanciaEmKM * this.gastoMedioPorKM * precoCombustivel).toFixed(3);
  }
}

const meuCarro = new Carro('Corsa', 'Cinza', (1/12));
console.log(meuCarro.calcularViagem(70, 5));

const carroPai = new Carro('Palio', 'Vermelho', (1/10));
console.log(carroPai.calcularViagem(70, 5))