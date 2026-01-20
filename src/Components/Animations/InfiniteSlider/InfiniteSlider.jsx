import React from 'react';
import './InfiniteSlider.css';

const InfiniteSlider = ({
    children,
    gap = 24,
    duration = 20,
    reverse = false
}) => {
    return (
        <div className="infinite-slider-container">
            <div
                className={`infinite-slider-track ${reverse ? 'reverse' : ''}`}
                style={{
                    gap: `${gap}px`,
                    animationDuration: `${duration}s`
                }}
            >
                {/* Render children twice to ensure seamless loop */}
                {children}
                {children}
            </div>
        </div>
    );
};

export default InfiniteSlider;
