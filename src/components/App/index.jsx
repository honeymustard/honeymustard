import 'normalize.css';
import 'components/App/app.scss';

import React from 'react';
import Location from 'containers/Location';
import * as APIService from 'services/APIService';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  IndexPage,
  JobsPage,
  MissingPage,
  EducationPage,
  CertificationsPage
} from 'components/Pages';

/**
 * The core App component.
 */
const App = () => (
  <Router>
    <APIService.Provider>
      <Location>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/jobs" component={JobsPage} />
          <Route exact path="/education" component={EducationPage} />
          <Route exact path="/certifications" component={CertificationsPage} />
          <Route path="*" component={MissingPage} />
        </Switch>
      </Location>
    </APIService.Provider>
  </Router>
);

export default App;
