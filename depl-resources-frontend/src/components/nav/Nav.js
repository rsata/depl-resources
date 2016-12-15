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

// https://github.com/callemall/material-ui/pull/3005/files#diff-fe2fafcf2f595c0a3ecc6ba529b8aa2fL23

class Nav extends React.Component {

  constructor() {
    super();
    this.state = {
      toggleSideNav: false,
      toggleTeamDropdown: false,
      currentTeam: 'Deployment'
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
          <TeamMenu currentTeam={this.state.currentTeam} handleTeamDropdown={this.handleTeamDropdown.bind(this)} />
        </ul>
        {this.state.toggleSideNav===true ? <SideNav /> : null}
        {this.state.toggleTeamDropdown===true ? <TeamDropdown /> : null}
      </div>
    );
  }
}

export default CSSModules(Nav, styles);
