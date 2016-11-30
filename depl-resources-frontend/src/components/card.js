import React from 'react';

export const Card = (props) => {
  console.log(props)
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.data.map(i => {
          return <li key={i.id}>{i.title}</li>
        })}
      </ul>
    </div>
  )
}
