import React from 'react'

var styles = {
  container: {
    fontSize: '30px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
  }
}

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text
    }
  }

  componentDidMount() {
    var stopper = this.originalText + '...'
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
}

Loading.propTypes =  {
  text: React.PropTypes.string,
  speed: React.PropTypes.number,
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

module.exports = Loading
