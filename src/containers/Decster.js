import React from 'react';
import Grid from '../components/pokemon/Grid'
import Search from '../components/pokemon/Search'
import Info from '../components/pokemon/Info'

import Pokedex from 'pokedex-promise-v2'

const baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

class Decster extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      pokemonSelected: null,
      pokemons: []
    }

    this.onSearchChange = this.onSearchChange.bind(this)
    this.handlePokemonClick = this.handlePokemonClick.bind(this)
  }

  componentDidMount() {
    const P = new Pokedex();
    const options = {
      limit: 150
    }
    P.getPokemonsList(options)
      .then(function(response) {
        //Add image to every pokemon
        const pokemonsArray = response.results.map((pokemon, index) => {
          pokemon.id = index + 1
          pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          pokemon.sprite = `${baseSpriteUrl}/${pokemon.id}.png`
          return pokemon
        });

        this.setState({
          pokemons: pokemonsArray
        })

      }.bind(this))
  }

  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handlePokemonClick(pokemonIndex) {
    if (this.state.pokemonSelected == pokemonIndex) {
      this.setState({
        pokemonSelected: null
      })
    } else {
      this.setState({
        pokemonSelected: pokemonIndex
      })
    }
  }

  renderPokemonSelected() {
    if(this.state.pokemonSelected != null) {
      // Call pokemon API to render all the information
      return <Info pokemon={this.state.pokemons[this.state.pokemonSelected - 1]} />
    }
  }

  render() {
    return (
      <div>
        <Search onChange={this.onSearchChange}/>
        {this.renderPokemonSelected()}
        <Grid
          filter={this.state.searchTerm}
          pokemonsArray={this.state.pokemons}
          onPokemonClick={this.handlePokemonClick}
          />
      </div>
    );
  }

}

export default Decster;
