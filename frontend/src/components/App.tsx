import React, { FC } from 'react';
import LoginPage from '@Components/pages/Login';
import HomePage from '@Components/pages/Home';
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
        <Route path="login">
          <LoginPage />
        </Route>
        <Route path="">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
