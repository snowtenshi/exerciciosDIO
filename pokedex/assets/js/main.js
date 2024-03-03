const pokedexList = document.getElementById('pokedex__list');

function pokemonsTypesList(pokemonTypes) {
  return pokemonTypes.map((typesSlot) => `<li class="type">${typesSlot.type.name}</li>`)
}

function pokemonList(pokemon) {
  return `
    <li class="content-pokedex__pokemon">
    <span class="content-pokedex__pokemonNumber">#${pokemon.order}</span>
    <span class="content-pokedex__pokemonName">${pokemon.name}</span>
      <div class="content-pokedex__pokemonData">
        <ol class="content-pokedex__pokemonType">
            ${pokemonsTypesList(pokemon.types).join('')}
        </ol>
        <img src="${pokemon.sprites.front_default}" 
          alt="${pokemon.name}">
      </div>
    </li>

  `
};


// Essencialmente esse trecho está fazendo um loop com o map e transformando as informações do array
// Que está no jsonBody dinamicamente em uma lista HTML de pokemonList
// join por padrão separa os itens com uma vírgula, por isso a string vazia

pokeAPI.getPokemons()
  .then((jsonBody = []) => pokedexList.innerHTML += jsonBody.map(pokemonList).join('') 
);