import React from 'react';
import { Link } from 'react-router';

// import { Resource } from './Resource';

export const CardItem = (props) => {
  return (
    <div>
      <Link to={`resource/${props.data.type}/${props.data.id}`}>{props.title}</Link>
    </div>
  )
}
