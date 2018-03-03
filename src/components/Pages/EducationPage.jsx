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

    let data = localStorage.getItem('api-education');

    if (data) {
      this.setState({items: JSON.parse(data)});
    } else {
      fetch(this.route, {
        Accept: 'application/json',
      })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem('api-education', JSON.stringify(data));
        this.setState({items: data});
      })
      .catch(error => console.log(error));
    }
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
