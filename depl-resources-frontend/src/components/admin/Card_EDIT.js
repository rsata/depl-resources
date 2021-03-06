import React from 'react';
import CardItemEdit from './CardItem_EDIT';

export const CardEdit = (props) => {
  return (
    <div>
      <h3 style={{'margin': '10px 0'}}>{props.title}</h3>
      <ul>
        {props.data.map(i => {
          return <CardItemEdit key={i.title} title={i.title} data={i} updateDocs={props.updateDocs} removeDoc={props.removeDoc} />;
        })}
      </ul>
    </div>
  );
};
