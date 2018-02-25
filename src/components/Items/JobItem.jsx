import React from 'react';
import TechList from 'components/Lists/TechList';

import './job-item.scss';

let pad = n => n < 10 ? `0${n}` : n;
let formatDate = isoDate => {
  let d = new Date(isoDate);

  return [
    pad(d.getDate()),
    pad(d.getMonth()+1),
    d.getFullYear(),
  ].join('.');
}

const JobItem = ({item}) => (
  <li className="job-item" key={item._id}>
    <h3 className="job-title">
      <a target="_blank" href={item.url}>
        {item.company}
      </a>
    </h3>

    <span className="job-date">
      {formatDate(item.startDate)} -
      {item.endDate ? formatDate(item.endDate) : 'Present'}
    </span>

    <p>{item.tagline}</p>

    <TechList list={item.technologies} />
  </li>
);

export default JobItem;
