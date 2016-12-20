import React from 'react';

class Small extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this)
  }

  _onClick() {
    this.props.onPokemonClick(this.props.name)
  }

  render() {
    const {imageSrc, name} = this.props;
    return (
      <div className='col-xs-4 text-center' onClick={this._onClick}>
        <img src={imageSrc} />
        <div>
          {name}
        </div>
      </div>
    );
  }

}

export default Small;
