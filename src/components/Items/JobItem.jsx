import React from 'react';

import './job-item.scss';

const JobItem = ({item}) => (
  <li className="job-item" key={item._id}>
    {console.log(item)}
    <h3 className="job-item-title">
      <a href={item.url}>
        {item.company}
      </a>
    </h3>
    <p>{item.tagline}</p>
  </li>
);

export default JobItem;
