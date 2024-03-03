// É possível colocar "debugger" p dubuggar código direto do terminal no navegador

const pokeAPI = {}; // pokeAPI é um objeto vazio que receberá métodos

function convertPokemonModel(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.pkmnNumber = pokeDetail.order;
  pokemon.pkmnName = pokeDetail.name;

  const types = pokeDetail.types.map((typesSlot) => typesSlot.type.name)
  const [type] = types
  
  pokemon.pkmnTypes = types
  pokemon.pkmnMainType = type
  pokemon.pkmnSprite = pokeDetail.sprites.front_default;
  return pokemon;
} 

pokeAPI.getPokemonDetails = (pokemon) => {
  return fetch((pokemon.url))
    .then((response) => response.json())
    .then(convertPokemonModel)
}

pokeAPI.getPokemons = (offset = 905, limit = 12) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  
  return fetch(url) 
  .then((response) => response.json()) 
  .then((jsonBody) => jsonBody.results) 
  .then((pokemons) => pokemons.map(pokeAPI.getPokemonDetails))
  .then((detailRequest) => Promise.all(detailRequest))
  .then((details) => details) 
}