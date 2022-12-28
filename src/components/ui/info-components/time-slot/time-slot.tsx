import classNames from 'classnames';
import businessThingsImage from '../../../../assets/images/businessThings.svg';

export function TimeSlot() {
  return (
    <div
      className={classNames(
        'bg-black-light flex justify-between shadow-xl',
        'sm:w-[370px] sm:h-[224px] sm:rounded-2xl',
        'md:w-[692px] md:h-[380px] md:rounded-[2rem]',
        'lg:w-[960px] lg:h-[520px] lg:rounded-none',
      )}
    >
      <div className="flex items-center lg:ml-6">
        <img
          src={businessThingsImage}
          alt="Business things"
          className={classNames(
            'flex  justify-center',
            'sm:ml-3.5 sm:w-[191px] sm:h-[202px]',
            'md:ml-7 md:w-[310px] md:h-[372px]',
            'lg:ml-0 lg:w-[480px] lg:h-[470px]',
          )}
        />
      </div>
      <div
        className={classNames(
          'flex items-end',
          'lg:flex-col lg:justify-center lg:items-center lg:mr-9',
        )}
      >
        <div
          className={classNames(
            'font-oswald text-white flex align-bottom justify-end',
            'sm:mr-3.5 sm:mb-8 sm:font-medium sm:text-xl',
            'md:mr-7 md:mb-16 md:font-medium md:text-4xl',
            'lg:mr-0 lg:mb-14 lg:font-medium lg:text-xl lg:uppercase',
          )}
        >
          Specify time slot
        </div>
        <div
          className={classNames(
            'hidden',
            'lg:flex lg:text-center lg:w-[390px] font-firaSans text-white lg:font-light',
          )}
        >
          Platea adipiscing in dolor ornare ut. Dui ex. Morbi sodales et. Mollis
          amet, quis, odio. Dictum faucibus. Aenean in amet, platea sed non ut.
          Tempus nunc dictum. In ipsum tempus non ultricies. Vestibulum ornare
          malesuada est. Interdum amet mattis accumsan nunc vitae cras faucibus.
        </div>
      </div>
    </div>
  );
}
