const pokedexList = document.getElementById('pokedex__list');

function pokemonList(pokemon) {
  return `
    <li class="content-pokedex__pokemon ${pokemon.pkmnMainType}">
    <span class="content-pokedex__pokemonNumber">#${pokemon.pkmnNumber}</span>
    <span class="content-pokedex__pokemonName">${pokemon.pkmnName}</span>
      <div class="content-pokedex__pokemonData">
        <ol class="content-pokedex__pokemonType">
            ${pokemon.pkmnTypes.map((type) => `<li class="type">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.pkmnSprite}" 
          alt="${pokemon.pkmnName}">
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