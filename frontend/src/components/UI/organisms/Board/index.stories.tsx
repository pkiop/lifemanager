import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import Board from '.';

export default {
  title: 'Organisms/Board',
  component: Board,
};

export const Default = () => (
  <GlobalThemeProvider>
    <Board goalTime={13}/>
  </GlobalThemeProvider>
);
