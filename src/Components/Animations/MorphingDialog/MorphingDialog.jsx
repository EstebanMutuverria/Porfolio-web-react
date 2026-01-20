import React, { useState, createContext, useContext, useRef, useEffect } from 'react';
import './MorphingDialog.css';

const MorphingDialogContext = createContext();

export const MorphingDialog = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    const openDialog = () => setIsOpen(true);
    const closeDialog = (e) => {
        e.stopPropagation(); // Prevent re-triggering open if clicking inside
        setIsOpen(false);
    };

    return (
        <MorphingDialogContext.Provider value={{ isOpen, openDialog, closeDialog, containerRef }}>
            <div className={`morphing-dialog-wrapper ${isOpen ? 'open' : ''}`} ref={containerRef}>
                {children}
            </div>
        </MorphingDialogContext.Provider>
    );
};

export const MorphingDialogTrigger = ({ children, className, style }) => {
    const { isOpen, openDialog } = useContext(MorphingDialogContext);

    return (
        <div
            className={`morphing-dialog-trigger ${className || ''} ${isOpen ? 'hidden' : ''}`}
            onClick={openDialog}
            style={style}
        >
            {children}
        </div>
    );
};

export const MorphingDialogContainer = ({ children }) => {
    const { isOpen, closeDialog } = useContext(MorphingDialogContext);

    if (!isOpen) return null;

    return (
        <div className="morphing-dialog-overlay" onClick={closeDialog}>
            <div className="morphing-dialog-container" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export const MorphingDialogContent = ({ children, className, style }) => {
    return (
        <div className={`morphing-dialog-content ${className || ''}`} style={style}>
            {children}
        </div>
    );
};

export const MorphingDialogImage = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={`morphing-dialog-image ${className || ''}`} />
);

export const MorphingDialogTitle = ({ children, className }) => (
    <h3 className={`morphing-dialog-title ${className || ''}`}>{children}</h3>
);

export const MorphingDialogSubtitle = ({ children, className }) => (
    <p className={`morphing-dialog-subtitle ${className || ''}`}>{children}</p>
);

export const MorphingDialogDescription = ({ children, className }) => (
    <div className={`morphing-dialog-description ${className || ''}`}>
        {children}
    </div>
);

export const MorphingDialogClose = ({ className }) => {
    const { closeDialog } = useContext(MorphingDialogContext);
    return (
        <button className={`morphing-dialog-close ${className || ''}`} onClick={closeDialog}>
            ×
        </button>
    );
};
