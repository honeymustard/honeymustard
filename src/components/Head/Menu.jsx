import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
      <nav className={`menu ${this.props.classes}`}>
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
  toggle: PropTypes.func.isRequired,
  classes: PropTypes.string.isRequired,
};

export default withRouter(Menu);
