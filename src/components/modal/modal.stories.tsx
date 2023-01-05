import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from 'components/shared/button';
import Modal from 'components/modal';
import { AuthForm } from 'components/auth-form';
import { FormType } from 'components/auth-form/auth-form.types';
import { useState } from 'react';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [showModal, setShowModal] = useState(false);
  const { children } = args;

  return (
    <div className="w-20 h-20">
      <Button
        type="button"
        variant="primary"
        containerStyle="h-[40px] xl:h-[48px] w-[250px] mb-2"
        onClick={() => setShowModal(true)}
      >
        Button
      </Button>
      <Modal
        onClose={() => {
          setShowModal(false);
        }}
        isOpen={showModal}
      >
        {children}
      </Modal>
    </div>
  );
};

export const AuthFormModal = Template.bind({});
AuthFormModal.args = {
  children: <AuthForm type={FormType.SignIn} action={() => {}} />,
};

export const RandomFormModal = Template.bind({});
RandomFormModal.args = {
  children: (
    <div className="h-[350px] w-[500px] flex items-center justify-center body-5 bg-primary-darkest">
      h2
    </div>
  ),
};
