import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import InterviewersAndGadgets from '../../../../assets/images/InterviewersAndGadgets.svg';

export function FindInterviewer() {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(
        'flex relative w-full h-[235px] bg-black-light',
        'md:w-full md:h-[400px]',
        'lg:h-[600px]',
      )}
    >
      <div
        className={classNames(
          'flex basis-[30%] z-10',
          'md:basis-[35%]',
          'lg:basis-[45%] lg:flex-col lg:items-center lg:justify-center',
        )}
      >
        <div
          className={classNames(
            'mt-7 ml-4 font-oswald text-white text-xl',
            'md:mt-12 md:ml-9 md:text-2xl',
            'lg:mt-0 lg:ml-0 lg:mb-16 lg:uppercase',
          )}
        >
          {t('PAGES.HOME.FIND_YOUR_INTERVIEWER_SECTION.TITLE')}
        </div>
        <div
          className={classNames(
            'hidden',
            'lg:block lg:text-center lg:max-w-[418px] lg:body-1',
          )}
        >
          {t('PAGES.HOME.FIND_YOUR_INTERVIEWER_SECTION.DESCRIPTION')}
        </div>
      </div>
      <div
        className={classNames(
          'flex relative basis-[70%] z-10 mt-12 mb-5',
          'md:basis-[65%]',
          'lg:basis-[55%] lg:mt-0 lg:mb-0 lg:justify-center lg:items-end',
        )}
      >
        <img
          src={InterviewersAndGadgets}
          alt="Interviewers and gadgets"
          className={classNames(
            'h-[155px] w-[240px] ',
            'md:h-[325px] md:w-[430px]',
            'lg:w-full lg:z-10 lg:mb-14',
          )}
        />
        <span
          className={classNames(
            'hidden absolute bottom-0 w-full h-[80px] bg-secondary-dark',
            'lg:block',
          )}
        />
      </div>
      <span
        className={classNames(
          'absolute bottom-0 w-full h-[40px] bg-secondary-dark',
          'md:h-[80px]',
          'lg:hidden',
        )}
      />
    </div>
  );
}
