import Pokedex from 'pokedex-promise-v2'

const baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
const Poke = new Pokedex()

function parsePokemonsInfo(pokemon) {
  const pokemonArray = pokemon.results.map((pokemon, index) => {
    pokemon.id = index + 1
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    pokemon.sprite = `${baseSpriteUrl}/${pokemon.id}.png`
    return pokemon
  });
  return pokemonArray;
}

const helpers = {
  getPokemonList(limit = 150) {
    const options = {
      limit: limit
    }
    return Poke.getPokemonsList(options)
      .then(parsePokemonsInfo)
      .catch((err) => {
        console.warn('Error in pokemon list', err)
      })
  }
}

export default helpers;
