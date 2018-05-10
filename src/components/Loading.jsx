import React from 'react';

import './loading.scss';

class Loading extends React.Component {

  render() {
    let classes = this.props.loading ? 'is-loading' : '';

    return (
      <div className="loading">
        <div className={`loading-bar ${classes}`}></div>
      </div>
    );
  }
}

export default Loading;
