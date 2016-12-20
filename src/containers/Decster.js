import React from 'react';
import Grid from '../components/pokemon/Grid'
import NavBar from '../components/pokemon/NavBar'
import Info from '../components/pokemon/Info'
import pokeApiHelpers from '.././utils/PokeApiHelpers'

class Decster extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      pokemonSelected: null,
      pokemons: []
    }

    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handlePokemonClick = this.handlePokemonClick.bind(this)
  }

  componentDidMount() {
    pokeApiHelpers.getPokemonList()
      .then(pokemons => {
        this.setState({
          pokemons: pokemons
        })
      })
  }

  handleSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handlePokemonClick(pokemonId, pokemonName) {
    const {pokemonSelected} = this.state

    if (pokemonSelected && pokemonSelected.id == pokemonId) {
      this.setState({
        pokemonSelected: null
      })
    } else {
      this.setState({
        pokemonSelected: {
          id: pokemonId,
          name: pokemonName
        }
      })
    }
  }

  filteredPokemons() {
    const pokemons = this.state.pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1;
    })
    return pokemons
  }

  render() {
    return (
      <div>
        <NavBar onSearchChange={this.handleSearchChange}/>
        <Grid
          pokemonsArray={this.filteredPokemons()}
          onPokemonClick={this.handlePokemonClick}
          pokemonSelected={this.state.pokemonSelected}
          />
      </div>
    );
  }

}

export default Decster;
