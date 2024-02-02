/* 
const precoCombustivel = 5.79;
const distanciaEmKM = 50;
const kmPorLitros = 12;

const litrosConsumidos = distanciaEmKM / kmPorLitros;
const valorViagem = precoCombustivel * litrosConsumidos

console.log(valorViagem.toFixed(2)); 
*/

const valorViagem = calcValorViagem(5.79, 50, 12);
console.log(valorViagem);

function calcValorViagem(precoCombustivel, distanciaPercorridaKM, kmPorLitros) {
  const litrosConsumidos = distanciaPercorridaKM / kmPorLitros;
  const resultado = litrosConsumidos * precoCombustivel;
  return `Valor gasto na viagem foi: ${resultado.toFixed(2)}`;
}