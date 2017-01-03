import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './main.scss';

class Jira extends React.Component{
  render() {
    return(
      <div styleName='wrapper'>
        <a href='https://jira.rubicon.com/issues/?filter=-1' target='_blank'>My Jira Tasks</a>
      </div>
    );
  }
}

export default CSSModules(Jira, styles);
