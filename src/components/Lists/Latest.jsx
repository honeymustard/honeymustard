import React from 'react';
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

    if (!this.loadData('job')) {
      fetch('/api/jobs?limit=1', {
        Accept: 'application/json'
      }).then(data => data.json())
        .then(data => this.saveData('job', data));
    }

    if (!this.loadData('education')) {
      fetch('/api/education?limit=1', {
        Accept: 'application/json'
      }).then(data => data.json())
        .then(data => this.saveData('education', data));
    }

    if (!this.loadData('certification')) {
      fetch('/api/certifications?limit=1', {
        Accept: 'application/json',
      }).then(data => data.json())
        .then(data => this.saveData('certification', data));
    }
  }

  loadData(key) {
    let data = localStorage.getItem(`latest-${key}`);

    if (data) {
      this.setState({[key]: JSON.parse(data)[0]});
    }

    return data !== null;
  }

  saveData(key, data) {
    if (data.length) {
      localStorage.setItem(`latest-${key}`, JSON.stringify(data));
      this.setState({key: data[0]});
    }
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
