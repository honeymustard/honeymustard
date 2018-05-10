import React from 'react';
import Loading from 'components/Loading';
import API from 'api';

const { Provider, Consumer } = React.createContext('api');

class APIProvider extends React.Component {

  constructor() {
    super();

    this.api = new API();
    this.start = 0;
    this.streams = 0;
    this.minTime = 800;

    this.state = {
      loading: false,
      api: {
        get: this.get.bind(this)
      }
    };
  }

  timeLeft() {
    let time = Date.now() - this.start;
    return time < this.minTime ? this.minTime - time : 0;
  }

  get(route) {
    if (!this.state.loading) {
      this.start = Date.now();
    }
    this.setState({loading: true});
    this.streams++;

    return this.api.get(route)
      .then(data => {
        if (--this.streams === 0) {
          setTimeout(() => {
            this.setState({loading: false});
          }, this.timeLeft());
        }

        return data;
      });
  }

  render() {
    return (
      <Provider value={this.state.api}>
        <Loading loading={this.state.loading} />
        {this.props.children}
      </Provider>
    );
  }
}

export {
  APIProvider as Provider,
  Consumer,
};
