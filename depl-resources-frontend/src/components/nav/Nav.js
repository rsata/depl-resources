import React from 'react';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


import { Calendar } from './Calendar';
import { TeamMenu } from './TeamMenu';
import { Password } from './Password';
import { SideNav } from './SideNav';
import { UserMenu } from './UserMenu';

// https://github.com/callemall/material-ui/pull/3005/files#diff-fe2fafcf2f595c0a3ecc6ba529b8aa2fL23

export class Nav extends React.Component {

  constructor() {
    super();
    this.state = {
      toggleSideNav: false
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

  handleEscKey() {
    this.setState({toggleSideNav: false});
  }

  render() {
    return(
      <div className='navBarContainer'>
        <AppBar title='Deployment' iconElementLeft={<Logged />}>Hello</AppBar>
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
    );
  }
}


const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon color='#fff' /></IconButton>
    }
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem primaryText='Update Location Codes' />
    <MenuItem primaryText='Vacation Balance' />
    <MenuItem primaryText='Flex Time Request' />
    <MenuItem primaryText='Big Brother' />

  </IconMenu>
);
