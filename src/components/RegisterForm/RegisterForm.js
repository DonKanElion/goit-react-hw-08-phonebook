import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import s from '../Form/Form.module.css';

export const RegisterForm = () => {

  const navigate = useNavigate();

  const handelSubmit = evt => {
    evt.preventDefault();
    console.log('Hello Submit');

      //  if (response.success) {
      navigate("/login", { replace: true });
    // }
  };

  return (
    <>
      <h2>Registration</h2>
      <div className="box">
        <form onSubmit={handelSubmit} className={s.form}>
          <label className={s.label}>
            Username
            <input
              className={s.input}
              type="text"
              name="name"
              placeholder="Barbara"
            ></input>
          </label>
          <label className={s.label}>
            Email{' '}
            <input
              className={s.input}
              type="email"
              name="email"
              placeholder="ex: myname@example.com"
            ></input>
          </label>
          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              placeholder="••••••••"
            ></input>
          </label>
          <button
            type="submit"
            name="register"
            // onClick={handleSubmit}
            className={classNames(s.btn, s.btn_center)}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};
