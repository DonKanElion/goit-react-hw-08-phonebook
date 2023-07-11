import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AppBar } from './AppBar/AppBar';
// import { AuthNav } from './AuthNav/AuthNav';
import Layout from './Layout';
import HomePage from 'pages/HomePage';
import Contacts from 'pages/ContactsPage';
import Login from 'pages/LoginPage';
import Register from 'pages/RegisterPage';
import NotFound from 'pages/NotFoundPage';

export function App() {
  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
