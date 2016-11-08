import React, { Component } from 'react';

class App extends Component {

  test() {
    fetch('/')
      // .then(r => r.json())
      .then((res) => console.log(res))
  }
  render() {
    this.test();
    return (
      <div>awef</div>
    );
  }
}

export default App;
