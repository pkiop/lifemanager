import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import GitHubButton, { Props } from './index';

export default {
  title: 'Atoms/GitHubButton',
  component: GitHubButton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onClick: { action: 'clicked' } },
};

const Template: Story<Props> = (args) => <GitHubButton {...args} />;

export const Pair = Template.bind({});
Pair.args = {
  title: 'hello',
};

export const HELLO = () => {
  const subTitle = 'HELLO';
  return <GitHubButton title={subTitle} />;
};

export const BYE = () => {
  const subTitle = 'BYE';
  return <GitHubButton title={subTitle} />;
};
