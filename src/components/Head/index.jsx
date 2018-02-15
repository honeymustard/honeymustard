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

  render() {
    return (
      <header className={'head ' + (this.state.open ? 'is-open' : 'is-closed')} onKeyUp={this.keyUp.bind(this)}>
        <nav className="menu grid-row">
          <div className="menu-row">
            <div className="menu-col menu-col-logo">
              <img className="menu-logo" src="/static/honeymustard.svg" />
            </div>
            <div className="menu-col menu-col-burger">
              <button onClick={this.toggle.bind(this)} className="menu-burger"></button>
            </div>
          </div>

          <div className="menu-links">
            <div className="grid-row">
              <ul className="menu-list">
                <li className="menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to="/jobs/">Jobs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
};

export default Head;
