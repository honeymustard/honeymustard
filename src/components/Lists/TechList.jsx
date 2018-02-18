import React from 'react';

import './tech-list.scss';

const TechList = ({list}) => (
  list.length > 0 ?
    <ul className="tech-list">
      {list.map(item => (
        <li className="tech-item" key={item}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  : ''
);

export default TechList;
