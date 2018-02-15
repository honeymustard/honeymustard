import React from 'react';
import { Link } from 'react-router-dom';

import 'components/Head/head.scss';

class Head extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggle() {
    this.setState({open: !this.state.open});
  }

  close() {
    this.setState({open: false});
  }

  keyUp(e) {
    if (e.keyCode === 27) {
      this.close();
    }
  }

  openState() {
    return this.state.open ? 'is-open' : 'is-closed'
  }

  classes() {
    return [
      'head',
      this.state.open ? 'has-trans' : '',
      this.openState(),
    ].join(' ');
  }

  render() {
    return (
      <header className={this.classes()} onKeyUp={this.keyUp.bind(this)}>

        <nav className="menu">
          <div className="grid-row menu-row menu-top">
            <div className="menu-col menu-col-logo">
              <img className="menu-logo" src="/static/honeymustard.svg" />
            </div>
            <div className="menu-col menu-col-burger">
              <button onClick={this.toggle.bind(this)} className="menu-burger"></button>
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
      </header>
    );
  }
};

export default Head;
