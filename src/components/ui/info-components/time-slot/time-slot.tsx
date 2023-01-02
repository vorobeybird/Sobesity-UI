import classNames from 'classnames';
import businessThingsImage from '../../../../assets/images/businessThings.svg';

export function TimeSlot() {
  return (
    <div
      className={classNames(
        'bg-black-light flex justify-between shadow-xl',
        'sm:w-[370px] sm:h-[224px] sm:rounded-2xl',
        'md:w-[692px] md:h-[380px] md:rounded-[2rem]',
        'lg:max-h-[600px] lg:max-w-[1160px] lg:rounded-none lg:w-full lg:h-full lg:py-6 lg:px-6',
      )}
    >
      <div
        className={classNames('flex items-center', 'lg:ml-0 lg:basis-[55%]')}
      >
        <img
          src={businessThingsImage}
          alt="Business things"
          className={classNames(
            'flex  justify-center',
            'sm:ml-3.5 sm:w-[191px] sm:h-[202px]',
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
            'lg:flex lg:text-center lg:max-w-[418px] lg:body-1',
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
