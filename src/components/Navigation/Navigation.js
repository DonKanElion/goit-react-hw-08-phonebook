import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';

import css from './Navigation.module.css'; 

export const Navigation = () => {
  // const { isLoggedIn } = useAuth;

  return (
    <nav>
      <NavLink to="/" className={css.nav_link}>Home</NavLink>
      <NavLink to="/contacts" className={css.nav_link}>Contacts</NavLink>
      {/* {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}
    </nav>
  );
};

export default Navigation;
