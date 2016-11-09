import React, { Component } from 'react';

import DocItem from './docItem';

class DeploymentPage extends Component {

  constructor() {
    super();
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/data/deployment/get')
      .then(r => r.json())
      .then(data => this.setState({data}));
  }

  render() {
    if (!this.state.data) return <h1>Loading...</h1>
    return(
      <div>
        Deployment Page
        <ul>
          {this.state.data.map(x => {
            return <DocItem key={x._id} id={x._id} title={x.title} data={x.entry} lastEdited={x.lastEdited} />
          })}
        </ul>
      </div>
    )
  }
}

export default DeploymentPage;
