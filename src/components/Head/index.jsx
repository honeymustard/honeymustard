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

    buttonClick(e) {
        this.setState({open: !this.state.open});
    }

    toggleClass(state) {
        return state.open ? 'menu-open' : '';
    }

    render() {
        return (
            <header className="head">
              <div className="area">
                <nav className={'menu ' + this.toggleClass(this.state)}>
                  <div id="logo">
                    <img src="/" />
                  </div>

                  <button onClick={this.buttonClick.bind(this)} className="menu-trigger"></button>

                  <div className="menu-triggee">
                      <ul className="menu-list">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/horse">Horse</Link></li>
                      </ul>
                  </div>
                </nav>
              </div>
            </header>
        );
    }
};

export default Head;
