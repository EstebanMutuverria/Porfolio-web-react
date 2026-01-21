import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import './HoverBorderGradient.css';

export function HoverBorderGradient({
    children,
    containerClassName = '',
    className = '',
    as: Tag = 'button',
    duration = 1,
    clockwise = true,
    ...props
}) {
    const [direction, setDirection] = useState('TOP');

    const rotateDirection = (current) => {
        const directions = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
        const currentIndex = directions.indexOf(current);
        const nextIndex = clockwise
            ? (currentIndex - 1 + 4) % 4
            : (currentIndex + 1) % 4;
        return directions[nextIndex];
    };

    const movingMap = {
        TOP: 'radial-gradient(20.7% 50% at 50% 0%, var(--accent-light) 0%, rgba(255, 255, 255, 0) 100%)',
        LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, var(--accent-light) 0%, rgba(255, 255, 255, 0) 100%)',
        BOTTOM: 'radial-gradient(20.7% 50% at 50% 100%, var(--accent-light) 0%, rgba(255, 255, 255, 0) 100%)',
        RIGHT: 'radial-gradient(16.2% 41.199999999999996% at 100% 50%, var(--accent-light) 0%, rgba(255, 255, 255, 0) 100%)',
    };

    const highlight = 'radial-gradient(75% 181.15942028985506% at 50% 50%, var(--accent-color) 0%, rgba(255, 255, 255, 0) 100%)';

    useEffect(() => {
        if (!props.hovered) { // Only animate if not controlled or always animate? Original only animates on interval
            const interval = setInterval(() => {
                setDirection((prevState) => rotateDirection(prevState));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [duration, clockwise, props.hovered]);

    // Logic simplified: The original component animates the 'background' of a div underneath. 
    // We will replicate the structure.

    return (
        <Tag
            className={`hover-border-gradient-container ${containerClassName}`}
            {...props}
        >
            <div className={`hover-border-gradient-content ${className}`}>
                {children}
            </div>

            {/* The border moving gradient */}
            <motion.div
                className="hover-border-gradient-bg"
                style={{
                    filter: 'blur(2px)',
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    borderRadius: 'inherit'
                }}
                animate={{
                    background: movingMap[direction],
                }}
                transition={{ ease: 'linear', duration: duration }}
            />

            {/* The background of the button (to cover the center) */}
            <div className="hover-border-gradient-inner-bg" />
        </Tag>
    );
}
