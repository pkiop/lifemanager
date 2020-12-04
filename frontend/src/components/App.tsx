import React from 'react';
import LoginPage from '@Components/pages/Login';
import NotFound from '@Components/pages/NotFound';
import OAuthCallbackPage from '@Pages/OAuthCallbackPage';
import GlobalThemeProvider from '@Styles/GlobalThemeProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  console.log('app start2');
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/oauthcallback" component={OAuthCallbackPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export default App;
