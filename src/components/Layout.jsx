import { Suspense } from 'react';

import Header from './Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import Loader from './Loader/Loader.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
