import React from 'react';

const AntiBurger = () => (
  <svg className="anti-burger" viewBox="0 0 100 100" x="0.5" y="0.5">
    <polygon points="15,0 100,85 85,100 0,15" className="anti-burger-line" />
    <polygon points="0,85 85,0 100,15 15,100" className="anti-burger-line" />
  </svg>
)

export default AntiBurger;
