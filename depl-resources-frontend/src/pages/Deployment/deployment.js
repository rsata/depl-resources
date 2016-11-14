import React, { Component } from 'react';
import { Link } from 'react-router';

class DeploymentPage extends Component {

  constructor() {
    super();
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.setState({data: this.props.route.data})
  }

  render() {
    console.log(this.props)
    if (!this.state.data) return <h1>Loading...</h1>
    
    return(
      <div>
        Deployment Page
        <div>
          <h1>Site Build</h1>
          <ul>
            {this.state.data.map(x => {
              // this is inefficient because have to loop through state twice...  Should get sorted in componentDidMount
              // type should be int
              if (x.type !== 'siteConfig') return undefined;
              return <li key={x._id}><Link to={`doc/${x._id}`}>{x.title}</Link></li>
            })}
          </ul>
          <h1>Standards</h1>
          <ul>
            {this.state.data.map(x => {
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
