import React from 'react';

import { Calendar } from './Calendar';
import { TeamMenu } from './TeamMenu';
import { Password } from './Password';
import { UserMenu } from './UserMenu';

export const Nav = (props) => {
  return(
    <div className='navBarContainer'>
      <ul className='navBarList'>
        <UserMenu />
        <Password />
        <Calendar />
        <TeamMenu />
      </ul>
    </div>
  )
}
