import React, { useState, useEffect } from 'react';
import GoogleLogo from 'images/googlelogo.png';
import LifemanagerLogo from 'images/LifemanagerMainLogo.png';
import OAuthLogin from 'components/UI/molecules/OAuthLogin';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth, Hub } from 'aws-amplify';
import * as S from './style';

const googleLoginOnClick = () => Auth.federatedSignIn({
  provider: CognitoHostedUIIdentityProvider.Google,
});

const App = ({ className }: any) => {
  const [loginState, setLoginState] = useState<any>({ user: null, customState: null });

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
      case 'signIn':
        setLoginState({ user: data });
        window.location.href = '/';
        break;
      case 'signOut':
        setLoginState({ user: null });
        break;
      case 'customOAuthState':
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

  return (
    <S.LoginPage className={className}>
      <S.Img src={LifemanagerLogo}/>
      <OAuthLogin
        icon={GoogleLogo}
        ButtonTitle={'Login With Google'}
        onClick={googleLoginOnClick}
      />
    </S.LoginPage>
  );
};

export default App;
