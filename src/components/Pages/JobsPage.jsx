import React from 'react';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import JobItem from 'components/Items/JobItem';

class JobsPage extends React.Component {

  constructor(props) {
    super(props);

    this.route = '/api/jobs';
    this.state = {items: []};
  }

  componentDidMount() {

    fetch(this.route, {
      Accept: 'application/json',
    })
    .then(resp => resp.json())
    .then(data => this.setState({items: data}))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <Layout>
        <Archive items={this.state.items} component={JobItem} />
      </Layout>
    );
  }
}

export default JobsPage;
