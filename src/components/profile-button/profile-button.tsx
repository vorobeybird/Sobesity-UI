import { Avatar } from '@/components/shared/icons';
import { Link } from 'react-router-dom';

export function ProfileButton() {
  return (
    <div className="flex">
      <Link to="/user">
        <Avatar className="sm:w-6 sm:h-6 md:w-12 md:h-12" />
      </Link>
    </div>
  );
}
