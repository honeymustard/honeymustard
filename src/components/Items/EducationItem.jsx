import React from 'react';

import './job-item.scss';

const EducationItem = ({item}) => (
  <li className="job-item" key={item._id}>
    {console.log(item)}
    <h3 className="job-item-title">
      <a href={item.url}>
        {item.institution}
      </a>
    </h3>
    <p>{item.tagline}</p>

    {item.courses.length > 0 ?
      <ul clasName="course-list">
        <li className="course-item">
          <h4 className="course-title">
            {item.name}
          </h4>

          <p>{item.name}</p>

          <ul className="tech-list">
            {item.technologies.map(tech => (
              <li className="tech-item" key={tech}>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    : ''}
  </li>
);

export default EducationItem;
