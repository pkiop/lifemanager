import React from 'react';
import GitHubLogo from 'images/GitHub.png';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import OAuthLogin from '.';

export default {
  title: 'Molecules/OAuthLogin',
  component: OAuthLogin,
};

export const GitHubLogin = () => (
  <GlobalThemeProvider>
    <OAuthLogin
      onClick={() => {
        alert('login github');
      }}
      icon={GitHubLogo}
      ButtonTitle={'Login With GitHub'}
    />
  </GlobalThemeProvider>
);
