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

  compare(a, b) {
    return new Date(a.date).getTime() < new Date(b.date).getTime();
  }

  componentDidMount() {

    fetch(this.route, {
      Accept: 'application/json',
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({items: data.sort(this.compare)});
    })
    .catch(error => {
      console.log(error);
    });
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
