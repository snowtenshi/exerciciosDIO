function calImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificacaoImc(imc) {
  if (imc < 18.5) {
    return 'abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    return 'peso normal';
  } else if (imc >= 25 && imc < 30) {
    return 'acima do peso';
  } else if (imc >= 30 && imc < 40) {
    return 'obeso'
  } else {
    return 'obesidade grave';
  }
}

(function () {
  const altura = 1.58;
  const peso = 65;
  const imc = calImc(peso, altura);
  const classificacao = classificacaoImc(imc)
  console.log(`Pessoa com altura de ${altura} cm e com peso de ${peso} kg \nestá com imc de ${imc.toFixed(1)} e sua classificação é ${classificacao}`);
})();