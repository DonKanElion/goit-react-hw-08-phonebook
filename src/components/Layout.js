import { Outlet } from 'react-router';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    // <container>
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
    // </container>
  );
};

export default Layout;
