import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import Layout from './Layout';
import HomePage from 'pages/HomePage';
import Contacts from 'pages/ContactsPage';
import Login from 'pages/LoginPage';
import Register from 'pages/RegisterPage';
import NotFound from 'pages/NotFoundPage';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={Login} redirectTo="/contacts" />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  );
}
