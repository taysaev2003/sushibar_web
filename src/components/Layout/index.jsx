import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  <main>
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  </main>;
};

export default Layout;
