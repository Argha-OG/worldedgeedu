import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/worldedge.png';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <img src={logo} alt="WorldEdge Education" className="h-24 w-auto mb-4 rounded-xl shadow-lg" />
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                            Guiding ambitious students toward achieving their academic goals at leading universities across the globe.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm">Home</Link></li>
                            <li><Link to="/universities" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm">Explore Universities</Link></li>
                            <li><Link to="/courses" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm">Explore Courses</Link></li>
                            <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm">About Us</Link></li>
                            <li><Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Destinations</h3>
                        <ul className="space-y-2">
                            <li><Link to="/universities?country=UK" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm">Study in UK</Link></li>
                            <li><Link to="/universities?country=USA" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm">Study in USA</Link></li>
                            <li><Link to="/universities?country=Australia" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm">Study in Australia</Link></li>
                            <li><Link to="/universities?country=Germany" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm">Study in Germany</Link></li>
                            <li><Link to="/universities?country=Malaysia" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm">Study in Malaysia</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-slate-600 dark:text-slate-400 text-sm">B-6, South City Plaza, Seri Kembangan, Selangor, Malaysia</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="text-primary mr-2 flex-shrink-0" />
                                <span className="text-slate-600 dark:text-slate-400 text-sm">+880 1830-344304</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="text-primary mr-2 flex-shrink-0" />
                                <span className="text-slate-600 dark:text-slate-400 text-sm">team@worldedgeedu.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} WorldEdge Education. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
