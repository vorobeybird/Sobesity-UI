/* eslint-disable react/destructuring-assignment */
import Header from 'layouts/Header';
import { Footer } from 'layouts/footer/Footer';
import { CreateAccount } from 'components/ui/info-components/create-account';
import InfoCards from 'components/ui/info-cards';
import TimeSlot from 'components/ui/info-components/time-slot';
import Carousel from 'components/carousel';
import Button from 'components/shared/button';
import classNames from 'classnames';
import {
  C,
  Html,
  Java,
  Javascript,
  Kotlin,
  Materialui,
  Python,
  Ruby,
} from 'components/shared/icons/buttons';
import FindInterviewer from 'components/ui/info-components/find-interviewer';
import { useTranslation } from 'react-i18next';
import { ImageTicker } from './image-ticker/image-ticker';

export const HomePage = () => {
  const { t } = useTranslation();
  const isLoggedIn = false;
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

  return (
    <div className="grid min-h-screen grid-cols-1 gap-y-10 lg:gap-0 justify-items-center">
      <header className="flex w-full h-full col-span-5 pt-10 lg:pt-0">
        <Header isLoggedIn={isLoggedIn} />
      </header>
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
              type="button"
              variant="primaryDark"
              containerStyle="h-9 w-[260px] lg:w-[300px] lg:h-12"
            >
              {t('PAGES.HOME.MAIN_SECTION.BUTTON')}
            </Button>
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
        </div>
        <div className="lg:hidden">
          <InfoCards />
        </div>
      </section>

      <footer className="flex items-end w-full col-span-5 ">
        <Footer />
      </footer>
    </div>
  );
};
