import React, { FC } from 'react';
import LaptopImage from '../../../../assets/images/laptop.svg';

const CreateAccount: FC<any> = () => {
  return (
    <div className="flex justify-between h-[576px]  overflow-hidden text-white bg-black-light shadow-xl ">
      <div className="flex-1 h-full relative">
        <div className="absolute flex justify-center items-center bg-secondary-dark top-[-110px] left-[-150px] w-[800px] h-[800px] rounded-full ">
          <div className="bg-secondary-light w-[518px] h-[518px] rounded-full" />
        </div>
        <div className="absolute top-[130px]">
          <img src={LaptopImage} alt="laptop" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="h-1 p-[60px]">Create an account</div>
        <div className="w-[80%]">
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
