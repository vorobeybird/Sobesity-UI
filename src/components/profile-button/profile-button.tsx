import profileLogo from '../../assets/icons/avatar.svg';

export function ProfileButton() {
  return (
    <div className="flex">
      <img
        src={profileLogo}
        alt="Profile logo"
        className="sm:w-6 sm:h-6 md:w-12 md:h-12"
      />
    </div>
  );
}
