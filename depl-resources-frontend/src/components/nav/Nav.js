import React from 'react';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';

import { Calendar } from './Calendar';
import { TeamMenu } from './TeamMenu';
import { Password } from './Password';
import { SideNav } from './SideNav';
import { UserMenu } from './UserMenu';

export class Nav extends React.Component {

  constructor() {
    super();
    this.state = {
      toggleSideNav: false
    }
  }

  handleOpenSideNav() {
    this.setState({toggleSideNav: !this.state.toggleSideNav})
  }

  render() {
    return(
      <div className='navBarContainer'>
        <ul className='navBarList'>
          <button onClick={this.handleOpenSideNav.bind(this)}>
            {this.state.toggleSideNav===true ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
          </button>
          {this.state.toggleSideNav===true ? <SideNav /> : null}
          <UserMenu />
          <Password />
          <Calendar />
          <TeamMenu />
        </ul>
      </div>
    )
  }
}
