function calcRank(vitoria, derrota) {
  return vitoria - derrota
}
let saldoVitorias = calcRank(11, 1)
let ranqueHeroi = " "

if (saldoVitorias <= 10) {
  ranqueHeroi = "Ferro"
} 

else if (saldoVitorias <= 20) {
  ranqueHeroi = "Bronze"
}

else if (saldoVitorias <= 50) {
  ranqueHeroi = "Prata"
}

else if (saldoVitorias <= 80) {
  ranqueHeroi = "Ouro"
}

else if (saldoVitorias <= 90) {
  ranqueHeroi = "Diamante"
}

else if (saldoVitorias <= 100) {
  ranqueHeroi = "Lendario"
}

else ranqueHeroi = "Imortal"

console.log(`O Heroi tem de saldo de vitorias: ${saldoVitorias} 
E esta no ranque: ${ranqueHeroi}`)