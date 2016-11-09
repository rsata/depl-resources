import React, {Component} from 'react';

import Navigation from './Navigation/navigation';
import Header from './Header/header';
import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div id='Layout'>
        <Header />
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
