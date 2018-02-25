import React from 'react';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import CertificationItem from 'components/Items/CertificationItem';

const CertificationsPage = () => (
  <Layout>
    <Archive route="/api/certifications" component={CertificationItem} />
  </Layout>
);

export default CertificationsPage;
