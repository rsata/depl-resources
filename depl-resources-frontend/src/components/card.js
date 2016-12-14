import React from 'react';
import { CardItemLink } from './CardItemLink';
import { CardItem } from './CardItem';

export const Card = (props) => {
  return (
    <li className='displayCard'>
      <h3 className='cardTitle'>{props.title}</h3>
      <ul className='cardSubList'>
        {props.data.map(i => {
          if (i.url === '') return <li key={i.id} className='cardSubListItem'><CardItem title={i.title} data={i} /></li>;
          return <li key={i.id} className='cardSubListItem'><CardItemLink title={i.title} url={i.url} /></li>;
        })}
      </ul>
    </li>
  );
};
