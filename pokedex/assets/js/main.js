const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const pokedexList = document.getElementById('pokedex__list');

fetch(url) 
  .then((response) => response.json()) // Utilizando arrow functions p/ tornar o código mais conciso
  .then((jsonBody) => jsonBody.results) // é possível colocar "debugger" p dubuggar código direto do terminal no navegador
  .then((jsonBody) => {
    for (let i = 0; i < jsonBody.length; i++) {
      const pkmnName = jsonBody[i];
      pokedexList.innerHTML += pokemonList(pkmnName);
    }
  })
  .catch((error) => console.error(error));

function pokemonList(pokemon) {
  return `
    <li class="content-pokedex__pokemon">
    <span class="content-pokedex__pokemonNumber">#001</span>
    <span class="content-pokedex__pokemonName">${pokemon.name}</span>
      <div class="content-pokedex__pokemonData">
        <ol class="content-pokedex__pokemonType">
          <li class="type">Grass</li>
          <li class="type">Poison</li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" 
          alt="${pokemon.name}">
      </div>
    </li>

  `
};

