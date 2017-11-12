import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout, LayoutHorse } from 'components/Layouts';
import { Index, Missing } from 'components/Pages';

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
                    <Route exact path="/" component={Index} />
                    <Route path="*" component={Missing} />
                </Switch>
            </Router>
        );
    }
};

export default App;
