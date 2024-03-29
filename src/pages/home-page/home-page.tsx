/* eslint-disable react/destructuring-assignment */
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { CreateAccount } from '@/components/ui/info-components/create-account';
import InfoCards from '@/components/ui/info-cards';
import TimeSlot from '@/components/ui/info-components/time-slot';
import Screening from '@/components/ui/info-components/screening';
import Carousel from '@/components/carousel';
import Button from '@/components/shared/button';
import {
  C,
  Html,
  Java,
  Javascript,
  Kotlin,
  Materialui,
  Python,
  Ruby,
} from '@/components/shared/icons/buttons';
import FindInterviewer from '@/components/ui/info-components/find-interviewer';
import { ImageTicker } from './image-ticker/image-ticker';
import { store } from '@/store';
import { selectIsAuthenticated } from '@/store/authSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthForm } from '@/components/auth-form';
import { FormType } from '@/components/auth-form/auth-form.types';
import Modal from '@/components/modal';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const { t } = useTranslation();
  const images = [
    <C className="w-16 h-16 cursor-pointer" />,
    <Html className="w-16 h-16 cursor-pointer" />,
    <Java className="w-16 h-16 cursor-pointer" />,
    <Javascript className="w-16 h-16 cursor-pointer" />,
    <Kotlin className="w-16 h-16 cursor-pointer" />,
    <Materialui className="w-16 h-16 cursor-pointer" />,
    <Python className="w-16 h-16 cursor-pointer" />,
    <Ruby className="w-16 h-16 cursor-pointer" />,
  ];

  const [isOpen, setOpen] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const navigation = useNavigate();

  const onStart = () => {
    if (!isAuthenticated) {
      setOpen(true);
    } else {
      navigation('skill');
    }
  };

  return (
    <>
      <main className="w-full col-span-3 max-w-[1280px]">
        <div
          className={classNames(
            'grid grid-cols-1 px-5 gap-y-9  justify-items-center ',
            'md:px-10',
            'lg:h-[650px] lg:grid-cols-4 lg:grid-rows-2',
          )}
        >
          <div className="self-center justify-self-start lg:col-span-3">
            <h1 className="pb-3 whitespace-pre-line h1">
              {t('PAGES.HOME.MAIN_SECTION.TITLE')}
            </h1>
            <p className="body-4">{t('PAGES.HOME.MAIN_SECTION.DESCRIPTION')}</p>
          </div>

          <div className="text-center lg:hidden">
            <h1 className="pb-2 h3">
              {t('PAGES.HOME.COMMON.HOW_IT_WORKS_SUBTITLE')}
            </h1>
            <Carousel interval={20000}>
              <CreateAccount />
              <TimeSlot />
              <FindInterviewer />
            </Carousel>
          </div>

          <div className="flex items-center justify-center w-full">
            <Button
              onClick={() => onStart()}
              type="button"
              variant="primaryDark"
              containerStyle="h-9 w-[260px] lg:w-[300px] lg:h-12"
            >
              Start Practicing
            </Button>
            <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
              <AuthForm type={FormType.SignIn} />
            </Modal>
          </div>

          <div
            className={classNames(
              'hidden h-full w-[145px] justify-self-end mr-10',
              'lg:flex row-start-1 col-start-4 row-span-2',
            )}
          >
            <ImageTicker images={images} direction="bottom" />
            <ImageTicker images={images} />
          </div>
        </div>
      </main>
      <section className="col-span-3 max-w-[1280px] lg:mb-24">
        <div className="hidden grid-cols-1 lg:grid gap-y-24 ">
          <CreateAccount />
          <TimeSlot />
          <FindInterviewer />
          <Screening />
        </div>
        <div className="lg:hidden">
          <InfoCards />
        </div>
      </section>
    </>
  );
};
