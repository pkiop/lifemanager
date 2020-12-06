import React from 'react';
import GitHubLogo from 'images/GitHub.png';
import Img from './index';

export default {
  title: 'Atoms / Img',
  component: Img,
};

export const GitHub = () => <Img src={GitHubLogo} />;
