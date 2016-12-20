import Pokedex from 'pokedex-promise-v2'

const baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
const Poke = new Pokedex()

function parsePokemonsArray(pokemons) {
  const pokemonsArray = pokemons.results.map((pokemon, index) => {
    pokemon.id = index + 1
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    pokemon.sprite = `${baseSpriteUrl}/${pokemon.id}.png`
    return pokemon
  });
  return pokemonsArray;
}

function parsePokemonInfo(pokemon) {
  // Parse abilities name to array only, ie. ["chlorophyll, etc..."]
  pokemon.abilities = pokemon.abilities.map((ability) => {
    return ability.ability.name
  })
  // Parse moves
  pokemon.moves = pokemon.moves.map((move) => {
    return move.move.name
  })
  // Parse types
  pokemon.types = pokemon.types.map((type) => {
    return type.type.name
  })
  // Parse stats
  pokemon.stats = pokemon.stats.map((stat) => {
    return {
      value: stat.base_stat,
      name: stat.stat.name
    }
  })
  // Parse sprites url's
  const parsedSprites = []
  for (let [key, val] of Object.entries(pokemon.sprites)) {
    if (val != null) {
      parsedSprites.push(val)
    }
  }
  pokemon.sprites = parsedSprites

  // Return parsed pokemon
  return pokemon
}

const helpers = {
  getPokemonList(limit = 150) {
    const options = {
      limit: limit
    }
    return Poke.getPokemonsList(options)
      .then(parsePokemonsArray)
      .catch((error) => {
        console.warn('Error in pokemon list', error)
      })
  },
  getPokemonInfo(name) {
    return Poke.getPokemonByName(name.toLowerCase())
      .then(parsePokemonInfo)
      .catch((error) => {
        console.warn('Error in pokemon info: ', error);
      });
  }
}

export default helpers;
