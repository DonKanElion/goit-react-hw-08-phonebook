import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { register } from 'redux/auth/operations';
import s from '../Form/Form.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <h2>Registration</h2>
      <div className="box">
        <form onSubmit={handleSubmit} className={s.form}>
          <label className={s.label}>
            Username
            <input
              className={s.input}
              type="text"
              name="name"
              placeholder="Barbara"
              autoComplete="username"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
            ></input>
          </label>
          <label className={s.label}>
            Email{' '}
            <input
              className={s.input}
              type="email"
              name="email"
              placeholder="ex: myname@example.com"
              autoComplete="email"
              // pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
              // required
            ></input>
          </label>
          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              placeholder="••••••••"
              autoComplete="new-password"
              // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              // required
            ></input>
          </label>
          <button type="submit" className={classNames(s.btn, s.btn_center)}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};
