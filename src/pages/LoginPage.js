import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <h3>Login</h3>
      </Helmet>
      <LoginForm />
    </div>
  );
}
