const pokedexList = document.getElementById('pokedex__list');
const buttonPrev = document.querySelector('#btn-prev');
const buttonNext = document.querySelector('#btn-next');
const limit = 12;
let offset = 0;

function pokemonList(pokemon) {
  return `
    <li class="content-pokedex__pokemon ${pokemon.pkmnMainType}">
    <span class="content-pokedex__pokemonNumber">#${pokemon.pkmnNumber}</span>
    <span class="content-pokedex__pokemonName">${pokemon.pkmnName}</span>
      <div class="content-pokedex__pokemonData">
        <ol class="content-pokedex__pokemonType">
            ${pokemon.pkmnTypes.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
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

function loadPokemons(offset, limit) {
  pokeAPI.getPokemons(offset, limit)
    .then((jsonBody = []) => pokedexList.innerHTML = jsonBody.map(pokemonList).join('') 
  );
}

buttonPrev.addEventListener('click', () => {
  if (offset <= 0) {
    buttonPrev.style.display = 'none';
  } else {
    offset -= limit;
    loadPokemons(offset, limit);
  }
});

buttonNext.addEventListener('click', () => {
  offset += limit;
  buttonPrev.style.display = 'inline';
  loadPokemons(offset, limit);
});

loadPokemons(offset, limit);