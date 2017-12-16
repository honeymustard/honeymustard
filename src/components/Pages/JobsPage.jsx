import React from 'react';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import JobItem from 'components/Items/JobItem';

const JobsPage = () => (
  <Layout>
    <Archive route="/api/jobs" component={JobItem} />
  </Layout>
);

export default JobsPage;
