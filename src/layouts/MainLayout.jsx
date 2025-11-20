import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// This component accepts 'children', allowing it to wrap any page content
const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="content-container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;