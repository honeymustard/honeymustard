import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, LayoutHorse } from 'components/Layouts';

import 'normalize.css';
import 'components/App/app.scss';

/**
 * The core App component.
 */
class App extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Layout} />
                <Route exact path="/horse" component={LayoutHorse} />
            </Switch>
        );
    }
};

export default App;
