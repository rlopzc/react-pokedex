import React from 'react';
import Loading from '.././Loading'

class Info extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    const {pokemonSelected, loadingPokemonSelected} = this.props
    if (pokemonSelected !== nextProps.pokemonSelected ||
      loadingPokemonSelected !== nextProps.loadingPokemonSelected) {
      return true
    } else {
      return false
    }
  }
  renderPokemonSelected() {
    if (this.props.loadingPokemonSelected) {
      return <Loading />
    } else if(this.props.pokemonSelected != null){
      console.log(this.props.pokemonSelected)
    }
  }

  renderPokemonName() {
    const {pokemonSelected} = this.props
    return pokemonSelected ? pokemonSelected.name : 'Select a Pokemon!'
  }

  render() {
    return (
      <div className='col-xs-4'>
        <div className="page-header">
          <h1>Info <small>{this.renderPokemonName()}</small></h1>
        </div>
        {this.renderPokemonSelected()}
      </div>
    );
  }

}

export default Info;
