import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { Users, Award, Globe } from 'lucide-react';
import SEO from '../components/common/SEO';

import { motion } from 'framer-motion';
import { teamMembers } from '../data/mockData';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
            <SEO title="About Us" description="Learn about WorldEdge Education's mission to connect students with global opportunities. Meet our expert counselors and leadership team." />
            {/* Mission */}
            <section className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6">About WorldEdge</h1>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                    We are dedicated to bridging the gap between ambitious students and world-class education. Our mission is to empower the next generation of global leaders through accessible and personalized educational guidance.
                </p>
            </section>

            {/* Stats/Difference */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Users, label: "Students Placed", value: "5,000+" },
                    { icon: Globe, label: "Partner Universities", value: "500+" },
                    { icon: Award, label: "Years of Excellence", value: "10+" },
                ].map((stat, idx) => (
                    <GlassCard key={idx} className="text-center py-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                            <stat.icon size={32} />
                        </div>
                        <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                        <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
                    </GlassCard>
                ))}
            </section>

            {/* Team */}
            <section>
                <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-8 text-center">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <GlassCard className="text-center p-0 overflow-hidden group h-full">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <div className="flex gap-4 text-white">
                                            {/* Social placeholders */}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                                    <p className="text-primary text-sm font-medium">{member.role}</p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
