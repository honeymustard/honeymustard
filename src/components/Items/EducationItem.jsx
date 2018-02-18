import React from 'react';
import CourseList from 'components/Lists/CourseList';

import './job-item.scss';

const EducationItem = ({item}) => (
  <li className="job-item" key={item._id}>
    <h3 className="job-item-title">
      <a href={item.url}>
        {item.institution}
      </a>
    </h3>
    <p>{item.tagline}</p>
    <CourseList list={item.courses} />
  </li>
);

export default EducationItem;
