import React from 'react';
import { useData } from '../../context/DataContext';
import GlassCard from '../../components/ui/GlassCard';
import { School, BookOpen, Users, TrendingUp } from 'lucide-react';

const Dashboard = () => {
    const { universities, courses } = useData();

    const stats = [
        { label: 'Total Universities', value: universities.length, icon: School, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'Total Courses', value: courses.length, icon: BookOpen, color: 'text-green-500', bg: 'bg-green-500/10' },
        { label: 'Total Students', value: '5,000+', icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        { label: 'Growth', value: '+12%', icon: TrendingUp, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-heading">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <GlassCard key={idx} className="p-6 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                        <div className={`p-3 rounded-full ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                    </GlassCard>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GlassCard className="p-6 h-full">
                    <h2 className="text-xl font-bold mb-4">Recent Universities</h2>
                    <div className="space-y-4">
                        {universities.slice(-5).reverse().map(uni => (
                            <div key={uni.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <img src={uni.image} alt={uni.name} className="w-10 h-10 rounded-md object-cover" />
                                <div>
                                    <p className="font-bold text-sm">{uni.name}</p>
                                    <p className="text-xs text-muted-foreground">{uni.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                <GlassCard className="p-6 h-full">
                    <h2 className="text-xl font-bold mb-4">Recent Courses</h2>
                    <div className="space-y-4">
                        {courses.slice(-5).reverse().map(course => (
                            <div key={course.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <div>
                                    <p className="font-bold text-sm">{course.name}</p>
                                    <p className="text-xs text-muted-foreground">{course.level}</p>
                                </div>
                                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                                    {course.fee}
                                </span>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default Dashboard;
