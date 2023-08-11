import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { register } from 'redux/auth/operations';
import s from '../Form/Form.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const checkEmail = form.elements.email.value;

    const validEmail = checkEmail.includes('.com');
    if (!validEmail) {
      return Notify.warning('Please fill in a valid email address.');
    }

    dispatch(
      register({
        name: form.elements.name.value,
        email: checkEmail,
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
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
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
              pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
              required
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
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              required
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
