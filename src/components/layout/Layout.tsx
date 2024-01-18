import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';

import Header from './header/header';
import Footer from './footer/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
