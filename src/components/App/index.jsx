import React from 'react';
import Layout from 'components/Layout';
import Main from 'components/Main';
import Head from 'components/Head';
import Foot from 'components/Foot';

import 'normalize.css';
import 'components/App/App.scss';

/**
 * The core App component.
 */
class App extends React.Component {

    render() {
        return (
            <Layout>
                <Head />
                <Main />
                <Foot />
            </Layout>
        );
    }
};

export default App;
