import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Button from '@/components/shared/button';
import { Google, Facebook } from '@/components/shared/icons';

import { FormProps, FormType } from './auth-form.types';
import { Login } from './login/login';
import { Registration } from './registration/registration';

export const AuthForm = ({ type }: FormProps) => {
  const { t } = useTranslation();

  const [isSignInForm, setFormType] = useState(type === FormType.SignIn);

  return (
    <div className="bg-black-light w-[350px] xl:w-[421px] my-2 pb-2">
      <h2 className="h3 h-[43px] xl:h-[53px] flex items-center justify-center border-b border-primary-dark">
        {isSignInForm
          ? t('MODALS.AUTH.SIGN_IN_VIEW.TITLE')
          : t('MODALS.AUTH.SIGN_UP_VIEW.TITLE')}
      </h2>
      <div className="px-[45px] xl:px-[64px]">
        <div className="pt-[27px] xl:pt-[29px] w-full">
          <Button
            type="button"
            containerStyle="w-full h-[40px] xl:h-[48px] inline-block mb-2 xl:mb-2.5"
            className="inline-flex w-full h-full border-[1px] pl-[15px] xl:pl-[23px] items-center gap-[22px] border-tertiary-dark body-4 text-white xl:hover:bg-secondary-light xl:hover:text-black-dark focus:bg-secondary"
          >
            <Google className="xl:scale-125" />
            <p className="flex-grow-0">
              {t('MODALS.AUTH.COMMON.GOOGLE_BUTTON')}
            </p>
          </Button>
          <Button
            type="button"
            containerStyle="w-full h-[40px] xl:h-[48px] inline-block mb-2 xl:mb-2.5"
            className="pl-[15px] xl:pl-[23px] gap-[48px] border-[1px] w-full h-full inline-flex items-center border-tertiary-dark body-4 text-white bg-blue xl:hover:bg-blue-light xl:hover:text-black-dark focus:bg-blue-dark focus:ring-transparent"
          >
            <Facebook className="xl:scale-125" />
            <p className="flex-grow-0">
              {t('MODALS.AUTH.COMMON.FACEBOOK_BUTTON')}
            </p>
          </Button>
        </div>
        <div className="body-6 flex py-2 xl:py-2.5 gap-3 justify-center items-center w-full">
          <span className="bg-primary-dark h-[1px] flex-auto" />
          Or
          <span className="bg-primary-dark h-[1px] flex-auto" />
        </div>

        <div className="flex flex-wrap gap-[14px] xl:gap-[16px] mb-3.5 xl:mb-4">
          {isSignInForm ? <Login /> : <Registration />}
          <Button
            type="button"
            className="flex justify-end w-full h-full border-0"
            onClick={() => setFormType(!isSignInForm)}
          >
            <p className="inline-block underline text-primary focus:outline-none">
              {isSignInForm
                ? t('MODALS.AUTH.SIGN_UP_VIEW.SIGN_UP_LINK')
                : t('MODALS.AUTH.SIGN_IN_VIEW.SIGN_IN_LINK')}
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};
