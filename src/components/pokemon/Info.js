import React from 'react';

class Info extends React.Component {

  render() {
    return (
      <div>
        {this.props.pokemon.name}
      </div>
    );
  }

}

export default Info;
