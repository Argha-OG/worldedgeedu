import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';
import ThreeDButton from '../components/ui/ThreeDButton';
import { FilterSection, FilterCheckbox } from '../components/ui/FilterSection';
import { useData } from '../context/DataContext';
import { Search, MapPin, Award, BookOpen, Building2, DollarSign, X, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';

const ExploreUniversities = () => {
    const { universities } = useData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialCountry = queryParams.get('country') || '';

    const [filters, setFilters] = useState({
        search: '',
        countries: initialCountry ? [initialCountry] : [],
        rankings: [],
        degreeTypes: [],
        minBudget: '',
        maxBudget: '',
    });

    const [filteredUniversities, setFilteredUniversities] = useState(universities);

    useEffect(() => {
        let result = universities;

        // Country filter
        if (filters.countries.length > 0) {
            result = result.filter(uni => filters.countries.includes(uni.country));
        }

        // Search filter
        if (filters.search) {
            result = result.filter(uni =>
                uni.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                uni.location.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        // Ranking filter
        if (filters.rankings.length > 0) {
            result = result.filter(uni => {
                if (filters.rankings.includes('top50') && uni.ranking <= 50) return true;
                if (filters.rankings.includes('top100') && uni.ranking > 50 && uni.ranking <= 100) return true;
                if (filters.rankings.includes('top200') && uni.ranking > 100 && uni.ranking <= 200) return true;
                return false;
            });
        }

        setFilteredUniversities(result);
    }, [filters, universities]);

    const handleSearchChange = (e) => {
        setFilters(prev => ({ ...prev, search: e.target.value }));
    };

    const handleCountryToggle = (country) => {
        setFilters(prev => ({
            ...prev,
            countries: prev.countries.includes(country)
                ? prev.countries.filter(c => c !== country)
                : [...prev.countries, country]
        }));
    };

    const handleRankingToggle = (ranking) => {
        setFilters(prev => ({
            ...prev,
            rankings: prev.rankings.includes(ranking)
                ? prev.rankings.filter(r => r !== ranking)
                : [...prev.rankings, ranking]
        }));
    };

    const handleDegreeTypeToggle = (type) => {
        setFilters(prev => ({
            ...prev,
            degreeTypes: prev.degreeTypes.includes(type)
                ? prev.degreeTypes.filter(t => t !== type)
                : [...prev.degreeTypes, type]
        }));
    };

    const clearFilters = () => {
        setFilters({
            search: '',
            countries: [],
            rankings: [],
            degreeTypes: [],
            minBudget: '',
            maxBudget: '',
        });
    };

    const activeFiltersCount = filters.countries.length + filters.rankings.length + filters.degreeTypes.length + (filters.search ? 1 : 0) + (filters.minBudget || filters.maxBudget ? 1 : 0);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SEO title="Explore Universities" description="Discover top-ranked universities worldwide. Filter by location, ranking, and tuition fees to find your perfect match." />
            <div className="flex flex-col md:flex-row gap-8">
                {/* Modern Sidebar Filters */}
                <aside className="w-full md:w-80 flex-shrink-0">
                    <GlassCard className="sticky top-24 p-0">
                        {/* Filter Header */}
                        <div className="p-4 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-xl font-bold text-foreground">Filters</h2>
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
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                                <input
                                    type="text"
                                    value={filters.search}
                                    onChange={handleSearchChange}
                                    placeholder="Search universities..."
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-foregroundPlaceholder"
                                />
                            </div>
                        </div>

                        {/* Filter Sections - No Scroll */}
                        <div>
                            {/* Location Filter */}
                            <FilterSection title="Location" icon={MapPin} defaultOpen={true}>
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

                            {/* World Ranking Filter */}
                            <FilterSection title="World Ranking" icon={Award}>
                                <div className="space-y-1">
                                    <FilterCheckbox
                                        label="Top 50"
                                        checked={filters.rankings.includes('top50')}
                                        onChange={() => handleRankingToggle('top50')}
                                    />
                                    <FilterCheckbox
                                        label="Top 51-100"
                                        checked={filters.rankings.includes('top100')}
                                        onChange={() => handleRankingToggle('top100')}
                                    />
                                    <FilterCheckbox
                                        label="Top 101-200"
                                        checked={filters.rankings.includes('top200')}
                                        onChange={() => handleRankingToggle('top200')}
                                    />
                                </div>
                            </FilterSection>

                            {/* Budget Filter with Inputs */}
                            <FilterSection title="Tuition Fee" icon={DollarSign}>
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-xs font-medium text-muted-foreground mb-1">Minimum Budget</label>
                                        <input
                                            type="number"
                                            value={filters.minBudget}
                                            onChange={(e) => setFilters(prev => ({ ...prev, minBudget: e.target.value }))}
                                            placeholder="e.g. 10000"
                                            className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-muted-foreground mb-1">Maximum Budget</label>
                                        <input
                                            type="number"
                                            value={filters.maxBudget}
                                            onChange={(e) => setFilters(prev => ({ ...prev, maxBudget: e.target.value }))}
                                            placeholder="e.g. 50000"
                                            className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-sm"
                                        />
                                    </div>
                                </div>
                            </FilterSection>

                            {/* Degree Type Filter */}
                            <FilterSection title="Degree Type" icon={GraduationCap}>
                                <div className="space-y-1">
                                    {['Foundation', 'Diploma', 'BSc', 'Masters', 'PhD'].map((type) => (
                                        <FilterCheckbox
                                            key={type}
                                            label={type}
                                            checked={filters.degreeTypes.includes(type)}
                                            onChange={() => handleDegreeTypeToggle(type)}
                                        />
                                    ))}
                                </div>
                            </FilterSection>
                        </div>
                    </GlassCard>
                </aside>

                {/* Main Content */}
                <div className="flex-grow">
                    <div className="mb-6">
                        <h1 className="text-3xl font-heading font-bold text-foreground">Explore Universities</h1>
                        <p className="text-muted-foreground mt-2">
                            Found {filteredUniversities.length} {filteredUniversities.length === 1 ? 'university' : 'universities'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredUniversities.map((uni, index) => (
                            <motion.div
                                key={uni.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <GlassCard className="flex flex-col h-full group overflow-hidden p-0">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={uni.image}
                                            alt={uni.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                                            #{uni.ranking} World Rank
                                        </div>
                                    </div>

                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                                                {uni.name}
                                            </h3>
                                        </div>

                                        <div className="flex items-center text-muted-foreground text-sm mb-4">
                                            <MapPin size={16} className="mr-1" />
                                            {uni.location}
                                        </div>

                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                                            {uni.description}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                                            <span className="text-sm font-medium text-foreground">
                                                {uni.tuitionRange}
                                            </span>
                                            <Link to={`/universities/${uni.id}`}>
                                                <ThreeDButton className="px-4 py-2 text-sm">
                                                    View Details
                                                </ThreeDButton>
                                            </Link>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>

                    {filteredUniversities.length === 0 && (
                        <div className="text-center py-12">
                            <Building2 size={48} className="mx-auto text-muted mb-4" />
                            <h3 className="text-xl font-semibold text-foreground mb-2">No universities found</h3>
                            <p className="text-muted-foreground">Try adjusting your filters to see more results</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExploreUniversities;
