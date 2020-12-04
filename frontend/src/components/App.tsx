import React from 'react';
import LoginPage from '@Components/pages/Login';
import HomePage from '@Components/pages/Home';
import AwayPage from '@Components/pages/Away';
import NotFound from '@Components/pages/NotFound';
import OAuthCallbackPage from '@Pages/OAuthCallbackPage';
import PrivateRoute from '@Components/UtilComponent/PrivateRouter';
import GlobalThemeProvider from '@Styles/GlobalThemeProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <GlobalThemeProvider>
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <HomePage />
        </PrivateRoute>
        <PrivateRoute exact path="/away">
          <AwayPage />
        </PrivateRoute>
        <Route path="/login/oauthcallback" component={OAuthCallbackPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </GlobalThemeProvider>
);

export default App;
