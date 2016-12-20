import React from 'react';

class Small extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this)
  }

  _onClick() {
    this.props.onPokemonClick(this.props.id)
  }

  render() {
    const {imageSrc, name} = this.props;
    return (
      <div className='pokemon-small' onClick={this._onClick}>
        <img src={imageSrc} />
        <div className="pokemon-name">
          {name}
        </div>
      </div>
    );
  }

}

export default Small;
