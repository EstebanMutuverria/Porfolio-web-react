import React from 'react';
import { motion } from 'motion/react';

const defaultContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const defaultItemVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

const presetVariants = {
    fade: {
        container: defaultContainerVariants,
        item: defaultItemVariants,
    },
    // Add more presets if needed
};

export function TextEffect({
    children,
    per = 'char',
    preset = 'fade',
    className,
}) {
    const words = children.split(' ');
    const variants = presetVariants[preset];

    if (per === 'char') {
        return (
            <motion.div
                className={className}
                initial="hidden"
                animate="visible"
                variants={variants.container}
                style={{ display: 'inline-block' }}
            >
                {children.split('').map((char, index) => (
                    <motion.span key={index} variants={variants.item}>
                        {char}
                    </motion.span>
                ))}
            </motion.div>
        );
    }

    // Fallback or other implementations (word, line) can be added here
    return <div>{children}</div>;
}
