import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'components/Layouts';
import { IndexPage, MissingPage } from 'components/Pages';
import Archive from 'containers/Archive';
import JobItem from 'components/Items/JobItem';

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
          <Route exact path="/jobs">
            <Layout>
              <Archive route="/api/jobs" component={JobItem} />
            </Layout>
          </Route>
          <Route path="*" component={MissingPage} />
        </Switch>
      </Router>
    );
  }
};

export default App;
