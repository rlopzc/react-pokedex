import React from 'react';

class Search extends React.Component {

  render() {
    return (
      <div className='pokemon-search'>
        <input type="text" onChange={this.props.onChange}/>
      </div>
    );
  }

}

Search.propTypes = {
  onChange: React.PropTypes.func.isRequired
}

export default Search;
