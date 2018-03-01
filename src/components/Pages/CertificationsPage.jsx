import React from 'react';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import CertificationItem from 'components/Items/CertificationItem';

class CertificationsPage extends React.Component {

  constructor(props) {
    super(props);

    this.route = '/api/certifications';
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
        <Archive items={this.state.items} component={CertificationItem} />
      </Layout>
    );
  }
}

export default CertificationsPage;
