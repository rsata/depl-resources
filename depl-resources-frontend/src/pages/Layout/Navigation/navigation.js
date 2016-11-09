import React, {Component} from 'react';
import { Link } from 'react-router';

import styles from './navigationStyle.js'

class Navigation extends Component {
  render() {
    return(
      <div style={styles.wrapper}>
        <ul>
          <li style={styles.li}><Link to="/deployment" activeClassName="active" style={styles.a}>Deployement</Link></li>
          <li style={styles.li}><Link to="/heat" activeClassName="active" style={styles.a}>Heat</Link></li>
          <li style={styles.li}><Link to="/settings" activeClassName="active" style={styles.a}>Settings</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navigation;
