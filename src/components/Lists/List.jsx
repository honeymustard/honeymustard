import React from 'react';

import './list.scss';

const List = ({items}) => (
  items.length > 0 ?
    <ul className="list-regular">
      {items.map(item => (
        <li className="list-item" key={item.title}>
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
