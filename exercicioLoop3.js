console.log('Exercício de loop para listar os números pares\n');
const numeros = [2, 5, 6, 8, 10, 12, 15];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];

  if (numero % 2 === 0) {
    console.log(numero);
  }
}