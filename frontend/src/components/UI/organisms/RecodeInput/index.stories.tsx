import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import { ApolloProvider } from '@apollo/client';
import client from 'Apollo';
import RecodeInput from '.';

export default {
  title: 'Organisms/RecodeInput',
  component: RecodeInput,
};

const TestLabels1 = [
  {
    color: 'red',
    labelName: 'red',
  },
  {
    color: 'blue',
    labelName: 'blue',
  },
];

const TestLabelsForOverFlow = [
  {
    color: 'red',
    labelName: 'red',
  },
  {
    color: 'blue',
    labelName: 'blue',
  },
  {
    color: 'green',
    labelName: 'green',
  },
  {
    color: 'gray',
    labelName: 'gray',
  },
];

export const Default = () => (
  <ApolloProvider client={client as any}>
    <GlobalThemeProvider>
      <RecodeInput labelList={TestLabels1} recodeId={'abc'} />
    </GlobalThemeProvider>
  </ApolloProvider>
);

export const Overflow = () => (
  <ApolloProvider client={client as any}>
    <GlobalThemeProvider>
      <RecodeInput labelList={TestLabelsForOverFlow} recodeId={'abc'}/>
    </GlobalThemeProvider>
  </ApolloProvider>
);
