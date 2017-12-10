import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'components/Layouts';
import { IndexPage, MissingPage } from 'components/Pages';
import JobArchive from 'components/Archives/jobArchive';

import 'normalize.css';
import 'components/App/app.scss';

/**
 * The core App component.
 */
class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route exact path="/jobs" component={JobArchive} />
                    <Route path="*" component={MissingPage} />
                </Switch>
            </Router>
        );
    }
};

export default App;
