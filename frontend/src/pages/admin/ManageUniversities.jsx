import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import GlassCard from '../../components/ui/GlassCard';
import ThreeDButton from '../../components/ui/ThreeDButton';
import { Edit, Trash2, Plus, X, Search, Image as ImageIcon } from 'lucide-react';

const ManageUniversities = () => {
    const { universities, addUniversity, updateUniversity, deleteUniversity } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingId, setEditingId] = useState(null);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        country: '',
        ranking: '',
        description: '',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Default mock image
        tuitionRange: '',
        type: 'Public'
    });

    const resetForm = () => {
        setFormData({
            name: '',
            location: '',
            country: '',
            ranking: '',
            description: '',
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
            tuitionRange: '',
            type: 'Public'
        });
        setEditingId(null);
    };

    const handleOpenModal = (uni = null) => {
        if (uni) {
            setFormData(uni);
            setEditingId(uni.id);
        } else {
            resetForm();
        }
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            updateUniversity(editingId, formData);
        } else {
            addUniversity(formData);
        }
        setIsModalOpen(false);
        resetForm();
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this university?')) {
            deleteUniversity(id);
        }
    };

    const filteredUniversities = universities.filter(uni =>
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold font-heading">Manage Universities</h1>
                <ThreeDButton onClick={() => handleOpenModal()}>
                    <Plus size={20} className="mr-2" /> Add University
                </ThreeDButton>
            </div>

            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                    type="text"
                    placeholder="Search universities..."
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
                                <th className="p-4">University</th>
                                <th className="p-4">Location</th>
                                <th className="p-4">Ranking</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                            {filteredUniversities.map((uni) => (
                                <tr key={uni.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img src={uni.image} alt={uni.name} className="w-10 h-10 rounded-md object-cover" />
                                            <span className="font-bold text-sm">{uni.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-muted-foreground">{uni.location}, {uni.country}</td>
                                    <td className="p-4 text-sm font-medium">#{uni.ranking}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => handleOpenModal(uni)}
                                                className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                                            >
                                                <Edit size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(uni.id)}
                                                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredUniversities.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="p-8 text-center text-muted-foreground">
                                        No universities found.
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
                            <h2 className="text-xl font-bold">{editingId ? 'Edit University' : 'Add New University'}</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-muted-foreground hover:text-foreground">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">University Name</label>
                                    <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="input-field" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Country</label>
                                    <select required value={formData.country} onChange={e => setFormData({ ...formData, country: e.target.value })} className="input-field">
                                        <option value="">Select Country</option>
                                        <option value="UK">UK</option>
                                        <option value="USA">USA</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Germany">Germany</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Location (City)</label>
                                    <input type="text" required value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} className="input-field" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">World Ranking</label>
                                    <input type="number" required value={formData.ranking} onChange={e => setFormData({ ...formData, ranking: e.target.value })} className="input-field" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Tuition Range</label>
                                    <input type="text" required value={formData.tuitionRange} onChange={e => setFormData({ ...formData, tuitionRange: e.target.value })} className="input-field" placeholder="$15k - $25k / year" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Type</label>
                                    <select required value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })} className="input-field">
                                        <option value="Public">Public</option>
                                        <option value="Private">Private</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Image URL</label>
                                <div className="flex gap-2">
                                    <input type="url" required value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} className="input-field flex-grow" />
                                    <div className="w-10 h-10 rounded bg-slate-100 flex-shrink-0 overflow-hidden">
                                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">Use a direct image link (e.g., from Unsplash)</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Description</label>
                                <textarea required rows="4" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="input-field w-full min-h-[100px]"></textarea>
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">Cancel</button>
                                <ThreeDButton type="submit">
                                    {editingId ? 'Save Changes' : 'Create University'}
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

export default ManageUniversities;
