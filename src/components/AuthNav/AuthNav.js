import { NavLink } from 'react-router-dom';

// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
// import { LoginForm } from 'components/LoginForm/LoginForm';

export const AuthNav = () => {
  return (
    <div>
      <h4 style={{ margin: '0' }}>AuthNav</h4>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
