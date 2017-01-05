import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './nav.scss';

import { Calendar } from './Calendar';
import { Password } from './Password';
import SideNav from './sideNav';
import TeamDropdown from './teamDropdown';
import { TeamMenu } from './TeamMenu';

// Eventually, make dynamic so can add new cards without touching this
// Mapping route to nav page - probably not best way to do this
let routeToPageMapping = {
  'deployment': 'Deployment',
  'heat': 'Heat',
  'admin': 'Admin',
  'resource': 'Resource'
};

class Nav extends React.Component {

  constructor() {
    super();
    this.state = {
      toggleSideNav: false,
      toggleTeamDropdown: false
    };

    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.handleEscKey();
      }
    });
  }

  handleOpenSideNav() {
    this.setState({toggleSideNav: !this.state.toggleSideNav});
  }

  handleTeamDropdown() {
    this.setState({toggleTeamDropdown: !this.state.toggleTeamDropdown});
  }

  handleEscKey() {
    this.setState({toggleSideNav: false, toggleTeamDropdown: false});
  }

  trimPath(path) {
    // this is messy...
    let p = path;
    const n = p.split('/');
    p = n.length > 2 ? n[0] : n[1];
    return p;
  }

  render() {
    if (Object.keys(this.props.nav).length < 1) return (<div>Loading...</div>);
    return(
      <div>
        <ul styleName='navbar'>
          <li onClick={this.handleOpenSideNav.bind(this)}>
            <div>Username</div>
          </li>
          <Password password={this.props.nav.password.title} />
          <Calendar />
          <TeamMenu path={routeToPageMapping[this.trimPath(this.props.path)]} handleTeamDropdown={this.handleTeamDropdown.bind(this)} />
        </ul>
        {this.state.toggleSideNav===true ? <SideNav /> : null}
        {this.state.toggleTeamDropdown===true ? <TeamDropdown handleTeamDropdown={this.handleTeamDropdown.bind(this)} /> : null}
      </div>
    );
  }
}

export default CSSModules(Nav, styles);
