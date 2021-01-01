import React, { useState, useEffect } from 'react';
import GitHubLogo from 'images/GitHub.png';
import OAuthLogin from 'components/UI/molecules/OAuthLogin';
import MainTemplate from 'components/templates/MainTemplate';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth, Hub } from 'aws-amplify';

const googleLoginOnClick = () => Auth.federatedSignIn({
  provider: CognitoHostedUIIdentityProvider.Google,
});

const facebookLoginOnClick = () => Auth.federatedSignIn({
  provider: CognitoHostedUIIdentityProvider.Facebook,
});

const loginOnClick = () => Auth.federatedSignIn();

const App = ({ className }: any) => {
  const [loginState, setLoginState] = useState<any>({ user: null, customState: null });
  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
      case 'signIn':
        setLoginState({ user: data });
        break;
      case 'signOut':
        setLoginState({ user: null });
        break;
      case 'customOAuthState':
        console.log('customOAuthState');
        setLoginState({ customState: data });
        break;
      default:
      }
    });

    Auth.currentAuthenticatedUser()
      .then((user) => setLoginState({ user }))
      .catch(() => console.log('Not signed in'));
  }, []);

  const { user } = loginState;
  console.log('user :: ', user);

  const contents = (
    <>
      <OAuthLogin
        icon={GitHubLogo}
        ButtonTitle={'Login With Google'}
        onClick={googleLoginOnClick}
      />
      <OAuthLogin
        icon={GitHubLogo}
        ButtonTitle={'Login With Facebook'}
        onClick={facebookLoginOnClick}
      />
      <OAuthLogin
        icon={GitHubLogo}
        ButtonTitle={'Login'}
        onClick={loginOnClick}
      />
    </>
  );
  return <MainTemplate contents={contents} className={className} />;
};

export default App;
