import classNames from 'classnames';
import LaptopImage from '../../../../assets/images/laptop.svg';

const CreateAccount = () => {
  return (
    <div
      className={classNames(
        'grid grid-cols-3 overflow-hidden rounded-lg shadow-xl bg-black-light',
        'md:grid-cols-2',
      )}
    >
      <div
        className={classNames(
          'grid col-span-2 grid-cols-[0_240px] grid-rows-[0_235px] items-center justify-items-center',
          'md:col-span-1 md:grid-cols-[0_450px] md:grid-rows-[0_400px] md:-ml-12',
          'lg:grid-cols-[0_650px] lg:grid-rows-[0_600px] lg:-ml-12',
        )}
      >
        <div
          className={classNames(
            'col-[1_/_span_2] row-[1_/_span_2] min-h-[300px] min-w-[300px] -ml-12 bg-secondary-dark rounded-full',
            'md:w-[600px] md:h-[600px]',
            'lg:w-[800px] lg:h-[800px]',
          )}
        />
        <div
          className={classNames(
            'col-[1_/_span_2] row-[1_/_span_2] min-w-[194px] min-h-[194px] bg-secondary-light rounded-full',
            'md:min-w-[400px] md:min-h-[400px]',
            'lg:w-[518px] lg:h-[518px]',
          )}
        />
        <div className="col-[1_/_span_2] row-[1_/_span_2]">
          <img
            className="h-[123px] md:h-[220px] lg:h-[330px] max-w-none"
            src={LaptopImage}
            alt="laptop"
          />
        </div>
      </div>
      <div className="flex flex-col justify-end md:items-center md:justify-center">
        <div className="flex flex-col mr-5 text-right h2 md:h3 md:flex-row">
          <p className="pb-3 mr-3 lg:pb-12">Create</p>
          <p className="pb-6">an account</p>
        </div>
        <div className="hidden md:block md:body-1 md:max-w-[300px] md:text-center lg:max-w-[418px] ">
          Platea adipiscing in dolor ornare ut. Dui ex. Morbi sodales et. Mollis
          amet, quis, odio. Dictum faucibus. Aenean in amet, platea sed non ut.
          Tempus nunc dictum. In ipsum tempus non ultricies. Vestibulum ornare
          malesuada est. Interdum amet mattis accumsan nunc vitae cras faucibus.
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
