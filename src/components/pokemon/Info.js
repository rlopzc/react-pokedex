import React from 'react';

class Info extends React.Component {

  renderPokemonSelected() {
    if(this.props.pokemonSelected != null) {
      // Make request
      console.log(this.props.pokemonSelected)
    }
  }

  render() {
    return (
      <div>
        {this.renderPokemonSelected()}
      </div>
    );
  }

}

export default Info;
