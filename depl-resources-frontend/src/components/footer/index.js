import React from 'react';
import Jira from './jira';
import CSSModules from 'react-css-modules';
import styles from './footer.scss';

const Footer = (props) => {
  return (
    <div styleName='footer'>
      <ul>
        <li><a href='https://fs.rubicon.com/Rubicon%20Underground/Default.htm' target='_blank'>Facebook</a></li>
        <li><a href='https://fs.rubicon.com/Rubicon%20Underground/Default.htm#BuckinghamPalace/Phone List.htm%3FTocPath%3DBuckingham%2520Palace%7C_____5' target='_blank'>Phone List</a></li>
        <li><Jira /></li>
        <li>Onboarding</li>
      </ul>
    </div>
  );
};

export default CSSModules(Footer, styles);
