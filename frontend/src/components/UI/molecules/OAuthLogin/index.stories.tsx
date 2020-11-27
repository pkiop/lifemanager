import React from 'react';
import GitHubLogo from '@Images/GitHub.png';
import OAuthLogin from '.';

export default {
  title: 'Molecules/OAuthLogin',
  component: OAuthLogin,
};

export const GitHubLogin = () => (
  <OAuthLogin
    onClick={() => {
      alert('login github');
    }}
    icon={GitHubLogo}
    ButtonTitle={'Login With GitHub'}
  />
);
