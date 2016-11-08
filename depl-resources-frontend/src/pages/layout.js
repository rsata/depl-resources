import React, {Component} from 'react';
import Link from 'react-router';

export class Layout extends Component {
  render() {
    return (
      <div>
        <h1>Resources</h1>
        {this.props.children}
        <Link to='/heat'>Heat</Link>
        <Link to='/about'>About</Link>
      </div>
    )
  }
}
