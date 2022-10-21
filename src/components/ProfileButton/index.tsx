import profileLogo from '../../assets/icons/avatar.svg';

export function ProfileButton() {
  return (
    <div className="flex">
      <img
        src={profileLogo}
        alt="Profile logo"
        className="w-[6vw] h-[6vw]"
      ></img>
    </div>
  );
}
