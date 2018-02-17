import React from 'react';
import Menu from 'components/Head/Menu';

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

  classes() {
    return [
      'head',
      this.state.open ? 'has-trans' : '',
      this.state.open ? 'is-open' : ''
    ].join(' ');
  }

  render() {
    return (
      <header className={this.classes()} onKeyUp={this.keyUp.bind(this)}>
        <Menu open={this.state.open} toggle={this.toggle.bind(this)} />
      </header>
    );
  }
};

export default Head;
