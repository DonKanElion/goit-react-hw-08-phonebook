import { NavLink } from 'react-router-dom';

// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
// import { LoginForm } from 'components/LoginForm/LoginForm';

export const AuthNav = () => {
  return (
    <div>
      <a href='/'>Register</a>
      <a href='/'><br/>Log In</a>
      {/* <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink> */}
    </div>
  );
};
