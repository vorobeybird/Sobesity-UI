import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Input from 'components/shared/inputs';
import Button from 'components/shared/buttons';
import { Google, Facebook, Lock, Envelope } from 'components/shared/icons';

import { SignInSchema, SignUpSchema, FormInputType } from './AuthFormShemas';
import { FormProps, FormType } from './AuthForm.types';

const AuthForm = ({ type, action }: FormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInputType>({
    resolver: zodResolver(
      type === FormType.SignIn ? SignInSchema : SignUpSchema,
    ),
  });

  const onSubmit = handleSubmit(() => {
    action();
  });

  return (
    <form
      onSubmit={onSubmit}
      className="bg-black-light w-[350px] xl:w-[421px] my-2 pb-[18px]"
    >
      <h2 className="h3 h-[43px] xl:h-[53px] flex items-center justify-center border-b border-primary-dark">
        {type === FormType.SignIn ? 'Log in' : 'Join us'}
      </h2>
      <div className="px-[45px] xl:px-[64px]">
        <div className="pt-[27px] xl:pt-[29px] w-full">
          <Button
            type="button"
            className="h-[40px] xl:h-[48px] w-full mb-2 xl:mb-2.5 pl-[15px] xl:pl-[23px] items-center gap-[22px]  border-tertiary-dark body-4 text-white xl:hover:bg-secondary-light xl:hover:text-black-dark focus:bg-secondary"
          >
            <Google className="xl:scale-125" />
            <p className="flex-grow-0">Sign in with Google Accounts</p>
          </Button>
          <Button
            type="button"
            className="h-[40px] xl:h-[48px] pl-[15px] xl:pl-[23px] gap-[48px] w-full items-center border-tertiary-dark body-4 text-white bg-blue xl:hover:bg-blue-light xl:hover:text-black-dark focus:bg-blue-dark focus:ring-transparent"
          >
            <Facebook className="xl:scale-125" />
            <p className="flex-grow-0"> Sign in with Facebook</p>
          </Button>
        </div>
        <div className="body-6 flex py-2 xl:py-2.5 gap-3 justify-center items-center w-full">
          <span className="bg-primary-dark h-[1px] flex-auto" />
          Or
          <span className="bg-primary-dark h-[1px] flex-auto" />
        </div>
        <div className="flex flex-wrap gap-[14px] xl:gap-[16px] mb-3.5 xl:mb-4">
          {type === FormType.SignUp ? (
            <div className="flex gap-[10px]">
              <Input
                {...register('firstName')}
                type="text"
                placeholder="First name"
                containerStyles="h-[40px] xl:h-[48px]"
                error={errors.firstName && errors.firstName.message}
              />
              <Input
                {...register('lastName')}
                type="text"
                placeholder="Last name"
                containerStyles="h-[40px] xl:h-[48px]"
                error={errors.lastName && errors.lastName.message}
              />
            </div>
          ) : null}
          <Input
            {...register('email')}
            error={errors.email && errors.email.message}
            type="text"
            placeholder="email"
            containerStyles="h-[40px] xl:h-[48px] flex-[0_0_100%]"
            autoComplete="username"
            icon={<Envelope />}
          />
          <Input
            {...register('password')}
            type="password"
            placeholder="password"
            autoComplete={
              type === FormType.SignIn ? 'current-password' : 'new-password'
            }
            error={errors.password && errors.password.message}
            containerStyles="h-[40px] xl:h-[48px] w-full"
            icon={<Lock />}
          />
        </div>
        {type === FormType.SignUp ? (
          <label
            htmlFor="accept"
            className="relative body-7 flex items-start gap-[7px] flex-row-reverse mb-[18px] xl:mb-8"
          >
            <p>
              By joining, I accept the{' '}
              <a
                href="/"
                className="inline-block underline text-primary focus:outline-none"
              >
                terms
              </a>{' '}
              <a
                href="/"
                className="inline-block underline text-primary focus:outline-none"
              >
                service
              </a>{' '}
              and
              <a
                href="/"
                className="inline-block underline text-primary focus:outline-none"
              >
                privacy policy
              </a>
            </p>
            <div className="w-3 h-3 xl:w-4 xl:h-4 flex flex-shrink-0 justify-center items-center border border-tertiary-dark">
              <input
                {...register('policy')}
                id="accept"
                type="checkbox"
                className="absolute opacity-0 peer
              "
              />
              <svg
                className="fill-primary hidden w-2 h-2 xl:w-3 xl:h-3 pointer-events-none peer-checked:block"
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
            Forgot password?
          </a>
        )}
        <Button
          type="submit"
          variant="primary"
          className="h-[40px] xl:h-[48px] w-full"
        >
          Continue
        </Button>
        {type === FormType.SignIn ? (
          <p className="body-7 mt-[8px] mb-[18px] xl:mb-[30px] justify-center flex gap-[18px]">
            Don’t have an account?{' '}
            <a
              href="/"
              className=" inline-block underline text-primary focus:outline-none"
            >
              Sign up
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default AuthForm;
