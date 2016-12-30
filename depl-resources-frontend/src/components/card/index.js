import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './card.scss';

// import { CardItemLink } from './CardItemLink';
// import { CardItem } from './CardItem';

const Card = (props) => {
  return (
    <li styleName='displayCard'>
      <h3 styleName='cardTitle'>{props.title}</h3>
      <ul>
        {props.data.map(i => {
          if (i.url === '') return <li key={i.title} styleName='cardSubListItem'><CardItem title={i.title} data={i} /></li>;
          return <li key={i.title} styleName='cardSubListItem'><CardItemLink title={i.title} url={i.url} /></li>;
        })}
      </ul>
    </li>
  );
};

const CardItem = (props) => {
  return (
    <div>
      <Link to={`resource/${props.data.type}/${props.data.id}`}>{props.title}</Link>
    </div>
  );
};

const CardItemLink = (props) => {
  return (
    <div>
      <a href={props.url} target='_blank'>{props.title}</a>
    </div>
  );
};


export default CSSModules(Card, styles);
