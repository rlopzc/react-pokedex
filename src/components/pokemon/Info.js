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
      const {name, info} = this.props.pokemonSelected
      console.log(this.props.pokemonSelected)
      return (
        <div>
          <li className='list-group-item'>Abilities: {info.abilities.join(', ')}</li>
          <li className="list-group-item">Base Exp: {info.base_experience}</li>
          <li className='list-group-item'>Height: {info.height} mts</li>
          <li className="list-group-item">Weight: {info.weight} kgs</li>
          <li className="list-group-item">Type: {info.types.join(', ')}.</li>
          <li className="list-group-item">
            Stats:
            <ul className='list-group'>
              {info.stats.map((stat, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {stat.name}: {stat.value}
                  </li>
                )
              })}
            </ul>
          </li>
          <li className="list-group-item">Moves:
            <ul className="list-group">
              <li className="list-group-item">
                {info.moves.join(', ')}.
              </li>
            </ul>
          </li>
          <li className="list-group-item">
            Sprites:
            <ul className="list-group">
              {info.sprites.map((sprite, index) => {
                return (
                  <li key={index} className="list-group-item">
                    <img src={sprite} className="img-rounded img-responsive"/>
                  </li>
                )
              })}
            </ul>
          </li>
        </div>
      )
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
