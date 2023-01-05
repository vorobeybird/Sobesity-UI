import { FC } from 'react';
import BurgerMenu from '../../components/burger-menu';
import ProfileButton from '../../components/profile-button';

export const Header: FC<{ isLoggedIn: boolean }> = (props) => {
  const { isLoggedIn } = props;

  const tempLogInButton = (
    <button
      type="button"
      className="w-[17vw] h-[6vw] text-white border-solid border-[1px] border-[#7E2020] rounded-[3px]"
    >
      Log In
    </button>
  );

  return (
    <div className="lg:bg-black">
      <div className=" mx-auto my-0 flex flex-row items-center justify-between max-w-[1440px] h-8 px-6 py-6 md:h-24 md:px-12 ">
        {isLoggedIn ? <ProfileButton /> : tempLogInButton}
        <BurgerMenu />
      </div>
    </div>
  );
};
