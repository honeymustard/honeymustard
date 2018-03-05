import React from 'react';
import { withRouter } from 'react-router';

const Location = ({match, location, history, children}) => {
  window.scrollTo(0, 0);
  return children;
}

export default withRouter(Location);
