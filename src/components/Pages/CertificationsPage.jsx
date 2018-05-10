import React from 'react';
import API from 'api';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import CertificationItem from 'components/Items/CertificationItem';
import Post from 'components/Post';
import * as APIService from 'services/APIService';

const CertificationsPage = () => (
  <APIService.Consumer>
    {api => (
      <Layout>
        <section className="column-1">
          <Archive api={api} postType="certifications" component={CertificationItem} />
        </section>

        <section className="column-2">
          <Post id="5ab75a39d1c89310cb19c3f8" api={api} />
        </section>
      </Layout>
    )}
  </APIService.Consumer>
);

export default CertificationsPage;
