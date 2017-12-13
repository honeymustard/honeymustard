import React from 'react';
import { Layout } from 'components/Layouts';

/**
 * A generic archive container.
 */
class Archive extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  static get defaultProps() {
    return {
      className: "archive-items"
    };
  }

  componentDidMount() {

    fetch(this.props.route, {
      Accept: 'application/json',
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({items: data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {

    let ListItem = this.props.component;
    let items = this.state.items;

    if (items.length === 0) {
      return '';
    }

    return (
      <ul className={this.props.className}>
        {this.props.children}
        {items.map(item =>
          <ListItem key={item._id} item={item} />
        )}
      </ul>
    );
  }
}

export default Archive;
