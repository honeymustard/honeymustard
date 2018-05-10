import React from 'react';
import API from 'api';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import JobItem from 'components/Items/JobItem';
import Post from 'components/Post';
import * as APIService from 'services/APIService';

const JobsPage = () => (
  <APIService.Consumer>
    {api => (
      <Layout>
        <section className="column-1">
          <Archive api={api} postType="jobs" component={JobItem} />
        </section>

        <section className="column-2">
          <Post id="5ab75aedd1c89310cb19c3f9" api={api} />
        </section>
      </Layout>
    )}
  </APIService.Consumer>
);

export default JobsPage;
