import React from 'react';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';
import CSSModules from 'react-css-modules';
import styles from './nav.scss';

import { Calendar } from './Calendar';
import { Password } from './Password';
import SideNav from './sideNav/SideNav';
import TeamDropdown from './teamDropdown/TeamDropdown';
import { TeamMenu } from './TeamMenu';

// Eventually, make dynamic so can add new cards without touching this
// Mapping route to nav page - probably not best way to do this
let routeToPageMapping = {
  '/deployment': 'Deployment',
  '/heat': 'Heat',
  '/admin': 'Admin'
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

  render() {
    return(
      <div>
        <ul styleName='navbar'>
          <li>
            <div>Username</div>
            <button onClick={this.handleOpenSideNav.bind(this)}>
              {this.state.toggleSideNav===true ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
            </button>
          </li>
          <Password />
          <Calendar />
          <TeamMenu path={routeToPageMapping[this.props.path]} handleTeamDropdown={this.handleTeamDropdown.bind(this)} />
        </ul>
        {this.state.toggleSideNav===true ? <SideNav /> : null}
        {this.state.toggleTeamDropdown===true ? <TeamDropdown handleTeamDropdown={this.handleTeamDropdown.bind(this)} /> : null}
      </div>
    );
  }
}

export default CSSModules(Nav, styles);
