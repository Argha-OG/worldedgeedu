import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Wallet, BookOpen, ChevronRight, Building2, CheckCircle2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import GlassCard from '../components/ui/GlassCard';
import ThreeDButton from '../components/ui/ThreeDButton';
import MouseTracker from '../components/ui/MouseTracker';
import ApplyModal from '../components/ui/ApplyModal';
import SEO from '../components/common/SEO';

const CourseDetails = () => {
    const { id } = useParams();
    const { courses, universities } = useData();
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

    const course = courses.find(c => c.id === parseInt(id));
    const university = course ? universities.find(u => u.id === course.universityId) : null;

    if (!course || !university) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Course not found</h2>
                    <Link to="/courses" className="text-primary hover:underline">Back to Courses</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 relative">
            <SEO
                title={`${course.name} at ${university.name}`}
                description={`Apply for ${course.name} at ${university.name}. Duration: ${course.duration}. Fee: ${course.fee}.`}
            />
            <MouseTracker />
            <ApplyModal
                isOpen={isApplyModalOpen}
                onClose={() => setIsApplyModalOpen(false)}
                courseName={course.name}
                universityName={university.name}
            />

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Link to="/courses" className="hover:text-primary">Courses</Link>
                    <ChevronRight size={14} />
                    <Link to={`/universities/${university.id}`} className="hover:text-primary">{university.name}</Link>
                    <ChevronRight size={14} />
                    <span className="text-foreground font-medium">{course.name}</span>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <span className="px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                                {course.level} Degree
                            </span>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                                {course.name}
                            </h1>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 backdrop-blur-sm border border-border/50">
                                <img src={university.image} alt={university.name} className="w-16 h-16 rounded-lg object-cover" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Offered by</p>
                                    <Link to={`/universities/${university.id}`} className="text-lg font-bold hover:text-primary transition-colors">
                                        {university.name}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <GlassCard className="p-5 flex items-center gap-4">
                                <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Duration</p>
                                    <p className="font-bold">{course.duration}</p>
                                </div>
                            </GlassCard>
                            <GlassCard className="p-5 flex items-center gap-4">
                                <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                                    <Wallet size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Tuition Fee</p>
                                    <p className="font-bold">{course.fee}</p>
                                </div>
                            </GlassCard>
                            <GlassCard className="p-5 flex items-center gap-4">
                                <div className="p-3 rounded-full bg-purple-500/10 text-purple-500">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Discipline</p>
                                    <p className="font-bold">{course.discipline}</p>
                                </div>
                            </GlassCard>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold font-heading">Course Overview</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                This {course.name} program at {university.name} is designed to provide students with a comprehensive understanding of the field. The curriculum balances theoretical knowledge with practical application, preparing graduates for successful careers in the global marketplace.
                            </p>

                            <h3 className="text-xl font-bold pt-4">Key Features</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                    "Industry-relevant curriculum",
                                    "Experienced faculty members",
                                    "State-of-the-art facilities",
                                    "Internship opportunities",
                                    "Global recognition",
                                    "Career support services"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="relative">
                        <div className="sticky top-24 space-y-6">
                            <GlassCard className="p-8 border-primary/20 bg-primary/5">
                                <h3 className="text-2xl font-bold mb-2">Ready to Apply?</h3>
                                <p className="text-muted-foreground mb-6 text-sm">
                                    Take the first step towards your future. Our counselors will guide you through the process.
                                </p>
                                <div className="space-y-4">
                                    <ThreeDButton
                                        className="w-full justify-center"
                                        onClick={() => setIsApplyModalOpen(true)}
                                    >
                                        Apply Now
                                    </ThreeDButton>
                                    <button className="w-full py-3 rounded-xl border border-border font-bold hover:bg-secondary/50 transition-colors">
                                        Download Brochure
                                    </button>
                                </div>
                            </GlassCard>

                            <GlassCard className="p-6">
                                <h4 className="font-bold mb-4 flex items-center gap-2">
                                    <Building2 size={18} /> About {university.name}
                                </h4>
                                <div className="text-sm text-muted-foreground space-y-3">
                                    <div className="flex justify-between">
                                        <span>Ranking</span>
                                        <span className="font-medium text-foreground">#{university.ranking}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Location</span>
                                        <span className="font-medium text-foreground">{university.location}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Type</span>
                                        <span className="font-medium text-foreground">{university.type}</span>
                                    </div>
                                    <div className="pt-4 mt-4 border-t border-border">
                                        <Link to={`/universities/${university.id}`} className="text-primary hover:underline block text-center">
                                            View University Profile
                                        </Link>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
