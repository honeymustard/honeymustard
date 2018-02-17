import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'components/Head/menu.scss';

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

  render() {
    return (
      <nav className={this.classes()}>
        <div className="grid-row menu-row menu-top">
          <div className="menu-col menu-col-logo">
            <img className="menu-logo" src="/static/honeymustard.svg" />
          </div>
          <div className="menu-col menu-col-burger">
            <button onClick={this.props.toggle} className="menu-burger"></button>
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
