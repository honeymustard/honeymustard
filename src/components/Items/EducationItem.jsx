import React from 'react';
import TechList from 'components/Lists/TechList';
import { formatDate } from 'utils/time';

import './list-item.scss';

const EducationItem = ({item}) => (
  <li className="list-item" key={item._id} name={item.slug}>
    <h3 className="list-item-title">
      <a target="_blank" href={item.url}>
        {item.institution}
      </a>
    </h3>

    <span className="list-item-date">
      {formatDate(item.startDate)} -
      {item.endDate ? formatDate(item.endDate) : 'Present'}
    </span>

    <p>{item.tagline}</p>
    <TechList list={item.technologies} />
  </li>
);

export default EducationItem;
