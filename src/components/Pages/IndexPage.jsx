import React from 'react';
import { Layout } from 'components/Layouts';

class IndexPage extends React.Component {

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

    return (
      <Layout>
        <section className="column-1">
          <h2>Latest in: Jobs</h2>
          <h3><a target="_blank" href={job.url}>{job.company}</a></h3>
          <p>{job.tagline}</p>
          <br />
          <br />
          <h2>Latest in: Education</h2>
          <h3><a target="_blank" href={education.url}>{education.institution}</a></h3>
          <p>{education.tagline}</p>
          <br />
          <br />
          <h2>Latest in: Certifications</h2>
          <h3><a href={certification.url}>{certification.name}</a></h3>
          <p>{certification.tagline}</p>
        </section>

        <section className="column-2">
          <h2>Introduction</h2>
          <p>I'm a developer living in Oslo. I work for Dagens Næringsliv &mdash;
          one of the biggest newspapers in Norway.</p>

          <p>I currently specialize in JavaScript and web applications primarily
          using <a href="https://vuejs.org/">Vue.js</a> with ES6 and Webpack.</p>

          <p>At home I enjoy working with the MERN stack, though I'm hoping
          to apply some more Scala in the future.</p>
        </section>
      </Layout>
    );
  }
}

export default IndexPage;
