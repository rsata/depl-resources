import React from 'react';

export default class Deployment extends React.Component {

  componentDidMount() {
    this.props.loadData();
  }

  handleInc() {
    this.props.increment(1);
  }

  handleDec() {
    this.props.decrement(1);
  }

  render() {
    return(
      <div>
        <h2>Deployment page</h2>
        <h3>{this.props.count.count}</h3>
        <button onClick={this.handleInc.bind(this)}>Increment</button>
        <button onClick={this.handleDec.bind(this)}>Decrement</button>
      </div>
    )
  }
}
