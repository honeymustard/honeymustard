import React from 'react';
import API from 'api';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import CertificationItem from 'components/Items/CertificationItem';
import Post from 'components/Post';

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
          <Post id="5ab75a39d1c89310cb19c3f8" />
        </section>
      </Layout>
    );
  }
}

export default CertificationsPage;
