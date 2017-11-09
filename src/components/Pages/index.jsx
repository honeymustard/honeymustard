import React from 'react';
import { Layout } from 'components/Layouts';

const Index = () => (
    <Layout>
        <p>Index</p>
    </Layout>
);

const Missing = () => (
    <Layout>
        <p>404 not found</p>
    </Layout>
);

export { Index, Missing };
