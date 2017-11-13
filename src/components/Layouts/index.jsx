import React from 'react';
import Head from 'components/Head';
import Foot from 'components/Foot';
import Main from 'components/Main';

const Layout = (props) => (
    <div className="layout">
        <Head />
        <Main {...props} />
        <Foot />
    </div>
);

export { Layout };
