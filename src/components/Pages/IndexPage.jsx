import React from 'react';
import { Layout } from 'components/Layouts';
import Latest from 'components/Lists/Latest';
import Post from 'components/Post';
import * as APIService from 'services/APIService';

const IndexPage = () => (
  <APIService.Consumer>
    {api =>
      <Layout>
        <section className="column-1">
          <Latest api={api} />
        </section>

        <section className="column-2">
          <Post id="5ab6ac71d1c89310cb19c3f6" api={api} />
        </section>
      </Layout>
    }
  </APIService.Consumer>
);

export default IndexPage;
