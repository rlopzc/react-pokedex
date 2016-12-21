import React from 'react';
import Small from './Small'
import Loading from '.././Loading'
import {connect} from 'react-redux'
import PokemonActions from '../../actions/pokemon'
const baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

class Grid extends React.Component {
  componentDidMount() {
    this.props.fetchAllPokemons()
  }


  renderPokemons() {
    if (this.props.loadingPokemons) {
      return <Loading />
    } else {
      const pokemons = this.props.pokemonArray.map((pokemon, index) => {
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

function mapStateToProps(state) {
  return {
    loadingPokemons: state.pokemon.loadingPokemons,
    pokemonArray: state.pokemon.pokemonArray
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllPokemons: () => dispatch(PokemonActions.fetchAll())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
