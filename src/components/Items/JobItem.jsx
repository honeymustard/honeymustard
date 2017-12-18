import React from 'react';

const JobItem = ({item}) => (
  <li key={item._id}>
    <h3>{item.company}</h3>
  </li>
);

export default JobItem;
