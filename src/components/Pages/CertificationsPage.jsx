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

    let data = localStorage.getItem('api-certifications');

    if (data) {
      this.setState({items: JSON.parse(data)});
    } else {
      fetch(this.route, {
        Accept: 'application/json',
      })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem('api-certifications', JSON.stringify(data));
        this.setState({items: data});
      })
      .catch(error => console.log(error));
    }
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
