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

const ImageTicker = ({ images, direction = 'top' }: any): any => {
  return (
    <div className="flex items-center justify-center h-full overflow-hidden">
      {/* 1. */}
      <div className="relative w-20 h-[200%] border-t border-b border-gray-600">
        {/* 2. */}
        <div
          className={classNames(
            'absolute  right-0 flex flex-col items-center justify-around w-20 h-[200%]',
            'hover:pause',
            { 'top-0 animate-scroll-top': direction === 'top' },
            { 'bottom-0 animate-scroll-bottom ': direction === 'bottom' },
          )}
        >
          {images.map((icon: any) => {
            return (
              <div className="flex justify-center items-start w-[20rem]">
                {icon}
              </div>
            );
          })}
          {images.map((icon: any) => {
            return (
              <div className="flex justify-center items-start w-[20rem]">
                {icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const LandingPage = () => {
  const isLoggedIn = false;
  const imagess = [
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
    <div className="grid min-h-screen grid-cols-1 gap-y-10 justify-items-center">
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
            <h1 className="pb-3 h1">
              Interviewing: the most <br /> profitable skill you can learn
            </h1>
            <p className="body-4">
              {`Don't miss out on a great job opportunity Practice live interviews
            with peers`}
            </p>
          </div>

          <div className="text-center lg:hidden">
            <h1 className="pb-2 h3">How it works</h1>
            <Carousel interval={20000}>
              <CreateAccount />
              <TimeSlot />
            </Carousel>
          </div>

          <div className="flex items-center justify-center w-full">
            <Button
              type="button"
              variant="primaryDark"
              containerStyle="h-9 w-[260px] lg:w-[300px] lg:h-12"
            >
              START PRACTICING
            </Button>
          </div>

          <div
            className={classNames(
              'hidden h-full w-[145px] justify-self-end mr-10',
              'lg:flex row-start-1 col-start-4 row-span-2',
            )}
          >
            <ImageTicker images={imagess} direction="bottom" />
            <ImageTicker images={imagess} />
          </div>
        </div>
      </main>
      <section className="col-span-3 max-w-[1280px]">
        <div className="hidden lg:block">
          <CreateAccount />
          <TimeSlot />
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
