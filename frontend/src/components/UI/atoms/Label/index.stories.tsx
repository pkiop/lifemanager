import React from 'react';
import Label from './index';

export default {
  title: 'Atoms / Label',
  component: Label,
};

export const HELLO = () => {
  const subTitle = 'HELLO';
  return (
    <Label
      labelName={'red'}
      color="red"
      onClick={() => {
        alert(subTitle);
      }}
    />
  );
};
