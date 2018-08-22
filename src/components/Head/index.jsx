import React from 'react';
import Logo from 'components/Head/Logo';
import Menu from 'components/Head/Menu';

import 'components/Head/head.scss';

class Head extends React.Component {

  constructor(props) {
    super(props);

    this.unmounted = false;

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
    if (this.state.toggling) return;

    this.setState({
      open: false,
      toggling: true,
    });

    setTimeout(() => {
      document.body.classList.remove('menu-active');

      !this.unmounted && this.setState({
        visible: false,
        trans: 'fade-in',
        toggling: false,
      });
    }, 600);
  }

  open() {
    if (this.state.toggling) return;

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
      document.body.classList.add('menu-active');
      !this.unmounted && this.setState({
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
    ].filter(e => e !== '').join(' ');
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    return (
      <header className="head" onKeyUp={this.keyUp.bind(this)}>
        <Logo open={this.state.open} toggle={this.toggle.bind(this)} />
        <Menu classes={this.classes()} toggle={this.toggle.bind(this)} />
      </header>
    );
  }
};

export default Head;