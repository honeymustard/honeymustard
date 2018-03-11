import React from 'react';
import API from 'api';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import JobItem from 'components/Items/JobItem';

class JobsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount() {
    new API().get('jobs')
      .then(data => this.setState({items: data}))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Layout>
        <section className="column-1">
          <Archive items={this.state.items} component={JobItem} />
        </section>

        <section className="column-2">
          <h2>Jobs</h2>
        </section>
      </Layout>
    );
  }
}

export default JobsPage;
