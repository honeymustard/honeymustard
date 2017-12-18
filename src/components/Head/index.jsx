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
      <header className="head" onKeyUp={this.keyUp.bind(this)}>
        <div className="area">
          <nav className={'menu ' + (this.state.open ? 'is-open' : 'is-closed')}>
            <div id="logo">
              <img src="/static/honeymustard.svg" />
            </div>

            <button onClick={this.toggle.bind(this)} className="menu-trigger"></button>

            <div className="menu-triggee">
              <ul className="menu-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/jobs/">Jobs</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
};

export default Head;
