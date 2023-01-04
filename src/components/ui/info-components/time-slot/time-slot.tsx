import classNames from 'classnames';
import { useTranslation, Trans } from 'react-i18next';
import businessThingsImage from '../../../../assets/images/businessThings.svg';

export function TimeSlot() {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(
        'bg-black-light flex justify-between shadow-xl w-full h-[224px] rounded-2xl',
        'md:w-full md:h-[380px] md:rounded-[2rem]',
        'lg:max-h-[600px] lg:rounded-none lg:w-full lg:h-full lg:py-6 lg:px-6',
      )}
    >
      <div
        className={classNames('flex items-center', 'lg:ml-0 lg:basis-[55%]')}
      >
        <img
          src={businessThingsImage}
          alt="Business things"
          className={classNames(
            'flex  justify-center ml-3.5 w-full h-[202px]',
            'md:ml-7 md:w-[310px] md:h-[372px]',
            'lg:ml-0 lg:h-full lg:w-full lg:object-fill',
          )}
        />
      </div>
      <div
        className={classNames(
          'flex items-end',
          'lg:flex-col lg:justify-center lg:items-center lg:w-full lg:basis-[45%]',
        )}
      >
        <div
          className={classNames(
            'flex align-bottom justify-end mr-3.5 mb-8 font-oswald text-white font-medium text-xl',
            'md:mr-7 md:mb-16 md:text-4xl',
            'lg:mr-0 lg:mb-14 lg:text-xl lg:uppercase',
          )}
        >
          <Trans i18nKey="PAGES.HOME.SPECIFY_TIME_SLOT_SECTION.TITLE">
            <p />
          </Trans>
        </div>
        <div
          className={classNames(
            'hidden',
            'lg:flex lg:text-center lg:max-w-[418px] lg:body-1',
          )}
        >
          {t('PAGES.HOME.SPECIFY_TIME_SLOT_SECTION.DESCRIPTION')}
        </div>
      </div>
    </div>
  );
}
