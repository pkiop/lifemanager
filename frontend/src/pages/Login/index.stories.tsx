import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import LoginPage from '.';

export default {
  title: 'Page/Login',
  component: LoginPage,
};

export const Default = () => (
  <BrowserRouter>
    <GlobalThemeProvider>
      <LoginPage />
    </GlobalThemeProvider>
  </BrowserRouter>
);
