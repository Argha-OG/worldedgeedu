import React from 'react';
import ThreeDButton from '../components/ui/ThreeDButton';
import GlassCard from '../components/ui/GlassCard';
import MouseTracker from '../components/ui/MouseTracker';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, GraduationCap, Users, Sparkles } from 'lucide-react';
import heroImage from '../assets/hero-3d.png';

const Home = () => {
    return (
        <div className="space-y-20 pb-20 relative">
            <MouseTracker />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950 -z-20" />

                {/* Animated Background Blobs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <motion.div
                        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-[100px]"
                        animate={{
                            y: [0, 30, 0],
                            x: [0, 20, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-[100px]"
                        animate={{
                            y: [0, -30, 0],
                            x: [0, -20, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        >
                            <Sparkles size={16} className="text-primary" />
                            <span className="text-sm font-medium text-primary">Your Future Starts Here</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-heading font-bold text-slate-900 dark:text-white mb-6 leading-tight"
                        >
                            Your Gateway to <br />
                            <span className="bg-gradient-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent">
                                Global Education
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0"
                        >
                            Expert guidance for ambitious students aspiring to study at top universities worldwide.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <ThreeDButton onClick={() => window.location.href = '/universities'}>
                                Explore Universities <ArrowRight className="inline-block ml-2" size={20} />
                            </ThreeDButton>
                            <button className="px-6 py-3 font-semibold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors duration-200">
                                Book a Consultation
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0"
                        >
                            {[
                                { value: '500+', label: 'Universities' },
                                { value: '5000+', label: 'Students' },
                                { value: '50+', label: 'Countries' },
                            ].map((stat, idx) => (
                                <div key={idx} className="text-center lg:text-left">
                                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content - 3D Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative"
                        >
                            <img
                                src={heroImage}
                                alt="Education 3D Illustration"
                                className="w-full h-auto drop-shadow-2xl rounded-3xl"
                            />

                            {/* Floating elements */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                                className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-xl opacity-80 blur-sm"
                            />
                            <motion.div
                                animate={{
                                    y: [0, 15, 0],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-xl opacity-70 blur-sm"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Snapshot */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                        Our Services
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Comprehensive support at every step of your study abroad journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Globe, title: 'University Selection', desc: 'Personalized recommendations based on your profile and goals.' },
                        { icon: GraduationCap, title: 'Application Support', desc: 'Expert assistance with SOPs, LORs, and application forms.' },
                        { icon: Users, title: 'Visa Guidance', desc: 'Complete support for visa documentation and interview preparation.' },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlassCard className="text-center h-full">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{service.desc}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
