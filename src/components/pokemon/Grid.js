import React from 'react';
import Small from './Small'

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  getPokemons() {
    const pokemons = this.props.pokemonsArray.filter((pokemon) => {
      return pokemon.name.indexOf(this.props.filter) !== -1;
    }).map((pokemon, index) => {
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

  render() {
    return (
      <section className="container">
        <div className="col-xs-10">
          <div class="page-header">
            <h1>Pokedex <small>150 Pokemon</small></h1>
          </div>
          {this.getPokemons()}
        </div>
        <div className="col-xs-2">
          Pokemon INFO!
        </div>
      </section>
    );
  }

}

export default Grid;
