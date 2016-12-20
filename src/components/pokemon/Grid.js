import React from 'react';
import Small from './Small'
import Loading from '.././Loading'

class Grid extends React.Component {
  renderPokemons() {
    if (this.props.loadingPokemons) {
      return <Loading />
    } else {
      const pokemons = this.props.pokemonsArray.map((pokemon, index) => {
          return (
            <Small
              name={pokemon.name}
              imageSrc={pokemon.sprite}
              onPokemonClick={this.props.onPokemonClick}
              key={index} />
          )
      })
      return pokemons
    }
  }

  render() {
    return (
      <div className="col-xs-8">
        <div className="page-header">
          <h1>Pokedex <small>151 Pokemon</small></h1>
        </div>
        {this.renderPokemons()}
      </div>
    );
  }

}

export default Grid;
