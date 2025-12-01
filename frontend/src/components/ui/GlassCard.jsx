import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const GlassCard = ({ children, className, hoverEffect = true, ...props }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
                "glass-panel rounded-xl p-6 transition-all duration-200",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
