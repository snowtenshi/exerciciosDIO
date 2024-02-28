const pokeAPI = {};

pokeAPI.getPokemons = (offset = 0, limit = 11) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url) 
  .then((response) => response.json()) // Utilizando arrow functions p/ tornar o código mais conciso
  .then((jsonBody) => jsonBody.results) // é possível colocar "debugger" p dubuggar código direto do terminal no navegador
  .catch((error) => console.log(error));
}