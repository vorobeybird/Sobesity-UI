import profileLogo from '../../assets/icons/avatar.svg';
import './profile-button.css';

export function ProfileButton() {
  return (
    <div className="profile-button">
      <img src={profileLogo} alt="Profile logo" />
    </div>
  );
}
