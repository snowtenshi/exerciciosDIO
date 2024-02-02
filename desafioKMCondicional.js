/* 
const precoGasolina = 5.79;
const precoEtanol = 3.42;
const kmPorLitros = 10;
const distanciaEmKM = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKM / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(`O combustível utilizado foi etanol e o valor gasto foi ${valorGasto.toFixed(2)}`);
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(`O combustível utilizado foi gasolina e o valor gasto foi ${valorGasto.toFixed(2)}`);
} 
*/

const valorViagem = calcValorViagem('Etanol', 100, 10);
console.log(valorViagem);

function calcValorViagem(tipoCombustivel, distanciaPercorridaKM, kmPorLitros) {
  const precoGasolina = 5.79;
  const precoEtanol = 3.42;
  const litrosConsumidos = distanciaPercorridaKM / kmPorLitros;

  if (tipoCombustivel === 'Etanol') {
    const custoViagem = litrosConsumidos * precoEtanol;
    return `Valor gasto na viagem foi: ${custoViagem.toFixed(2)}`;
  } else if (tipoCombustivel === 'Gasolina') {
    const custoViagem = litrosConsumidos * precoGasolina
    return `Valor gasto na viagem foi: ${custoViagem.toFixed(2)}`;
  } else { 
    return 'Insira um tipo de combustível';
  }
}