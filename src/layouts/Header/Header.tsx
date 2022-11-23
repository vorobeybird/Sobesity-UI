import BurgerMenu from '../../components/burger-menu';
import ProfileButton from '../../components/profile-button';
import './header.css';

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
    <div className="header-wrapper">
      {/* Then replace tempLoginButton to Reusable Button Component */}
      {isLoggedIn ? <ProfileButton /> : tempLogInButton}
      <BurgerMenu />
    </div>
  );
}
