import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const ThreeDButton = ({ children, className, onClick, variant = "primary", size = "md", ...props }) => {

    // Style configurations
    const variants = {
        primary: {
            // Gradient top, Deep solid shadow
            base: "bg-gradient-to-r from-[#c026d3] to-[#9333ea] text-white", // Pink to Purple
            shadow: "bg-[#4c1d95]", // Deep dark purple (indigo-900 like)
            border: "border-t border-white/20",
        },
        secondary: {
            // White top, Grey/Subtle shadow
            base: "bg-white text-slate-900 border border-slate-200",
            shadow: "bg-slate-300",
            border: "border-b-4 border-slate-300", // Fallback if 3D layer fails
        },
        outline: {
            // Transparent top, Colored border/shadow
            base: "bg-white border-2 border-[#9333ea] text-[#9333ea]",
            shadow: "bg-[#9333ea]/20",
            border: "",
        }
    };

    const sizes = {
        sm: "h-8 px-4 text-xs min-w-[100px]",
        md: "h-12 px-8 text-sm min-w-[140px]",
        lg: "h-14 px-10 text-base min-w-[160px]",
    };

    const selectedVariant = variants[variant] || variants.primary;
    const selectedSize = sizes[size] || sizes.md;

    return (
        <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ y: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={cn(
                "relative group inline-flex isolate",
                className
            )}
            onClick={onClick}
            {...props}
        >
            {/* Shadow Layer (The Base) */}
            <div className={cn(
                "absolute inset-0 rounded-full translate-y-[8px] w-full h-full -z-10",
                selectedVariant.shadow
            )} />

            {/* Main Button Face */}
            <div className={cn(
                "relative flex items-center justify-center font-heading font-bold rounded-full uppercase tracking-wider w-full h-full z-10",
                selectedVariant.base,
                selectedVariant.border,
                selectedSize
            )}>
                {children}
            </div>
        </motion.button>
    );
};

export default ThreeDButton;
