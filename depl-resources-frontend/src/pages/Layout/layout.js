import React, {Component} from 'react';
import { Link, hashHistory } from 'react-router';

import Header from './Header/header';
import styles from './layoutStyles';

class Layout extends Component {

  navigateHome() {
    hashHistory.push('/');
  }

  render() {
    return (
      <div id='Layout'>
        <Header />
        <div style={styles.wrapper}>
          <ul>
            <li style={styles.li}><Link to='/deployment' activeClassName='active' style={styles.a}>Deployement</Link></li>
            <li style={styles.li}><Link to='/heat' activeClassName='active' style={styles.a}>Heat</Link></li>
            <li style={styles.li}><Link to='/settings' activeClassName='active' style={styles.a}>Settings</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
