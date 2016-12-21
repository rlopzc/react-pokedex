import axios from 'axios'
import Pokedex from 'pokedex-promise-v2'

const baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
const Poke = new Pokedex()

export default {
  fetchAll: (limit = 150) => {
    const options = {
      limit: limit
    }

    return (dispatch) => {
      dispatch({
        type: 'REQUEST_POKEMON_ARRAY'
      })

      Poke.getPokemonsList(options)
        .then((result) => {
          const parsedResults = parsePokemonsArray(result);
          dispatch({
            type: 'POKEMON_ARRAY_FETCHED',
            pokemonArray: parsedResults
          })
        }).catch((error) => {
          dispatch({
            type: 'POKEMON_ARRAY_FETCH_FAILED',
            error: error
          })
        })
    }
  },
  fetchPokemon: (pokemonName) => {
    return (dispatch) => {
      dispatch({
        type: 'REQUEST_POKEMON'
      })

      Poke.getPokemonByName(pokemonName.toLowerCase())
        .then((result) => {
          const parsedResult = parsePokemonInfo(result);
          dispatch({
            type: 'POKEMON_FETCHED',
            pokemonSelected: {
              name: pokemonName,
              info: pokemonSelected
            }
          })
        }).catch((error) => {
          dispatch({
            type: 'POKEMON_FETCH_FAILED',
            error: error
          })
        })
    }
  }
}

// Helpers
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
  pokemon.sprite = `${baseSpriteUrl}/${pokemon.id}.png`
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
