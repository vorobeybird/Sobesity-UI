import BurgerMenu from '../../components/burger-menu';
import ProfileButton from '../../components/profile-button';

export function Header(props: any) {
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
    <div className="flex flex-row justify-between items-center w-max-full sm:h-28 sm:px-6 md:h-60 md:px-12 bg-primary">
      {isLoggedIn ? <ProfileButton /> : tempLogInButton}
      <BurgerMenu />
    </div>
  );
}
