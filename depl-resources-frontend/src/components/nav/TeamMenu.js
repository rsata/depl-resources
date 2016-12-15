import React from 'react';
import { Link } from 'react-router';

export const TeamMenu = (props) => {
  return (
    <li onClick={props.handleTeamDropdown}>
      <div>{props.path}</div>
    </li>
  );
};
