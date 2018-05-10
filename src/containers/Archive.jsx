import React from 'react';
import { Layout } from 'components/Layouts';

/**
 * A generic archive container.
 */
class Archive extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  static get defaultProps() {
    return {
      className: "archive-items"
    };
  }

  componentDidMount() {
    this.props.api.get(this.props.postType)
      .then(data => this.setState({items: data}))
      .catch(console.log);
  }

  render() {

    let ListItem = this.props.component;

    if (this.state.items.length === 0) {
      return '';
    }

    return (
      <ul className={this.props.className}>
        {this.props.children}
        {this.state.items.map(item =>
          <ListItem key={item._id} item={item} />
        )}
      </ul>
    );
  }
}

export default Archive;
