import React from 'react';

export const Card = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {props.data.map(i => {
          return <li key={i.id}>{i.title}</li>
        })}
      </ul>
    </div>
  )
}
