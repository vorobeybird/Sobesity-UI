import { useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import Input from '@/components/shared/input';
import Button from '@/components/shared/button';
import { Lock, Envelope } from '@/components/shared/icons';

import { SignUpSchema, FormInputType } from '../auth-form.shemas';
import { useGetUserQuery, useLoginMutation } from '@/services/api/auth-api';
import Loader from '../../shared/loader';

export const Registration = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState();

  useGetUserQuery(email ?? skipToken);

  const [login, { isLoading }] = useLoginMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInputType>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await login(data);
      setEmail(data.email);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-black-light w-min-[350px] xl:w-[421px]"
    >
      <div className="flex flex-wrap gap-[14px] xl:gap-[16px] mb-3.5 xl:mb-4">
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
          {...register('nickname')}
          error={errors.nickname && errors.nickname.message}
          type="text"
          placeholder={t('MODALS.AUTH.SIGN_UP_VIEW.USERNAME_INPUT')}
          containerStyles="h-[40px] xl:h-[48px] flex-[0_0_100%]"
          autoComplete="username"
        />
        <Input
          {...register('email')}
          error={errors.email && errors.email.message}
          type="text"
          placeholder={t('MODALS.AUTH.COMMON.EMAIL_INPUT')}
          containerStyles="h-[40px] xl:h-[48px] flex-[0_0_100%]"
          autoComplete="email"
          icon={<Envelope />}
        />
        <Input
          {...register('password')}
          type="password"
          placeholder={t('MODALS.AUTH.COMMON.PASSWORD_INPUT')}
          autoComplete="new-password"
          error={errors.password && errors.password.message}
          containerStyles="h-[40px] xl:h-[48px] w-full"
          icon={<Lock />}
        />
      </div>
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
      <Button
        type="submit"
        variant="primary"
        containerStyle="h-[40px] xl:h-[48px] w-full"
      >
        {!isLoading ? t('MODALS.AUTH.COMMON.BUTTON') : <Loader size="2rem" />}
      </Button>
    </form>
  );
};
