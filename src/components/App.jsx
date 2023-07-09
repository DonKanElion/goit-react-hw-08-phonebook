import { Routes, Route } from 'react-router-dom';
// import { AppBar } from './AppBar/AppBar';
// import { AuthNav } from './AuthNav/AuthNav';
import Layout from './Layout';
import HomePage from 'pages/HomePage';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import NotFound from 'pages/NotFound';

export function App() {
  return (
    <div
      style={{
        display: 'block',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#010101',
      }}
      className="section"
    >
      <h3 className="hero_title">Phonebook 💁‍♂️ </h3>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
