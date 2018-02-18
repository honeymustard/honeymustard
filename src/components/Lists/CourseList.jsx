import React from 'react';
import TechList from './TechList';


const CourseList = ({list}) => (
  list.length > 0 ?
    <ul className="course-list">
      <h4>Course list</h4>
      {list.map(item => (
        <li className="course-item" key={item.code}>
          <h6 className="course-title">
            {item.name}
          </h6>

          <TechList list={item.technologies} />
        </li>
      ))}
    </ul>
  : ''
);

export default CourseList;
