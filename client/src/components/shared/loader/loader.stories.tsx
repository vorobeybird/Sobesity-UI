import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from './loader';

export default {
  title: 'Components/Shared/Loader',
  component: Loader,
  argTypes: {
    className: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
