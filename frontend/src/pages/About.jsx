import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { Users, Award, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
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
                    {[1, 2, 3, 4].map((i) => (
                        <GlassCard key={i} className="text-center p-0 overflow-hidden">
                            <div className="h-48 bg-slate-200 dark:bg-slate-800 w-full" />
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Team Member {i}</h3>
                                <p className="text-primary text-sm">Senior Counselor</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
