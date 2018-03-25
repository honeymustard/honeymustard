import React from 'react';
import { Layout } from 'components/Layouts';
import Latest from 'components/Lists/Latest';
import Post from 'components/Post';

const IndexPage = () => (
  <Layout>
    <section className="column-1">
      <Latest />
    </section>

    <section className="column-2">
      <Post id="5ab6ac71d1c89310cb19c3f6" />
    </section>
  </Layout>
);

export default IndexPage;
