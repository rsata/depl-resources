import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './card.scss';

export class Card extends Component {
  render() {
    return(
      <div>
        <h1 styleName='header'>Hello World</h1>
      </div>
    );
  }
}

export default CSSModules(Card, styles);
