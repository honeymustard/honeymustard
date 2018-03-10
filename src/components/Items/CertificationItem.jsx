import React from 'react';
import { formatDate } from 'utils/time';
import TechList from 'components/Lists/TechList';

import './list-item.scss';
import './certification-item.scss';

const CertificationItem = ({item}) => (
  <li className="list-item" key={item._id} id={item.slug}>
    <h3 className="list-item-title">
      <a target="_blank" href={item.url}>{item.name}</a>
    </h3>

    <span className="list-item-date">
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
