import React from 'react';
import { Link } from 'react-router';

import { Doc } from '../components/Doc'

export default class Deployment extends React.Component {

  componentWillMount() {
    this.props.loadData();
  }

  render() {
    console.log(this.props)
    if (!this.props.data.data) return <div>Loading...</div>
    return(
      <div>
        <h1>Deployment Page</h1>
        <div>
          <h1>Site Build</h1>
          <ul>
            {this.props.data.data.map(x => {
              // this is inefficient because have to loop through state twice...  Should get sorted in componentDidMount??
              if (x.type !== 'siteConfig') return undefined;
              return <li key={x._id}><Doc data={x} /></li>
            })}
          </ul>
          <h1>Standards</h1>
          <ul>
            {this.props.data.data.map(x => {
              if (x.type !== 'standards') return undefined;
              return <li key={x._id}><Doc data={x} /></li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}
