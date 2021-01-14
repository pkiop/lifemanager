import React from 'react';
import Button from './index';

export default {
  title: 'Atoms / Button',
  component: Button,
};

export const HELLO = () => {
  const subTitle = 'HELLO';
  return <Button onClick={() => { alert(subTitle); }}>{subTitle}</Button>;
};
