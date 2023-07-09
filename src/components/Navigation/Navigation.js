import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth;

  return (
    <nav>
      <NavLink to="/" style={{marginRight: '10px'}}>Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {/* {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}
    </nav>
  );
};

export default Navigation;
