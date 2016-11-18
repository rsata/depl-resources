import React from 'react';

export default class Deployment extends React.Component {
  handleInc() {
    console.log(this.props.count)
    this.props.increment();
  }

  handleDec() {
    console.log(this.props.count)
    this.props.decrement();
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <h2>Deployment page</h2>
        {/* <h3>{this.props.count}</h3> */}
        <button onClick={this.handleInc.bind(this)}>Increment</button>
        <button onClick={this.handleDec.bind(this)}>Decrement</button>
      </div>
    )
  }
}
