/* 
const precoCombustivel = 5.79;
const distanciaEmKM = 50;
const kmPorLitros = 12;

const litrosConsumidos = distanciaEmKM / kmPorLitros;
const valorViagem = precoCombustivel * litrosConsumidos

console.log(valorViagem.toFixed(2)); 
*/

const valorViagem = calcValorViagem(5.79, 50, 12);

function calcValorViagem(precoCombustivel, distanciaPercorridaKM, kmPorLitros) {
  const litrosConsumidos = distanciaPercorridaKM / kmPorLitros;
  const resultado = litrosConsumidos * precoCombustivel;
  return `Valor gasto na viagem ${resultado.toFixed(2)}`;
};

console.log(valorViagem);
console.log(calcValorViagem(7.90, 100, 12));