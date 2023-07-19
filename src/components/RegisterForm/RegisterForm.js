import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import s from '../Form/Form.module.css';
import axios from 'axios';

const BASE_URL = `https://connections-api.herokuapp.com/`;
axios.defaults.baseURL = BASE_URL;

const newUser = {
  name: 'Anton9  Test',
  email: '9test@test.com',
  password: '098721awdawdaw3',
};

const loginTest = {
  email: '9test@test.com',
  password: '098721awdawdaw3',
};

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGIxOWU3YWFiODllYTAwMTQ2Zjk0ZDciLCJpYXQiOjE2ODkzNjgyNTF9.DYFhaMDEwVCRt-CSm_fbYIKJlvo1mbs62h-u8WRoH3E';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const RegisterForm = () => {
  const navigate = useNavigate();

  const regisrer = async () => {
    try {
      const responce = await axios.post('/users/signup', newUser);
      setAuthHeader(responce.data.token);
      console.log('Responce: ', responce);
    } catch (e) {
      console.log('Error: ', e);
    }
  };

  const login = async () => {
    try {
      const responce = await axios.post('/users/login', loginTest);
      setAuthHeader(responce.data.token);

      console.log('Responce: ', responce);
      // console.log('DATA: ', responce.data);
      console.log('TOKKKEN: ', responce.data.token);

      TOKEN = responce.data.token;

      console.log('END:', TOKEN);
    } catch (e) {
      console.log('Error: ', e);
    }
  };

  const logout = async () => {
    const params = {
      authorization: TOKEN,
    };
    console.log('Authorization', TOKEN);

    try {
      const responce = await axios.post('/users/logout', params);
      clearAuthHeader();

      console.log('TOKEN: ', TOKEN);
      console.log('Responce: ', responce);
    } catch (e) {
      console.log('Error: ', e);
    }
  };

  const refresh = () => {};

  const handelSubmit = evt => {
    evt.preventDefault();
    console.log('Hello Submit');
    // register();
    login();
    // logout();
    //  if (response.success) {
    // navigate('/login', { replace: true });
    // }
  };

  const testLogout = evt => {
    evt.preventDefault();
    console.log('Hello Submit');
    // singUp();
    // login();
    console.log('token xxx: ', TOKEN);
    logout();
    //  if (response.success) {
    // navigate('/login', { replace: true });
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
              pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
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
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              required
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
        <button
          type="testLogout"
          name="testLogout"
          onClick={testLogout}
          className={classNames(s.btn, s.btn_center)}
          style={{ marginTop: '10px' }}
        >
          testLogout
        </button>
      </div>
    </>
  );
};
