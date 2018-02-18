import React from 'react';
import { Layout } from 'components/Layouts';
import Archive from 'containers/Archive';
import EducationItem from 'components/Items/EducationItem';

const EducationPage = () => (
  <Layout>
    <Archive route="/api/education" component={EducationItem} />
  </Layout>
);

export default EducationPage;
