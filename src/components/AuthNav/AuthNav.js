import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css'

// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
// import { LoginForm } from 'components/LoginForm/LoginForm';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={css.nav_link}>Register</NavLink>
      <NavLink to="/login" className={css.nav_link}>Log In</NavLink>
    </div>
  );
};
