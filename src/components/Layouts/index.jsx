import React from 'react';

import Head from 'components/Head';
import Main from 'components/Main';
import Foot from 'components/Foot';

class LayoutHorse extends React.Component {

    render() {
        return (
            <div className="layout">
                <Head />
                Horse of course!
                <Foot />
            </div>
        );
    }
};

class Layout extends React.Component {

    render() {
        return (
            <div className="layout">
                <Head />
                <Main {...this.props} />
                <Foot />
            </div>
        );
    }
};

export { Layout, LayoutHorse };
