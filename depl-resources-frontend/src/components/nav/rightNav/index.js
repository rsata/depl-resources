import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './rightNav.scss';

const RightNav = (props) => {
  return (
    <div styleName='wrapper'>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default CSSModules(RightNav, styles);
