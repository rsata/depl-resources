import React from 'react';

export const CardItemLink = (props) => {
  console.log(props)
  return (
    <div>
      <a href={props.url}>{props.title}</a>
    </div>
  )
}
