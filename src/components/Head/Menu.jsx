import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Burger from 'components/Icons/Burger';
import AntiBurger from 'components/Icons/AntiBurger';

import 'components/Head/menu.scss';

let button = null;

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  classes() {
    return [
      'menu',
      this.props.open ? 'has-trans' : '',
      this.props.open ? 'is-open' : '',
    ].join(' ');
  }

  toggle() {
    this.props.toggle();
    button.blur();
  }

  render() {
    return (
      <nav className={this.classes()}>
        <div className="grid-row menu-row menu-top">
          <div className="menu-col menu-col-logo">
            <img className="menu-logo" src="/static/honeymustard.svg" />
          </div>
          <div className="menu-col menu-col-burger">
            <button ref={e => button = e} onClick={this.toggle.bind(this)} className="menu-burger">
              {this.props.open ? <AntiBurger/> : <Burger/>}
            </button>
          </div>
        </div>

        <div className="menu-links grid-row">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/jobs/">Jobs</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Menu;
