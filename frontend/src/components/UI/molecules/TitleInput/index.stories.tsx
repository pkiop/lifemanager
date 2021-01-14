import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import TitleInput from '.';

export default {
  title: 'Molecules/TitleInput',
  component: TitleInput,
};

export function HELLO() {
  return (
    <GlobalThemeProvider>
      <TitleInput text={'Title'} value={'HELLO'} />
    </GlobalThemeProvider>
  );
}
