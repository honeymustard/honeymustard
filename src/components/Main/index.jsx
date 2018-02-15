import React from 'react';

import './main.scss';

const Main = (props) => (
  <main className="main grid-row">
    {props.children}
  </main>
);

export default Main;
