/* eslint-disable react/jsx-no-bind */
import { FC, useState } from 'react';
import Button from 'components/shared/button';
import Modal from 'components/modal';
import { AuthForm } from 'components/auth-form';
import { FormType } from 'components/auth-form/auth-form.types';
import BurgerMenu from '../../components/burger-menu';
import ProfileButton from '../../components/profile-button';

export const Header: FC<{ isLoggedIn: boolean }> = (props) => {
  const { isLoggedIn } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full lg:bg-black">
      <div className=" mx-auto my-0 flex flex-row items-center justify-between max-w-[1280px] h-8 px-5 md:px-10 md:h-24 ">
        {isLoggedIn ? (
          <ProfileButton />
        ) : (
          <>
            <Button
              type="button"
              variant="primary"
              containerStyle="h-6 w-[73px] md:w-[150px] md:h-12 xl:h-[48px]  xl:w-[178px]"
              onClick={() => setOpen(true)}
            >
              Log In
            </Button>
            <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
              <AuthForm type={FormType.SignIn} />
            </Modal>
          </>
        )}
        <BurgerMenu />
      </div>
    </div>
  );
};
