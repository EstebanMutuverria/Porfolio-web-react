import React from 'react';
import './TextShimmer.css';

export function TextShimmer({
    children,
    className = '',
    duration = 2,
    ...props
}) {
    return (
        <span
            className={`text-shimmer ${className}`}
            style={{
                '--shimmer-duration': `${duration}s`,
            }}
            {...props}
        >
            {children}
        </span>
    );
}
