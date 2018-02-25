import React from 'react';
import { Layout } from 'components/Layouts';

/**
 * A generic archive container.
 */
class Archive extends React.Component {

  constructor(props) {
    super(props);
  }

  static get defaultProps() {
    return {
      className: "archive-items"
    };
  }

  render() {

    let ListItem = this.props.component;
    let items = this.props.items;

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
