import { useAuth } from 'hooks/useAuth';
import Navigation from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMemu } from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMemu /> : <AuthNav />}
    </header>
  );
};
