import React from 'react';

export const SideNav = (props) => {
  return (
    <div className='sideNav'>
      <h1>hello</h1>
      {/* This is a placeholder until add this list to db and admins can make changes */}
      <ul>
        <li><a href='#'>Update Location Codes</a></li>
        <li><a href='#'>Vacation Balance</a></li>
        <li><a href='#'>Flex Time Request</a></li>
        <li><a href='#'>Big Brother</a></li>
      </ul>
    </div>
  )
}
