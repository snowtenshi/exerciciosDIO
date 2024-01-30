class Heroi {
  constructor(nomeHeroi, idadeHeroi, classeHeroi) {
    this.nomeHeroi = nomeHeroi
    this.idadeHeroi = idadeHeroi
    this.classeHeroi = classeHeroi
  }

  ataque() {
    if (this.classeHeroi === "mago")
      console.log(`O ${this.classeHeroi} de nome ${this.nomeHeroi} atacou usando um feitico`)
    else if (this.classeHeroi === "guerreiro") 
      console.log(`O ${this.classeHeroi} de nome ${this.nomeHeroi} atacou usando um golpe de espada`)
    else if (this.classeHeroi === "monge") 
      console.log(`O ${this.classeHeroi} de nome ${this.nomeHeroi} atacou usando um chute forte`)
    else if (this.classeHeroi === "ninja") 
      console.log(`O ${this.classeHeroi} de nome ${this.nomeHeroi} atacou usando um clone da sombra`)
  }
  
}

let personagem = new Heroi("Slime", 10, "ninja")
personagem.ataque()