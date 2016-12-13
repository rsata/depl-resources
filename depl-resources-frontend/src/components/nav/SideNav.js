import React from 'react';

export const SideNav = (props) => {
  return (
    <div className='sideNav'>
      <h1>hello</h1>
      {/* This is a placeholder until add this list to db and admins can make changes */}
      <ul>
        <li><a href='https://fs.rubicon.com/i/accounting/locationcode_entry.php' target="_blank">Update Location Codes</a></li>
        <li><a href='https://fs.rubicon.com/Rubicon%20Underground/Default.htm#Paddington/My Vacation Balance.htm' target="_blank">Vacation Balance</a></li>
        <li><a href='https://docs.google.com/forms/d/e/1FAIpQLScIiTG5lRcWIDNJqVwxdqg6pdCToIOV3JMsfTJAdqcUMv7z1A/viewform?fbzx=-4212457061048502630' target="_blank">Flex Time Request</a></li>
        <li><a href='https://fs.rubicon.com/Rubicon%20Underground/Default.htm#Chancellor of the Exchequer/Individual Time Analysis.htm%3FTocPath%3DChancellor%2520of%2520the%2520Exchequer%7C_____4' target="_blank">Big Brother</a></li>
      </ul>
    </div>
  );
};
