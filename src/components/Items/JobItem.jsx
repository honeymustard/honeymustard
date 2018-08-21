import React from 'react';
import TechList from 'components/Lists/TechList';
import DNIcon from 'components/Icons/DN';
import DekodeIcon from 'components/Icons/Dekode';
import { formatDate } from 'utils/time';

import './list-item.scss';
import './job-item.scss';

const JobIcon = ({ name }) => {
  switch (name) {
    case 'dagens-naeringsliv': return <DNIcon />;
    case 'dekode': return <DekodeIcon />;
  }
};

const JobItem = ({item}) => (
  <li className="list-item" key={item._id} name={item.slug}>
    <div className="list-item-head">
      <div className="list-item-image">
        <a target="_blank" href={item.url}>
          <JobIcon name={item.slug} />
        </a>
      </div>
      <div className="list-item-cont">
        <h3 className="list-item-title">
          <a target="_blank" href={item.url}>
            {item.company}
          </a>
        </h3>

        <span className="list-item-date">
          {formatDate(item.startDate)} -
          {item.endDate ? formatDate(item.endDate) : 'Present'}
        </span>
      </div>
    </div>

    <p>{item.tagline}</p>
    <TechList list={item.technologies} />
  </li>
);

export default JobItem;
