import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';
import classNames from 'classnames';
import s from '../Form/Form.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
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
              autoComplete="email"
            />
          </label>
          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </label>
          <button className={classNames(s.btn, s.btn_center)} type="submit">
            Log In
          </button>
        </form>
      </div>
    </>
  );
};
