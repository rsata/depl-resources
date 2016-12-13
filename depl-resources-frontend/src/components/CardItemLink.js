import React from 'react';

export const CardItemLink = (props) => {
  return (
    <div>
      <a href={props.url} target='_blank'>{props.title}</a>
    </div>
  )
}
