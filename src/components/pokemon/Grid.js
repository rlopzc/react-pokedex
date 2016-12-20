import React from 'react';
import Small from './Small'
import Info from './Info'

class Grid extends React.Component {
  renderPokemons() {
    const pokemons = this.props.pokemonsArray.map((pokemon, index) => {
        return (
          <Small
            name={pokemon.name}
            imageSrc={pokemon.sprite}
            onPokemonClick={this.props.onPokemonClick}
            key={index}
            id={pokemon.id} />
        )
    })

    return pokemons;
  }

  renderPokemonName() {
    const {pokemonSelected} = this.props
    return pokemonSelected ? pokemonSelected.name : ''
  }

  render() {
    return (
      <section className="container">
        <div className="col-xs-9">
          <div className="page-header">
            <h1>Pokedex <small>150 Pokemon</small></h1>
          </div>
          {this.renderPokemons()}
        </div>
        <div className="col-xs-3">
          <div className="page-header">
            <h1>Info <small>{this.renderPokemonName()}</small></h1>
          </div>
          <Info pokemonSelected={this.props.pokemonSelected} />
        </div>
      </section>
    );
  }

}

export default Grid;
