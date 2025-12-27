import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/worldedge.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const getPageTitle = (pathname) => {
        if (pathname === '/') return '';
        if (pathname.startsWith('/universities')) return 'Universities';
        if (pathname.startsWith('/courses')) return 'Courses';
        if (pathname === '/about') return 'About Us';
        if (pathname === '/contact') return 'Contact';
        return '';
    };

    const pageTitle = getPageTitle(location.pathname);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Universities', path: '/universities' },
        { name: 'Courses', path: '/courses' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            isScrolled || isOpen
                ? "bg-background/90 backdrop-blur-md shadow-3d border-b border-border"
                : "bg-background/70 backdrop-blur-sm"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="flex-shrink-0 h-16 w-auto ">
                            <img src={logo} alt="WorldEdge Education" className="rounded-md h-full w-auto" />
                        </Link>
                        {pageTitle && (
                            <div className="hidden md:flex items-center pl-4 border-l-2 border-border h-8">
                                <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{pageTitle}</span>
                            </div>
                        )}
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => cn(
                                        "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                                        isActive
                                            ? "text-primary bg-primary/10"
                                            : "text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-primary/5"
                                    )}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="relative p-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border border-primary/30 transition-all duration-200 group"
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {theme === 'light' ? (
                                    <Moon size={20} className="text-primary" />
                                ) : (
                                    <Sun size={20} className="text-yellow-400" />
                                )}
                            </motion.div>
                        </button>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => cn(
                                        "block px-3 py-2 rounded-md text-base font-medium",
                                        isActive
                                            ? "text-primary bg-primary/10"
                                            : "text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-primary/5"
                                    )}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-primary/5 flex items-center gap-2"
                            >
                                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
