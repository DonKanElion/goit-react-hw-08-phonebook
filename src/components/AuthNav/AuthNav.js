import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={css.nav_link}>Register</NavLink>
      <NavLink to="/login" className={css.nav_link}>Log In</NavLink>
    </div>
  );
};
