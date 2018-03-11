import React from 'react';
import API from 'api';
import { HashLink as Link } from 'react-router-hash-link';

import './latest.scss';

class Latest extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      job: {},
      education: {},
      certification: {},
    };
  }

  componentDidMount() {

    new API().get('jobs?limit=1')
      .then(data => this.setState({job: data[0]}))
      .catch(error => console.log(error));

    new API().get('education?limit=1')
      .then(data => this.setState({education: data[0]}))
      .catch(error => console.log(error));

    new API().get('certifications?limit=1')
      .then(data => this.setState({certification: data[0]}))
      .catch(error => console.log(error));
  }

  render() {
    let job = this.state.job;
    let education = this.state.education;
    let certification = this.state.certification;

    if (job.url && education.url && certification.url) {
      return (
        <ul className="latest-list">
          <li className="latest-item">
            <span className="latest-label">
              Latest in: <Link to="/jobs/">Jobs</Link>
            </span>
            <h3 className="latest-title">
              <Link to={'/jobs/#' + job.slug}>{job.company}</Link>
            </h3>
            <p>{job.tagline}</p>
          </li>

          <li className="latest-item">
            <span className="latest-label">
              Latest in: <Link to="/education/">Education</Link>
            </span>
            <h3 className="latest-title">
              <Link to={'/education/#' + education.slug}>{education.institution}</Link>
            </h3>
            <p>{education.tagline}</p>
          </li>

          <li className="latest">
            <span className="latest-label">
              Latest in: <Link to="/certifications/">Certifications</Link>
            </span>
            <h3 className="latest-title">
              <Link to={'/certifications/#' + certification.slug}>{certification.name}</Link>
            </h3>
            <p>{certification.tagline}</p>
          </li>
        </ul>
      );
    }

    return '';
  }
}

export default Latest;
