import { useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Input from '@/components/shared/input';
import Button from '@/components/shared/button';
import { Lock, Envelope } from '@/components/shared/icons';

import { SignInSchema, FormInputType } from '../auth-form.shemas';
import { useGetUserQuery, useLoginMutation } from '@/services/api/auth-api';
import Loader from '../../shared/loader';

export const Login = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState();

  useGetUserQuery(email ?? skipToken);

  const [login, { isLoading }] = useLoginMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInputType>({
    resolver: zodResolver(SignInSchema),
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
      className="bg-black-light w-[350px] xl:w-[421px]"
    >
      <div
        className={classNames(
          'flex flex-wrap gap-[14px] justify-end',
          'xl:gap-[16px]',
        )}
      >
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
          autoComplete="current-password"
          error={errors.password && errors.password.message}
          containerStyles="h-[40px] xl:h-[48px] w-full"
          icon={<Lock />}
        />
        <a
          href="/"
          className="block body-7 underline text-end underline-offset-[3px]"
        >
          {t('MODALS.AUTH.SIGN_IN_VIEW.FORGOT_PASSWORD_LINK')}
        </a>
        <Button
          type="submit"
          variant="primary"
          containerStyle="h-[40px] xl:h-[48px] w-full"
        >
          {!isLoading ? t('MODALS.AUTH.COMMON.BUTTON') : <Loader size="2rem" />}
        </Button>
      </div>
    </form>
  );
};
