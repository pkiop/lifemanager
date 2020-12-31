import React from 'react';
import LoginPage from 'pages/Login';
import NotFound from 'pages/NotFound';
import Main from 'pages/Main';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Amplify from 'aws-amplify';
import awsconfig from 'aws-exports';

Amplify.configure(awsconfig);

const App = () => {
  console.log('app start2');
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={Main} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export default App;
