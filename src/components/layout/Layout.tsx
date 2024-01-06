import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';

import Header from './Header/Header';
import Footer from './Footer/Footer';

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
