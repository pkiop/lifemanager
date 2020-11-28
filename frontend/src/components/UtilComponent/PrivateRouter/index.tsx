import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import { userStore } from '@Stores/user';
import { getCookie, deleteCookie } from '@Utils/cookie';

const PrivateRoute = ({ children, ...rest }: any) => {
  const accessTokenInCookie = getCookie('accessToken');
  if (accessTokenInCookie) {
    deleteCookie('accessToken');
    localStorage.setItem('accessToken', accessTokenInCookie);
  }

  if (!localStorage.getItem('accessToken')) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: '/' },
        }}
      />
    );
  }

  const config = {
    headers: {
      Authorization: `bearer ${localStorage.getItem('accessToken')}`,
      'User-Agent': 'Login-App',
    },
  };
  axios(`${process.env.APISERVER_HOST}/api/auth/github/username`, config)
    .then((res) => {
      userStore.logIn({ username: res.data });
    })
    .catch((err) => {
      console.log('err : ', err);
    });

  return (
    <Route
      {...rest}
      render={({ location }) => (userStore.data.username !== 'noUser' ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))
      }
    />
  );
};

export default PrivateRoute;
