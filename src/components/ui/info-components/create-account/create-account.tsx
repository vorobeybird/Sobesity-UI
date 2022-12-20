import React, { FC } from 'react';
import LaptopImage from '../../../../assets/images/laptop.svg';

const CreateAccount: FC<any> = () => {
  return (
    <div className="grid grid-cols-3 overflow-hidden bg-black-light shadow-xl rounded-lg ">
      <div className="grid col-span-2  grid-cols-[minmax(0,0)_240px] grid-rows-[minmax(0,0)_235px] items-center justify-items-center lg:h-[576px]">
        <div className="col-[1_/_span_2]  row-[1_/_span_2] -ml-[50px] min-h-[300px] min-w-[300px] bg-secondary-dark lg:w-[800px] lg:h-[800px] rounded-full " />
        <div className="col-[1_/_span_2] row-[1_/_span_2] bg-secondary-light min-w-[194px] min-h-[194px] lg:w-[518px] lg:h-[518px] rounded-full" />
        <div className="col-[1_/_span_2] row-[1_/_span_2]">
          <img
            className="h-[123px] lg:h-[330px] max-w-none"
            src={LaptopImage}
            alt="laptop"
          />
        </div>
      </div>
      <div className="flex flex-col justify-end lg:justify-center">
        <div className="h2 text-right mr-[20px] ">
          <p className="pb-[10px]">Create</p>
          <p className="pb-[20px]">an account</p>
        </div>
        <div className="hidden lg:block">
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
