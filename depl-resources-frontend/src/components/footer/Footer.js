import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './footer.scss';

const Footer = (props) => {
  return (
    <div styleName='footer'>
      <h1>Footer</h1>
    </div>
  );
};

export default CSSModules(Footer, styles);
