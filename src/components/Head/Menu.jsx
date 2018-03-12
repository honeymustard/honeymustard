import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Burger from 'components/Icons/Burger';
import AntiBurger from 'components/Icons/AntiBurger';
import { withRouter } from 'react-router';

import 'components/Head/menu.scss';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.button = null;
    this.route = this.props.match.path;

    this.state = {
      links: [
        { path: '/', label: 'Home' },
        { path: '/jobs/', label: 'Jobs' },
        { path: '/education/', label: 'Education' },
        { path: '/certifications/', label: 'Certifications' },
      ]
    };
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
    this.button.blur();
  }

  select() {
    if (this.props.match.path === this.route) {
      this.props.toggle();
    }
  }

  render() {
    return (
      <nav className={this.classes()}>
        <div className="grid-row menu-row menu-top">
          <div className="menu-col menu-col-logo">
            <Link to="/">
              <img className="menu-logo" src="/static/honeymustard.svg" />
            </Link>
          </div>
          <div className="menu-col menu-col-burger">
            <button ref={e => this.button = e} onClick={this.toggle.bind(this)} className="menu-burger">
              {this.props.open ? <AntiBurger/> : <Burger/>}
            </button>
          </div>
        </div>

        <div className="menu-links grid-row">
          <ul className="menu-list">
            {this.state.links.map(link => (
              <li key={link.label} className="menu-item">
                <Link onClick={this.select.bind(this)} to={{pathname: link.path}}>
                  {link.label}
                </Link>
              </li>
            ))}
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

export default withRouter(Menu);
