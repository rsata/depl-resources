import React from 'react';
import { Link } from 'react-router';

export const TeamMenu = (props) => {
  return (
    <li className='navTeamMenu topBar'>
      <Link to='/deployment'>Deployment</Link>
      <Link to='/admin'>Admin</Link>
    </li>
  );
};
