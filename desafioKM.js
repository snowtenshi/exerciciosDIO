const precoCombustivel = 5.79;
const distanciaEmKM = 50;
const kmPorLitros = 12;

const litrosConsumidos = distanciaEmKM / kmPorLitros;
const valorViagem = precoCombustivel * litrosConsumidos

console.log(valorViagem.toFixed(2));