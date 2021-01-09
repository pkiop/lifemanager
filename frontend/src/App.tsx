import React, { Component } from 'react';
import LoginPage from 'pages/Login';
import NotFound from 'pages/NotFound';
import MainPage from 'pages/Main';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withAuthenticator } from 'aws-amplify-react';

function App() {
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={withAuthenticator(MainPage, false, [<LoginPage />])} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
}

export default App;
