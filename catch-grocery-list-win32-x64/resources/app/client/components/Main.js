import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({count: this.state.count + 1})
  }

  render () {
    console.log(this.state.count)
    return (
      <div>
        <h1>Hello World</h1>
        <h2>Clicks: {this.state.count}</h2>
        <button onClick={this.handleClick}>Add 1</button>
      </div>
    )
  }
}

export default Main
