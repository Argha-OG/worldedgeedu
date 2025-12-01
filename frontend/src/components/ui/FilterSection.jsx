import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MapPin, Building2, DollarSign, Award, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

const FilterSection = ({ title, icon: Icon, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-slate-200 dark:border-slate-700 last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200"
            >
                <div className="flex items-center gap-3">
                    <Icon size={20} className="text-primary" />
                    <span className="font-semibold text-slate-900 dark:text-white">{title}</span>
                </div>
                {isOpen ? (
                    <ChevronUp size={20} className="text-slate-500" />
                ) : (
                    <ChevronDown size={20} className="text-slate-500" />
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 pb-4">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FilterCheckbox = ({ label, checked, onChange, hasSubItems = false }) => {
    const [showSubItems, setShowSubItems] = useState(false);

    return (
        <div>
            <label className="flex items-center gap-3 py-2 cursor-pointer group">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors duration-200">
                    {label}
                </span>
                {hasSubItems && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setShowSubItems(!showSubItems);
                        }}
                        className="ml-auto"
                    >
                        {showSubItems ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                )}
            </label>
        </div>
    );
};

export { FilterSection, FilterCheckbox };
