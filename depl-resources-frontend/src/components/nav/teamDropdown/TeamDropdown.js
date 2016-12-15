import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './teamDropdown.scss';

const TeamDropdown = (props) => {
  return (
    <div styleName='teamDropdown'>
      <ul>
        <li><Link to='/deployment' activeStyle={{ backgroundColor: '#333' }}>Deployment</Link></li>
        <li><Link to='/admin' activeStyle={{ backgroundColor: '#333' }}>Admin</Link></li>
      </ul>
    </div>
  );
};

export default CSSModules(TeamDropdown, styles);
