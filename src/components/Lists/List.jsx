import React from 'react';

import './list.scss';

const List = ({list}) => (
  list.length > 0 ?
    <ul className="list-regular">
      {list.map(item => (
        <li className="list-item">
          <h4 className="list-title">
            {item.title}
          </h4>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  : ''
);

export default List;
