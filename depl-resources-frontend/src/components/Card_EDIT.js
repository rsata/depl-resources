import React from 'react';
import { CardItemEdit } from './CardItem_EDIT';

export const CardEdit = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.data.map(i => {
          return <CardItemEdit key={i.id} title={i.title} data={i} />
        })}
      </ul>
    </div>
  )
}
