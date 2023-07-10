import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div>
      <Helmet>
        <p>Register Form</p>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default Register;