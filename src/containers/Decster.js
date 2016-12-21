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
      loadingPokemonSelected: false,
    }

    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handlePokemonClick = this.handlePokemonClick.bind(this)
  }

  handleSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handlePokemonClick(pokemonName) {
    const {pokemonSelected} = this.state

    if (pokemonSelected && pokemonSelected.name == pokemonName) {
      this.setState({
        pokemonSelected: null,
        loadingPokemonSelected: false
      })
    } else {
      this.setState({loadingPokemonSelected: true})

      pokeApiHelpers.getPokemonInfo(pokemonName)
        .then((result) => {
          this.setState({
            pokemonSelected: {
              name: pokemonName,
              info: result
            },
            loadingPokemonSelected: false
          })
        })
    }
  }

  render() {
    return (
      <div>
        <NavBar onSearchChange={this.handleSearchChange}/>
        <div className="container">
          <Grid
            onPokemonClick={this.handlePokemonClick}
            searchTerm={this.state.searchTerm}/>
          <Info
            pokemonSelected={this.state.pokemonSelected}
            loadingPokemonSelected={this.state.loadingPokemonSelected} />
        </div>
      </div>
    );
  }

}

export default Decster;
