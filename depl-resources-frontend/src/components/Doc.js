import React from 'react';
import { Link } from 'react-router';

// This should be a container - gets its value from the state

// if(doc._id !== this.props.params.id) return null;
//       return this.setState({
//         title: doc.title,
//         entry: doc.entry
//       });

export const Doc = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.data.title}</h1>
    </div>
  )
}
