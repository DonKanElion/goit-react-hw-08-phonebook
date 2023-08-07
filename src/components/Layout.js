import { Outlet } from 'react-router';
import { AppBar } from './AppBar/AppBar';
import { Footer } from './Footer/Footer';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '0 16px',
        textAlign: 'center',
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
