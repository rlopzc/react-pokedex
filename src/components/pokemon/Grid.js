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
      <section className="grid">
        Pokemons here!
        {this.getPokemons()}
      </section>
    );
  }

}

export default Grid;
