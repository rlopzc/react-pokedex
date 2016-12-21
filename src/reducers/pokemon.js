const initialState = {
  pokemonArray: [],
  loadingPokemons: false,
  loadingPokemonSelected: false,
  pokemonSelected: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'REQUEST_POKEMON_ARRAY':
      return {
        loadingPokemons: true,
        pokemonArray: [], // [{}, {}]
        error: null
      }

    case 'POKEMON_ARRAY_FETCHED':
      return {
        loadingPokemons: false,
        pokemonArray: action.pokemonArray.slice(),
        error: null
      }

    case 'POKEMON_ARRAY_FETCH_FAILED':
      return {
        loadingPokemons: false,
        pokemonArray: [],
        error: action.error
      }

    case 'REQUEST_POKEMON':
      return {
        loadingPokemonSelected: true,
        pokemonSelected: null,
        error: null
      }

    case 'POKEMON_FETCHED':
      return {
        loadingPokemonSelected: false,
        pokemonSelected: action.pokemonSelected,
        error: null
      }

    case 'POKEMON_FETCH_FAILED':
      return {
        loadingPokemonSelected: false,
        pokemonSelected: null,
        error: action.error
      }

    default:
      return state;
  }
}
