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

    let data = localStorage.getItem('api-jobs');

    if (data) {
      this.setState({items: JSON.parse(data)});
    } else {
      fetch(this.route, {
        Accept: 'application/json',
      })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem('api-jobs', JSON.stringify(data));
        this.setState({items: data});
      })
      .catch(error => console.log(error));
    }
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
