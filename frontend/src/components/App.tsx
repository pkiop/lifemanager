import React, { FC } from 'react';
import LoginPage from '@Components/pages/Login';
import HomePage from '@Components/pages/Home';
import AwayPage from '@Components/pages/Away';
import NotFound from '@Components/pages/NotFound';
import PrivateRoute from '@Components/UtilComponent/PrivateRouter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const App: FC = () => (
  <>
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <HomePage />
        </PrivateRoute>
        <PrivateRoute exact path="/away">
          <AwayPage />
        </PrivateRoute>
        <Route path="/login" component={LoginPage}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
  </>
);

export default App;
