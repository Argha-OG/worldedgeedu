import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import GlassCard from '../../components/ui/GlassCard';
import ThreeDButton from '../../components/ui/ThreeDButton';
import { Edit, Trash2, Plus, X, Search, BookOpen } from 'lucide-react';

const ManageCourses = () => {
    const { courses, universities, addCourse, updateCourse, deleteCourse } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingId, setEditingId] = useState(null);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        universityId: '',
        level: 'BSc',
        duration: '',
        fee: '',
        discipline: '',
    });

    const resetForm = () => {
        setFormData({
            name: '',
            universityId: '',
            level: 'BSc',
            duration: '',
            fee: '',
            discipline: '',
        });
        setEditingId(null);
    };

    const handleOpenModal = (course = null) => {
        if (course) {
            setFormData(course);
            setEditingId(course.id);
        } else {
            resetForm();
        }
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert universityId to number
        const payload = { ...formData, universityId: parseInt(formData.universityId) };

        if (editingId) {
            updateCourse(editingId, payload);
        } else {
            addCourse(payload);
        }
        setIsModalOpen(false);
        resetForm();
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this course?')) {
            deleteCourse(id);
        }
    };

    const getUniversityName = (id) => {
        const uni = universities.find(u => u.id === id);
        return uni ? uni.name : 'Unknown University';
    };

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getUniversityName(course.universityId).toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold font-heading">Manage Courses</h1>
                <ThreeDButton onClick={() => handleOpenModal()}>
                    <Plus size={20} className="mr-2" /> Add Course
                </ThreeDButton>
            </div>

            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* Table */}
            <GlassCard className="overflow-hidden p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-sm uppercase">
                                <th className="p-4">Course Name</th>
                                <th className="p-4">University</th>
                                <th className="p-4">Level</th>
                                <th className="p-4">Fee</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                            {filteredCourses.map((course) => (
                                <tr key={course.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="p-4 font-bold text-sm">{course.name}</td>
                                    <td className="p-4 text-sm text-muted-foreground">{getUniversityName(course.universityId)}</td>
                                    <td className="p-4 text-sm">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${course.level === 'BSc' ? 'bg-blue-100 text-blue-700' :
                                                course.level === 'Masters' ? 'bg-purple-100 text-purple-700' :
                                                    'bg-green-100 text-green-700'
                                            }`}>
                                            {course.level}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-muted-foreground">{course.fee}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => handleOpenModal(course)}
                                                className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                                            >
                                                <Edit size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(course.id)}
                                                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredCourses.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-muted-foreground">
                                        No courses found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </GlassCard>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="sticky top-0 p-6 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex justify-between items-center z-10">
                            <h2 className="text-xl font-bold">{editingId ? 'Edit Course' : 'Add New Course'}</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-muted-foreground hover:text-foreground">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Course Name</label>
                                    <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="input-field" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">University</label>
                                    <select required value={formData.universityId} onChange={e => setFormData({ ...formData, universityId: e.target.value })} className="input-field">
                                        <option value="">Select University</option>
                                        {universities.map(uni => (
                                            <option key={uni.id} value={uni.id}>{uni.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Level</label>
                                    <select required value={formData.level} onChange={e => setFormData({ ...formData, level: e.target.value })} className="input-field">
                                        <option value="Foundation">Foundation</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="BSc">BSc</option>
                                        <option value="Masters">Masters</option>
                                        <option value="PhD">PhD</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Discipline</label>
                                    <input type="text" required value={formData.discipline} onChange={e => setFormData({ ...formData, discipline: e.target.value })} className="input-field" placeholder="e.g. Computer Science" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Duration</label>
                                    <input type="text" required value={formData.duration} onChange={e => setFormData({ ...formData, duration: e.target.value })} className="input-field" placeholder="e.g. 3 Years" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Fee</label>
                                    <input type="text" required value={formData.fee} onChange={e => setFormData({ ...formData, fee: e.target.value })} className="input-field" placeholder="e.g. $15,000 / year" />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">Cancel</button>
                                <ThreeDButton type="submit">
                                    {editingId ? 'Save Changes' : 'Create Course'}
                                </ThreeDButton>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <style>{`
                .input-field {
                    width: 100%;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    background-color: var(--background);
                    border: 1px solid var(--border);
                    outline: none;
                    transition: all 0.2s;
                }
                .input-field:focus {
                    ring: 2px;
                    ring-color: var(--primary);
                    border-color: transparent;
                }
            `}</style>
        </div>
    );
};

export default ManageCourses;
