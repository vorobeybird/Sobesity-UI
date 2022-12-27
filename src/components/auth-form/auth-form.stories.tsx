import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AuthForm } from './auth-form';
import { FormType } from './auth-form.types';

export default {
  title: 'Components/Auth-form',
  component: AuthForm,
} as ComponentMeta<typeof AuthForm>;

const Template: ComponentStory<typeof AuthForm> = (args) => (
  <AuthForm {...args}>Click</AuthForm>
);

export const SignIn = Template.bind({});
SignIn.args = {
  type: FormType.SignIn,
};

export const SignUp = Template.bind({});
SignUp.args = {
  type: FormType.SignIn,
};
