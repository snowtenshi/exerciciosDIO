const pokedexList = document.getElementById('pokedex__list');

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


// Essencialmente esse trecho está fazendo um loop com o map e adicionando ao array as informações
// Que está no jsonBody dinamicamente a lista HTML de pokemonList
// join por padrão separa os itens com uma vírgula, por isso a string vazia

pokeAPI.getPokemons()
  .then((jsonBody = []) => pokedexList.innerHTML += jsonBody.map(pokemonList).join('') 
);