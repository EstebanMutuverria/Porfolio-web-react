import React from 'react';
import './SpinningText.css';

const SpinningText = ({
    children,
    radius = 5,
    fontSize = 1.2,
    className = '',
    duration = 10
}) => {
    const text = typeof children === 'string' ? children : '';
    const letters = text.split('');
    const totalLetters = letters.length;
    // Calculate angle per letter
    const deg = 360 / totalLetters;

    return (
        <div
            className={`spinning-text-container ${className}`}
            style={{
                width: `${radius * 2.5}rem`,
                height: `${radius * 2.5}rem`,
                fontSize: `${fontSize}rem`
            }}
        >
            <div
                className="spinning-text-circle"
                style={{ animationDuration: `${duration}s` }}
            >
                {letters.map((letter, i) => (
                    <span
                        key={i}
                        className="spinning-text-char"
                        style={{
                            transform: `rotate(${i * deg}deg) translateY(-${radius}rem)`,
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div >
    );
};

export default SpinningText;
