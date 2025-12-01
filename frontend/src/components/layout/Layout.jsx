import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top when route changes
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />
            <main className="pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
