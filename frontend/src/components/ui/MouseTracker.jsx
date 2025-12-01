import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseTracker = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {/* Gradient blob that follows cursor */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                animate={{
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
                }}
            />
        </>
    );
};

export default MouseTracker;
