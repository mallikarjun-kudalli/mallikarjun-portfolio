import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-content-primary selection:bg-accent-emerald selection:text-canvas overflow-x-clip">
      <Navbar />
      <main className="flex-1 overflow-x-clip">
        {children}
      </main>
      <Footer />
    </div>
  );
};
