import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'Components/Shared/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'primaryDark', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    disabled: {
      defaultValue: false,
      control: 'boolean',
    },
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Click</Button>
);

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  containerStyle: 'h-[40px] xl:h-[48px] w-[260px] xl:w-[294px]',
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  variant: 'primary',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  ...Default.args,
  variant: 'primaryDark',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Default.args,
  variant: 'tertiary',
  containerStyle: 'h-[115px] xl:h-[250px] w-[185px] xl:w-[250px]',
};
