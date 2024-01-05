console.log("##############################################")
console.log()
console.log("Bem-vindo ao classificador de ranque do Heroi")
console.log()
console.log("##############################################")
console.log()

let nomeHeroi = "Slime"
let ranqueHeroi = ""
let xpHeroi = 100000

if (xpHeroi < 1000) {
  ranqueHeroi = "Ferro"
} 

else if (xpHeroi >= 1001 && xpHeroi < 2000) {
  ranqueHeroi = "Bronze"
} 

else if (xpHeroi >= 2001 && xpHeroi < 5000) {
  ranqueHeroi = "Prata"
} 

else if (xpHeroi >= 6001 && xpHeroi < 7000) {
  ranqueHeroi = "Ouro"
} 

else if (xpHeroi >= 7001 && xpHeroi < 8000) {
  ranqueHeroi = "Platina"
} 

else if (xpHeroi >= 8001 && xpHeroi < 9000) {
  ranqueHeroi = "Ascendente"
} 

else if (xpHeroi >= 9001 && xpHeroi < 10000) {
  ranqueHeroi = "Imortal"
} 

else if (xpHeroi >= 10001) {
  ranqueHeroi = "Radiante"
}

console.log(`O heroi ${nomeHeroi} esta no ranque ${ranqueHeroi}`) 