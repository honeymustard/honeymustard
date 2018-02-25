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

  compare(a, b) {
    return new Date(a.startDate).getTime() < new Date(b.startDate).getTime();
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
        <Archive items={this.state.items} component={EducationItem} />
      </Layout>
    );
  }
}

export default EducationPage;
