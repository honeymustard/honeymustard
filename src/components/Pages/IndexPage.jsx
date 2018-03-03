import React from 'react';
import { Layout } from 'components/Layouts';
import Latest from 'components/Lists/Latest';

const IndexPage = () => (
  <Layout>
    <section className="column-1">
      <Latest limit="1" />
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

export default IndexPage;
