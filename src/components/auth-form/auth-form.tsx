import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import Input from 'components/shared/input';
import Button from 'components/shared/button';
import { Google, Facebook, Lock, Envelope } from 'components/shared/icons';

import { useState } from 'react';
import { authService } from 'services/api';
import { SignInSchema, SignUpSchema, FormInputType } from './auth-form.shemas';
import { FormProps, FormType } from './auth-form.types';

export const AuthForm = ({ type }: FormProps) => {
  const { t } = useTranslation();

  const [isSignIn, setFormType] = useState(type === FormType.SignIn);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInputType>({
    resolver: zodResolver(isSignIn ? SignInSchema : SignUpSchema),
  });

  const onSubmit = (data: any) => {
    if (isSignIn) {
      authService.login(data);
    } else {
      authService.register(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-black-light w-[350px] xl:w-[421px] my-2 pb-[18px]"
    >
      <h2 className="h3 h-[43px] xl:h-[53px] flex items-center justify-center border-b border-primary-dark">
        {isSignIn
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
          {!isSignIn ? (
            <>
              <div className="flex gap-[10px]">
                <Input
                  {...register('firstName')}
                  type="text"
                  placeholder={
                    t('MODALS.AUTH.SIGN_UP_VIEW.FIRST_NAME_INPUT') as string
                  }
                  containerStyles="h-[40px] xl:h-[48px]"
                  error={errors.firstName && errors.firstName.message}
                />
                <Input
                  {...register('lastName')}
                  type="text"
                  placeholder={t('MODALS.AUTH.SIGN_UP_VIEW.LAST_NAME_INPUT')}
                  containerStyles="h-[40px] xl:h-[48px]"
                  error={errors.lastName && errors.lastName.message}
                />
              </div>
              <Input
                {...register('username')}
                error={errors.username && errors.username.message}
                type="text"
                placeholder={t('MODALS.AUTH.SIGN_UP_VIEW.USERNAME_INPUT')}
                containerStyles="h-[40px] xl:h-[48px] flex-[0_0_100%]"
                autoComplete="username"
              />
            </>
          ) : null}
          <Input
            {...register('email')}
            error={errors.email && errors.email.message}
            type="text"
            placeholder={t('MODALS.AUTH.COMMON.EMAIL_INPUT')}
            containerStyles="h-[40px] xl:h-[48px] flex-[0_0_100%]"
            autoComplete="username"
            icon={<Envelope />}
          />
          <Input
            {...register('password')}
            type="password"
            placeholder={t('MODALS.AUTH.COMMON.PASSWORD_INPUT')}
            autoComplete={isSignIn ? 'current-password' : 'new-password'}
            error={errors.password && errors.password.message}
            containerStyles="h-[40px] xl:h-[48px] w-full"
            icon={<Lock />}
          />
        </div>
        {!isSignIn ? (
          <label
            htmlFor="accept"
            className="relative body-7 flex items-start gap-[7px] flex-row-reverse mb-[18px] xl:mb-8"
          >
            <Trans
              i18nKey="MODALS.AUTH.SIGN_UP_VIEW.PRIVAT_POLICY_DESCRIPTION"
              parent="p"
            >
              <a
                href="/"
                className="inline-block underline text-primary focus:outline-none"
              >
                Remove after adding a router
              </a>
              <a
                href="/"
                className="inline-block underline text-primary focus:outline-none"
              >
                Remove after adding a router
              </a>
              <a
                href="/"
                className="inline-block underline text-primary focus:outline-none"
              >
                Remove after adding a router
              </a>
            </Trans>
            <div className="flex items-center justify-center flex-shrink-0 w-3 h-3 border xl:w-4 xl:h-4 border-tertiary-dark">
              <input
                {...register('policy')}
                id="accept"
                type="checkbox"
                className="absolute opacity-0 peer"
              />
              <svg
                className="hidden w-2 h-2 pointer-events-none fill-primary xl:w-3 xl:h-3 peer-checked:block"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </div>
            {errors.policy && (
              <p className="absolute error-input translate-y-[115%] text-primary text-center bottom-0 left-0 right-0">
                {errors.policy.message}
              </p>
            )}
          </label>
        ) : (
          <a
            href="/"
            className="block body-7 underline text-end mb-[18px] xl:mb-8 underline-offset-[3px]"
          >
            {t('MODALS.AUTH.SIGN_IN_VIEW.FORGOT_PASSWORD_LINK')}
          </a>
        )}
        <Button
          type="submit"
          variant="primary"
          containerStyle="h-[40px] xl:h-[48px] w-full"
        >
          {t('MODALS.AUTH.COMMON.BUTTON')}
        </Button>
        <div className="body-7 mt-[8px] mb-[18px] xl:mb-[30px] flex">
          <p className="block w-full">
            {!isSignIn
              ? t(`MODALS.AUTH.SIGN_IN_VIEW.HAVE_ACCOUNT_DESCRIPTION`)
              : t(`MODALS.AUTH.SIGN_IN_VIEW.DONT_HAVE_ACCOUNT_DESCRIPTION`)}
          </p>

          <Button
            type="button"
            className="flex justify-end w-full h-full border-0"
            onClick={() => setFormType(!isSignIn)}
          >
            <p className="inline-block underline text-primary focus:outline-none">
              {!isSignIn
                ? t('MODALS.AUTH.SIGN_IN_VIEW.SIGN_UP_LINK')
                : t('MODALS.AUTH.SIGN_IN_VIEW.SIGN_IN_LINK')}
            </p>
          </Button>
        </div>
      </div>
    </form>
  );
};
