import React from 'react';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import EducationItem from 'components/Items/EducationItem';

class EducationPage extends React.Component {

  constructor(props) {
    super(props);

    this.route = '/api/education';
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
        <Archive items={this.state.items} component={EducationItem} />
      </Layout>
    );
  }
}

export default EducationPage;
