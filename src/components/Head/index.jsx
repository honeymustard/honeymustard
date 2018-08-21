import React from 'react';
import Menu from 'components/Head/Menu';

import 'components/Head/head.scss';

class Head extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      visible: false,
      trans: 'fade-in',
      toggling: false,
    };
  }

  toggle() {
    if (this.state.toggling) return;

    if (this.state.open) {
      this.close();
    }
    else {
      this.open();
    }
  }

  close() {
    this.setState({
      open: false,
      toggling: true,
    });

    setTimeout(() => {
      this.setState({
        visible: false,
        trans: 'fade-in',
        toggling: false,
      });
    }, 600);
  }

  open() {
    this.setState({
      trans: 'fade-in',
      visible: true,
      toggling: true,
    });

    setTimeout(() => {
      this.setState({
        open: true,
      });
    }, 100);

    setTimeout(() => {
      this.setState({
        trans: 'fade-out',
        toggling: false,
      });
    }, 1000);
  }

  keyUp(e) {
    if (e.keyCode === 27) {
      this.close();
    }
  }

  classes() {
    return [
      this.state.visible ? 'is-visible' : '',
      this.state.open ? 'is-open' : '',
      this.state.trans,
    ].join(' ');
  }

  render() {
    return (
      <header className={`head ${this.classes()}`} onKeyUp={this.keyUp.bind(this)}>
        <Menu classes={this.classes()} open={this.state.open} toggle={this.toggle.bind(this)} />
      </header>
    );
  }
};

export default Head;
