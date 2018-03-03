import React from 'react';
import { Link } from 'react-router-dom';

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

    fetch('/api/jobs?limit=1', {
      Accept: 'application/json'
    }).then(data => data.json())
      .then(data => this.setState({'job': data[0]}));

    fetch('/api/education?limit=1', {
      Accept: 'application/json'
    }).then(data => data.json())
      .then(data => this.setState({'education': data[0]}));

    fetch('/api/certifications?limit=1', {
      Accept: 'application/json',
    }).then(data => data.json())
      .then(data => this.setState({'certification': data[0]}));
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
              <a href={'/jobs/#' + job.slug}>{job.company}</a>
            </h3>
            <p>{job.tagline}</p>
          </li>

          <li className="latest-item">
            <span className="latest-label">
              Latest in: <Link to="/education/">Education</Link>
            </span>
            <h3 className="latest-title">
              <a href={'/education/#' + education.slug}>{education.institution}</a>
            </h3>
            <p>{education.tagline}</p>
          </li>

          <li className="latest">
            <span className="latest-label">
              Latest in: <Link to="/certifications/">Certifications</Link>
            </span>
            <h3 className="latest-title">
              <a href={'/certifications/#' + certification.slug}>{certification.name}</a>
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
