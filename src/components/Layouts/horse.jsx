import React from 'react';

import Head from 'components/Head';
import Foot from 'components/Foot';

class LayoutHorse extends React.Component {

    render() {
        return (
            <div className="layout">
                <Head />
                HORSE!
                <Foot />
            </div>
        );
    }
};

export default LayoutHorse;
