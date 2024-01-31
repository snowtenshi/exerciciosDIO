/* 
const precoCombustivel = 5.79;
const distanciaEmKM = 50;
const kmPorLitros = 12;

const litrosConsumidos = distanciaEmKM / kmPorLitros;
const valorViagem = precoCombustivel * litrosConsumidos

console.log(valorViagem.toFixed(2)); 
*/

function calcValorViagem(precoCombustivel, distanciaPercorridaKM, kmPorLitros) {
  const litrosConsumidos = distanciaPercorridaKM / kmPorLitros
  return litrosConsumidos * precoCombustivel
}

let primeiraViagem = calcValorViagem(5.79, 50, 12)
let segundaViagem = calcValorViagem(7.90, 100, 12)

console.log(`O valor da primeira viagem foi: ${primeiraViagem.toFixed(2)} reais`)
console.log(`O valor da segunda viagem foi: ${segundaViagem.toFixed(2)} reais`)