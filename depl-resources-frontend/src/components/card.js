import React from 'react';
import { CardItemLink } from './CardItemLink';
import { CardItem } from './CardItem';

export const Card = (props) => {
  return (
    <li className='DeploymentDisplayCard'>
      <h3>{props.title}</h3>
      <ul>
        {props.data.map(i => {
          if (i.url === '') return <li key={i.id}><CardItem title={i.title} data={i} /></li>
          return <li key={i.id}><CardItemLink title={i.title} url={i.url} /></li>
        })}
      </ul>
    </li>
  )
}
