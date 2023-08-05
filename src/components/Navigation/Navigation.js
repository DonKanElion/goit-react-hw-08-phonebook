import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" className={css.nav_link}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={css.nav_link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
