import { useTranslation } from 'react-i18next';
import Someone from '../../../../assets/images/Someone.svg';

export function Screening() {
  const { t } = useTranslation();

  return (
    <div className="sm:hidden md:hidden xl:flex w-full h-[600px]">
      <div className="flex basis-2/4 items-center justify-center bg-black-light">
        <img src={Someone} alt="Someone on the monitor" className="my-7 mx-4" />
      </div>
      <div className="flex basis-2/4 bg-[#5C1416] items-center justify-center flex-col">
        <div className="font-oswald text-xl text-white font-medium uppercase mb-16">
          {t('PAGES.HOME.SCREENING_SECTION.TITLE')}
        </div>
        <div className="text-center font-firaSans text-xl text-white font-normal mx-24">
          {t('PAGES.HOME.SCREENING_SECTION.DESCRIPTION')}
        </div>
      </div>
    </div>
  );
}
