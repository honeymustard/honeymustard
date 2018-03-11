import React from 'react';
import API from 'api';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import CertificationItem from 'components/Items/CertificationItem';

class CertificationsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount() {
    new API().get('certifications')
      .then(data => this.setState({items: data}))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Layout>
        <section className="column-1">
          <Archive items={this.state.items} component={CertificationItem} />
        </section>

        <section className="column-2">
          <h2>Certifications</h2>
          <p>A list of online certifications I have taken.</p>
        </section>
      </Layout>
    );
  }
}

export default CertificationsPage;
