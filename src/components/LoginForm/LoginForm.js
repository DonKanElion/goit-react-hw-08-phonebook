// import { useDispatch } from "react-redux";
// import { logIn}
import  { useNavigate } from 'react-router-dom'; 
import classNames from 'classnames';
import s from '../Form/Form.module.css';

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('Submit LoginForm');

  //  if (response.success) {
      navigate("/contacts", { replace: true });
    // }
  };
  return (
    <>
      <h2>Login</h2>
      <div className="box">
        <form autoComplete="off" onSubmit={handleSubmit} className={s.form}>
          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>
          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              placeholder="••••••••"
            />
          </label>
          <button         className={classNames(s.btn, s.btn_center)}
 type="submit">
            Log In
          </button>
        </form>
      </div>
    </>
  );
};
