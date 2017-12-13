import React from 'react';

const JobItem = (props) => (
  <li key={props.item._id}>
    <h3>{props.item.company}</h3>
  </li>
);

export default JobItem;
