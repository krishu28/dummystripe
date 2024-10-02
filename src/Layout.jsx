// Layout.js
import React from 'react';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import ScrollToTop from 'ScrollToTop';

const Layout = ({ children }) => {
    return (
        <div>
            <ScrollToTop />
            <NavBar />
            {children}  
            <Footer />
        </div>
    );
};

export default Layout;
