import React, { FC } from 'react';
import LaptopImage from '../../../../assets/images/laptop.svg';

const CreateAccount: FC<any> = () => {
  return (
    <div className="h-132 text-white">
      This is Create Account componentffffffffff
      <div className="relative">
        <div className="absolute bg-black w-96 h-96 rounded-full z-0" />
        <div />
        <div className="absolute z-1">
          <img src={LaptopImage} alt="laptop" />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
