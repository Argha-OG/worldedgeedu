import React from 'react';
import ThreeDButton from '../components/ui/ThreeDButton';
import GlassCard from '../components/ui/GlassCard';
import MouseTracker from '../components/ui/MouseTracker';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, GraduationCap, Users, Sparkles, CheckCircle, Star } from 'lucide-react';
import { testimonials } from '../data/mockData';
import { useData } from '../context/DataContext';
import heroImage from '../assets/hero-3d.png';

const Home = () => {
    const { universities: topUniversities } = useData();
    return (
        <div className="space-y-20 pb-20 relative">
            <SEO title="Home" />
            <MouseTracker />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-background -z-20" />

                {/* Animated Background Blobs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <motion.div
                        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]"
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
                        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[100px]"
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
                            className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight"
                        >
                            Your Gateway to <br />
                            <span className="text-gradient">
                                Global Education
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0"
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
                            <a
                                href="https://wa.me/8801830344304"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 font-semibold text-foreground hover:text-primary transition-colors duration-200"
                            >
                                Book a Consultation
                            </a>
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
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
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
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                        Our Services
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
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
                                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                                <p className="text-muted-foreground">{service.desc}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Top Universities Section */}
            <section className="py-20 overflow-hidden bg-background border-y border-border/50">
                <div className="container mx-auto px-4 mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                        Top Universities We Work With
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Providing access to prestigious institutions in Malaysia and Australia
                    </p>
                </div>

                <div className="relative w-full overflow-hidden group">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-16 min-w-full"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                                repeatType: "loop"
                            }}
                        >
                            {/* Duplicate the list enough times to ensure it covers screens and allows smooth looping */}
                            {[...topUniversities, ...topUniversities, ...topUniversities, ...topUniversities].map((uni, idx) => (
                                <div
                                    key={idx}
                                    className="w-32 h-32 flex-shrink-0 flex items-center justify-center p-4 glass-panel rounded-xl bg-white/50 dark:bg-white/5 transition-all duration-300 hover:scale-110"
                                    title={uni.name}
                                >
                                    <img
                                        src={uni.logo}
                                        alt={uni.name}
                                        className="max-w-full max-h-full object-contain"
                                        onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${uni.name}&background=random` }}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="container mx-auto px-4 py-20 relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                        Why Choose WorldEdge?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Your trusted partner in global education consulting
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Expert Counseling", desc: "Certified counselors with 10+ years experience guiding students.", icon: Users },
                        { title: "Global Network", desc: "Direct partnerships with 500+ universities across 5 continents.", icon: Globe },
                        { title: "End-to-End Support", desc: "From application to visa and accommodation, we handle it all.", icon: CheckCircle },
                    ].map((item, idx) => (
                        <GlassCard key={idx} className="p-8 text-center hover:scale-105 transition-transform duration-300 group">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* Student Reviews Section */}
            <section className="container mx-auto px-4 py-20 bg-secondary/30 rounded-3xl my-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                        Student Success Stories
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((review, idx) => (
                        <GlassCard key={idx} className="p-8 flex flex-col h-full hover:shadow-3d transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
                                <div>
                                    <h4 className="font-bold text-foreground">{review.name}</h4>
                                    <p className="text-xs text-primary">{review.university}</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground italic flex-grow">"{review.quote}"</p>
                            <div className="flex gap-1 text-yellow-500 mt-4">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
