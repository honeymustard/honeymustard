import React from 'react';
import { formatDate } from 'utils/time';

import './job-item.scss';

const CertificationItem = ({item}) => (
  <li className="job-item" key={item._id}>
    <h3 className="job-item-title">
      <a target="_blank" href={item.url}>{item.name}</a>
    </h3>

    <span className="job-date">
      {formatDate(item.date)}
    </span>

    <p>{item.tagline}</p>
  </li>
);

export default CertificationItem;
