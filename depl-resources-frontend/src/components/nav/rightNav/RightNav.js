import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './main.scss';

class RightNav extends React.Component{
  componentDidMount() {
    this.props.getNavItems();
  }
  render() {
    return (
      <div styleName='wrapper'>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          {/* this.props.nav.sideNav */}
        </ul>
      </div>
    );
  }
};

export default CSSModules(RightNav, styles);
