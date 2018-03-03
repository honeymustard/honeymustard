import React from 'react';
import { formatDate } from 'utils/time';
import TechList from 'components/Lists/TechList';

import './job-item.scss';
import './certification-item.scss';

const CertificationItem = ({item}) => (
  <li className="job-item" key={item._id} id={item.slug}>
    <h3 className="job-item-title">
      <a target="_blank" href={item.url}>{item.name}</a>
    </h3>

    <span className="job-date">
      {formatDate(item.date)}
    </span>

    <p>{item.tagline}</p>

    <span className="certification-authority">
      Authority: {item.authority}
    </span>

    <TechList list={item.technologies} />
  </li>
);

export default CertificationItem;
