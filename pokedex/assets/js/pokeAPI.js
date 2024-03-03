// É possível colocar "debugger" p dubuggar código direto do terminal no navegador

const pokeAPI = {}; // pokeAPI é um objeto vazio que receberá métodos

pokeAPI.getPokemonDetails = (pokemon) => {
  return fetch((pokemon.url)).then((response) => response.json());
}

pokeAPI.getPokemons = (offset = 0, limit = 12) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  
  return fetch(url) 
  .then((response) => response.json()) 
  .then((jsonBody) => jsonBody.results) 
  .then((pokemons) => pokemons.map(pokeAPI.getPokemonDetails))
  .then((detailRequest) => Promise.all(detailRequest))
  .then((details) => details) 
}