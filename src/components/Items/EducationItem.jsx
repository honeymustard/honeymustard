import React from 'react';
import TechList from 'components/Lists/TechList';

import './job-item.scss';

const EducationItem = ({item}) => (
  <li className="job-item" key={item._id}>
    <h3 className="job-item-title">
      <a target="_blank" href={item.url}>
        {item.institution}
      </a>
    </h3>
    <p>{item.tagline}</p>
    <TechList list={item.technologies} />
  </li>
);

export default EducationItem;
