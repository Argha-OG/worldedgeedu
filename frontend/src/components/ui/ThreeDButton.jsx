import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const ThreeDButton = ({ children, className, onClick, variant = "primary", ...props }) => {
    const variants = {
        primary: {
            gradient: "bg-gradient-to-r from-primary via-purple-600 to-accent",
            shadow: "shadow-[0_8px_0_rgb(109,40,217)] hover:shadow-[0_5px_0_rgb(109,40,217)] active:shadow-[0_0px_0_rgb(109,40,217)]",
            text: "text-white",
        },
        secondary: {
            gradient: "bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800",
            shadow: "shadow-[0_8px_0_rgb(51,65,85)] hover:shadow-[0_5px_0_rgb(51,65,85)] active:shadow-[0_0px_0_rgb(51,65,85)]",
            text: "text-white",
        },
        outline: {
            gradient: "bg-white dark:bg-slate-800 border-2 border-primary",
            shadow: "shadow-[0_6px_0_rgb(109,40,217)] hover:shadow-[0_3px_0_rgb(109,40,217)] active:shadow-[0_0px_0_rgb(109,40,217)]",
            text: "text-primary dark:text-white",
        },
    };

    const selectedVariant = variants[variant];

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
                "relative px-8 py-3.5 font-bold rounded-xl group overflow-hidden",
                selectedVariant.gradient,
                selectedVariant.shadow,
                selectedVariant.text,
                "active:translate-y-[8px]",
                "transition-all duration-150",
                "hover:brightness-110",
                className
            )}
            onClick={onClick}
            {...props}
        >
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </motion.button>
    );
};

export default ThreeDButton;
