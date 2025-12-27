import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Upload, Loader2 } from 'lucide-react';
import GlassCard from './GlassCard';

const ApplyModal = ({ isOpen, onClose, courseName, universityName }) => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={e => e.stopPropagation()}
                            className="relative w-full max-w-lg"
                        >
                            <GlassCard className="p-8 border-primary/20 bg-background/95">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                {isSuccess ? (
                                    <div className="text-center py-8">
                                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                                            <CheckCircle size={40} />
                                        </div>
                                        <h2 className="text-2xl font-bold font-heading mb-2">Application Received!</h2>
                                        <p className="text-muted-foreground mb-6">
                                            Thank you for applying to <strong>{courseName}</strong> at <strong>{universityName}</strong>. Our counselors will review your profile and contact you within 24 hours.
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-6">
                                            <h2 className="text-2xl font-bold font-heading mb-1">Start Your Journey</h2>
                                            <p className="text-sm text-muted-foreground">
                                                Applying to <span className="text-primary font-medium">{courseName}</span>
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">First Name</label>
                                                    <input required type="text" className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary outline-none transition-colors" placeholder="John" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Last Name</label>
                                                    <input required type="text" className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary outline-none transition-colors" placeholder="Doe" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email Address</label>
                                                <input required type="email" className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary outline-none transition-colors" placeholder="john@example.com" />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Phone Number</label>
                                                <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary outline-none transition-colors" placeholder="+60 123 456 789" />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Highest Qualification</label>
                                                <select className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary outline-none transition-colors appearance-none">
                                                    <option>High School / SPM / IGCSE</option>
                                                    <option>A-Levels / STPM / Foundation</option>
                                                    <option>Bachelor's Degree</option>
                                                    <option>Master's Degree</option>
                                                </select>
                                            </div>

                                            <div className="pt-4">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3 disabled:opacity-50"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader2 className="animate-spin" /> Submitting...
                                                        </>
                                                    ) : (
                                                        "Submit Application"
                                                    )}
                                                </button>
                                                <p className="text-xs text-center text-muted-foreground mt-3">
                                                    By submitting, you agree to our Terms and Privacy Policy.
                                                </p>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </GlassCard>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ApplyModal;
