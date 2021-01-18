import React from 'react';
import GitHubLogo from 'images/GitHub.png';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import Modal from '.';

export default {
  title: 'Organisms/Modal',
  component: Modal,
};

export const Default = () => (
  <GlobalThemeProvider>
    <Modal

    />
  </GlobalThemeProvider>
);
