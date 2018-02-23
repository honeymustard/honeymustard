import React from 'react';
import TechList from './TechList';

import './course-list.scss';

const CourseList = ({list}) => (
  list.length > 0 ?
    <ul className="course-list">
      {list.map(item => (
        <li className="course-item" key={item.code}>
          <h5 className="course-title">
            {item.name}
          </h5>
        </li>
      ))}
    </ul>
  : ''
);

export default CourseList;
