import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Award, Globe, ArrowRight, ArrowLeft } from 'lucide-react';
import { useData } from '../context/DataContext';
import GlassCard from '../components/ui/GlassCard';
import ThreeDButton from '../components/ui/ThreeDButton';
import MouseTracker from '../components/ui/MouseTracker';
import SEO from '../components/common/SEO';

const UniversityDetails = () => {
    const { universities, courses } = useData();
    const { id } = useParams();
    const university = universities.find(u => u.id === parseInt(id));

    // Find courses for this university
    const universityCourses = courses.filter(c => c.universityId === parseInt(id));

    if (!university) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">University not found</h2>
                    <Link to="/universities" className="text-primary hover:underline">Back to Universities</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-20 relative">
            <MouseTracker />

            {/* Hero Image */}
            <div className="h-[50vh] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
                <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute bottom-0 left-0 w-full z-20 container mx-auto px-4 pb-12">
                    <Link to="/universities" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back to List
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-bold uppercase tracking-wider mb-4 inline-block backdrop-blur-md">
                            {university.type}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 shadow-sm">{university.name}</h1>
                        <div className="flex flex-wrap gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <MapPin size={20} className="text-primary" />
                                <span>{university.location}, {university.country}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award size={20} className="text-primary" />
                                <span>Global Rank: #{university.ranking}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <GlassCard className="p-8">
                            <h2 className="text-2xl font-bold font-heading mb-4">About the University</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {university.description}
                                <br /><br />
                                Renowned for its excellence in teaching and research, {university.name} attracts high-achieving students from all over the world. The campus offers state-of-the-art facilities and a vibrant student community.
                            </p>
                        </GlassCard>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold font-heading pl-2 border-l-4 border-primary">Available Programs ({universityCourses.length})</h2>

                            {universityCourses.length > 0 ? (
                                <div className="grid grid-cols-1 gap-4">
                                    {universityCourses.map((course) => (
                                        <GlassCard key={course.id} className="p-6 hover:border-primary/50 transition-colors group">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">{course.level}</span>
                                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{course.name}</h3>
                                                    <div className="flex gap-4 text-sm text-muted-foreground">
                                                        <span>{course.duration}</span>
                                                        <span>•</span>
                                                        <span>{course.fee}</span>
                                                    </div>
                                                </div>
                                                <Link to={`/courses/${course.id}`}>
                                                    <ThreeDButton variant="outline" className="text-xs px-4 py-2">
                                                        View Details
                                                    </ThreeDButton>
                                                </Link>
                                            </div>
                                        </GlassCard>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-8 text-center border-2 border-dashed border-border rounded-2xl">
                                    <p className="text-muted-foreground">No specific courses listed yet. Contact us for full course catalog.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <GlassCard className="p-6 sticky top-24">
                            <h3 className="text-lg font-bold mb-4">Quick Facts</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between py-2 border-b border-border/50">
                                    <span className="text-muted-foreground">Tuition Range</span>
                                    <span className="font-semibold">{university.tuitionRange}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border/50">
                                    <span className="text-muted-foreground">Acceptance Rate</span>
                                    <span className="font-semibold text-green-500">High</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border/50">
                                    <span className="text-muted-foreground">Intakes</span>
                                    <span className="font-semibold">Feb, July, Oct</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-bold mb-4">Admission Support</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Get expert help with your application to {university.name}.
                                </p>
                                <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/25 transition-all">
                                    Talk to a Counselor
                                </button>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniversityDetails;
