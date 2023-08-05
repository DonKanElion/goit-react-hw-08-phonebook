import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import s from './UserMenu.module.css';

export const UserMemu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name} </p>
      <button className={s.btn_logout} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
