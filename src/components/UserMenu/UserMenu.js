// import { useAuth } from "hooks/useAuth";

import css from './UserMenu.module.css';

export const UserMemu = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, Antoshka</p>
      <button
        type="button"
        onClick={() => console.log('Click on the LogOut (dispatch)')}
      >
        Logout
      </button>
    </div>
  );
};
