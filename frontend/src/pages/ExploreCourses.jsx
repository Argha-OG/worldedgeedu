import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';
import ThreeDButton from '../components/ui/ThreeDButton';
import { FilterSection, FilterCheckbox } from '../components/ui/FilterSection';
import { useData } from '../context/DataContext';
import { Search, BookOpen, Clock, DollarSign, MapPin, GraduationCap, Building2, X } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';

const ExploreCourses = () => {
    const { courses, universities } = useData();
    const [filters, setFilters] = useState({
        search: '',
        levels: [],
        countries: [],
        disciplines: [],
        minBudget: '',
        maxBudget: '',
    });

    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        // Enrich courses with university data
        const enrichedCourses = courses.map(course => {
            const uni = universities.find(u => u.id === course.universityId);
            return { ...course, university: uni };
        });

        let result = enrichedCourses;

        // Level filter
        if (filters.levels.length > 0) {
            result = result.filter(course => filters.levels.includes(course.level));
        }

        // Country filter
        if (filters.countries.length > 0) {
            result = result.filter(course => filters.countries.includes(course.university.country));
        }

        // Search filter
        if (filters.search) {
            result = result.filter(course =>
                course.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                course.university.name.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        setFilteredCourses(result);
    }, [filters]);

    const handleSearchChange = (e) => {
        setFilters(prev => ({ ...prev, search: e.target.value }));
    };

    const handleLevelToggle = (level) => {
        setFilters(prev => ({
            ...prev,
            levels: prev.levels.includes(level)
                ? prev.levels.filter(l => l !== level)
                : [...prev.levels, level]
        }));
    };

    const handleCountryToggle = (country) => {
        setFilters(prev => ({
            ...prev,
            countries: prev.countries.includes(country)
                ? prev.countries.filter(c => c !== country)
                : [...prev.countries, country]
        }));
    };

    const clearFilters = () => {
        setFilters({
            search: '',
            levels: [],
            countries: [],
            disciplines: [],
            minBudget: '',
            maxBudget: '',
        });
    };

    const activeFiltersCount = filters.levels.length + filters.countries.length + (filters.search ? 1 : 0) + (filters.minBudget || filters.maxBudget ? 1 : 0);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SEO title="Explore Courses" description="Find your ideal course from our extensive list of programs. Filter by degree type, location, discipline, and budget." />
            <div className="flex flex-col md:flex-row gap-8">
                {/* Modern Sidebar Filters */}
                <aside className="w-full md:w-80 flex-shrink-0">
                    <GlassCard className="sticky top-24 p-0">
                        {/* Filter Header */}
                        <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-primary/5 to-accent/5">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Filters</h2>
                                {activeFiltersCount > 0 && (
                                    <button
                                        onClick={clearFilters}
                                        className="text-sm text-primary hover:text-accent transition-colors duration-200 flex items-center gap-1"
                                    >
                                        <X size={16} />
                                        Clear ({activeFiltersCount})
                                    </button>
                                )}
                            </div>

                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    value={filters.search}
                                    onChange={handleSearchChange}
                                    placeholder="Search courses..."
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* Filter Sections - No Scroll */}
                        <div>
                            {/* Degree Type Filter */}
                            <FilterSection title="Degree Type" icon={GraduationCap} defaultOpen={true}>
                                <div className="space-y-1">
                                    {['Foundation', 'Diploma', 'BSc', 'Masters', 'PhD'].map((level) => (
                                        <FilterCheckbox
                                            key={level}
                                            label={level}
                                            checked={filters.levels.includes(level)}
                                            onChange={() => handleLevelToggle(level)}
                                        />
                                    ))}
                                </div>
                            </FilterSection>

                            {/* Location Filter */}
                            <FilterSection title="Location" icon={MapPin}>
                                <div className="space-y-1">
                                    {['UK', 'USA', 'Australia', 'Germany', 'Malaysia'].map((country) => (
                                        <FilterCheckbox
                                            key={country}
                                            label={country}
                                            checked={filters.countries.includes(country)}
                                            onChange={() => handleCountryToggle(country)}
                                        />
                                    ))}
                                </div>
                            </FilterSection>

                            {/* Discipline Filter */}
                            <FilterSection title="Discipline" icon={BookOpen}>
                                <div className="space-y-1">
                                    <FilterCheckbox label="Computer Science" checked={false} onChange={() => { }} />
                                    <FilterCheckbox label="Business & Management" checked={false} onChange={() => { }} />
                                    <FilterCheckbox label="Engineering" checked={false} onChange={() => { }} />
                                    <FilterCheckbox label="Medicine" checked={false} onChange={() => { }} />
                                    <FilterCheckbox label="Data Science" checked={false} onChange={() => { }} />
                                </div>
                            </FilterSection>

                            {/* Duration Filter */}
                            <FilterSection title="Duration" icon={Clock}>
                                <div className="space-y-1">
                                    <FilterCheckbox label="1-2 years" checked={false} onChange={() => { }} />
                                    <FilterCheckbox label="3-4 years" checked={false} onChange={() => { }} />
                                    <FilterCheckbox label="5+ years" checked={false} onChange={() => { }} />
                                </div>
                            </FilterSection>

                            {/* Budget Filter with Inputs */}
                            <FilterSection title="Tuition Fee" icon={DollarSign}>
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Minimum Budget</label>
                                        <input
                                            type="number"
                                            value={filters.minBudget}
                                            onChange={(e) => setFilters(prev => ({ ...prev, minBudget: e.target.value }))}
                                            placeholder="e.g. 10000"
                                            className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Maximum Budget</label>
                                        <input
                                            type="number"
                                            value={filters.maxBudget}
                                            onChange={(e) => setFilters(prev => ({ ...prev, maxBudget: e.target.value }))}
                                            placeholder="e.g. 50000"
                                            className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-sm"
                                        />
                                    </div>
                                </div>
                            </FilterSection>
                        </div>
                    </GlassCard>
                </aside>

                {/* Main Content */}
                <div className="flex-grow">
                    <div className="mb-6">
                        <h1 className="text-3xl font-heading font-bold text-slate-900 dark:text-white">Explore Courses</h1>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">
                            Found {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {filteredCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <GlassCard className="flex flex-col md:flex-row items-center gap-6 group">
                                    <div className="w-full md:w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                                        <img
                                            src={course.university.image}
                                            alt={course.university.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-200">
                                            {course.name}
                                        </h3>
                                        <p className="text-primary font-medium mb-3 flex items-center gap-2">
                                            <Building2 size={16} />
                                            {course.university.name}
                                        </p>

                                        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                                            <span className="flex items-center gap-1">
                                                <GraduationCap size={16} className="text-primary" />
                                                {course.level}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={16} className="text-primary" />
                                                {course.duration}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <DollarSign size={16} className="text-primary" />
                                                {course.fee}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={16} className="text-primary" />
                                                {course.university.country}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                                        <Link to={`/courses/${course.id}`}>
                                            <ThreeDButton className="w-full md:w-auto">
                                                View Course
                                            </ThreeDButton>
                                        </Link>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>

                    {filteredCourses.length === 0 && (
                        <div className="text-center py-12">
                            <BookOpen size={48} className="mx-auto text-slate-300 dark:text-slate-700 mb-4" />
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No courses found</h3>
                            <p className="text-slate-600 dark:text-slate-400">Try adjusting your filters to see more results</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExploreCourses;
