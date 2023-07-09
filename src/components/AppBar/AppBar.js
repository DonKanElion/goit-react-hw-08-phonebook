import { useState } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMemu } from 'components/UserMenu/UserMenu';

import css from './AppBar.module.css';

export const AppBar = () => {
  const [activeUser, setActiveUser] = useState(false);
  const userState = String(activeUser);

  const handleToggle = () => {
    if (!activeUser) {
      return setActiveUser(true);
    }
    setActiveUser(false);
  };

  return (
    // <header className={css.header}>
    <header>
      <div className="container">
        <nav>
          <Navigation />
          <button type="button" onClick={handleToggle}>
            Switch Auth user {userState}
          </button>
        </nav>

        {!activeUser ? <UserMemu /> : <AuthNav />}
      </div>
    </header>
  );
};
