import React, { Component } from 'react';
import { Link } from 'react-router';

class DeploymentPage extends Component {
  render() {
    return(
      <div>
        Deployment Page
        <div>
          <h1>Site Build</h1>
          <ul>
            {this.props.route.data.map(x => {
              // this is inefficient because have to loop through state twice...  Should get sorted in componentDidMount
              // type should be int
              if (x.type !== 'siteConfig') return undefined;
              return <li key={x._id}><Link to={`doc/${x._id}`}>{x.title}</Link></li>
            })}
          </ul>
          <h1>Standards</h1>
          <ul>
            {this.props.route.data.map(x => {
              if (x.type !== 'standards') return undefined;
              return <li key={x._id}><Link to={`doc/${x._id}`}>{x.title}</Link></li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default DeploymentPage;
