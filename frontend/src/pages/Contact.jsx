import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import ThreeDButton from '../components/ui/ThreeDButton';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <h1 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h1>
                    <p className="text-slate-600 dark:text-slate-300 mb-8">
                        Have questions about studying abroad? Our expert counselors are here to help you navigate your journey.
                    </p>

                    <div className="space-y-6">
                        <GlassCard className="flex items-center space-x-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Phone</h3>
                                <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="flex items-center space-x-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Email</h3>
                                <p className="text-slate-600 dark:text-slate-400">team@worldedgeedu.com</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="flex items-center space-x-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Office</h3>
                                <p className="text-slate-600 dark:text-slate-400">123 Education Lane, Global City</p>
                            </div>
                        </GlassCard>
                    </div>
                </div>

                {/* Contact Form */}
                <GlassCard>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                            <textarea rows="4" className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none"></textarea>
                        </div>

                        <ThreeDButton className="w-full">Send Message</ThreeDButton>
                    </form>
                </GlassCard>
            </div>
        </div>
    );
};

export default Contact;
