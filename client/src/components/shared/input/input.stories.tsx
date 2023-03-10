import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Envelope } from '@/components/shared/icons';
import { Input } from './input';

export default {
  title: 'Components/Shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  containerStyles: 'h-[40px] xl:h-[48px] w-[260px] xl:w-[294px]',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  ...Default.args,
  icon: <Envelope />,
};

export const WithError = Template.bind({});

WithError.args = {
  ...Default.args,
  error: 'Field is required',
};

export const WithPlaceholder = Template.bind({});

WithPlaceholder.args = {
  ...Default.args,
  placeholder: 'Placeholder',
};
