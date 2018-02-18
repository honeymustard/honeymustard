import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  IndexPage,
  JobsPage,
  MissingPage,
  EducationPage
} from 'components/Pages';

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
          <Route exact path="/jobs" component={JobsPage} />
          <Route exact path="/education" component={EducationPage} />
          <Route path="*" component={MissingPage} />
        </Switch>
      </Router>
    );
  }
};

export default App;
