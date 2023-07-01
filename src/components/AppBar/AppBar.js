import { useState } from 'react';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMemu } from 'components/UserMenu/UserMenu';

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
    <header>
      <div className="container">
        <nav>
          <a href="/">Home</a>
          <br />
          <button type="button" onClick={handleToggle}>
            Switch Auth user {userState}
          </button>
        </nav>

        {!activeUser ? <UserMemu /> : <AuthNav />}
      </div>
      <h1>Contacts manager welcome page 💁‍♀️</h1>
    </header>
  );
};
