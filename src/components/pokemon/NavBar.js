import React from 'react';

class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Decster</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-right">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search Pokemon"
                  onChange={this.props.onSearchChange} />
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }

}

NavBar.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired
}

export default NavBar;
