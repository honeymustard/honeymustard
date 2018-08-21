import React from 'react';
import { Link } from 'react-router-dom';
import Burger from 'components/Icons/Burger';
import AntiBurger from 'components/Icons/AntiBurger';

class Logo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid-row head-row head-top">
        <div className="head-col head-col-logo">
          <Link to="/">
            <img className="head-logo" src="/static/honeymustard.svg" />
          </Link>
        </div>
        <div className="head-col head-col-burger">
          <button onClick={this.props.toggle} className="head-burger">
            {this.props.open ? <AntiBurger/> : <Burger/>}
          </button>
        </div>
      </div>
    );
  }
};

export default Logo;