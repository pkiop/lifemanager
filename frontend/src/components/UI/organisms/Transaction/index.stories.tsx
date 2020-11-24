import React from 'react';
import Transaction from '.';

export default {
  title: 'Organisms/Transactions',
  component: Transaction,
};

export interface Props {
  transactionNumber: number;
  title: string;
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
}

const temp = {
  transactionNumber: 3,
  title: 'lifemanager',
  startHour: 9,
  startMin: 0,
  endHour: 9,
  endMin: 4,
};

export const Default = () => <Transaction {...temp} />;
