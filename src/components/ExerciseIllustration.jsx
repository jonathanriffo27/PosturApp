import React from 'react';

const ExerciseIllustration = ({ id, className = "" }) => {
    const baseStyles = "w-full h-full text-slate-400";

    const ChestStretch = () => (
        <svg viewBox="0 0 100 100" className={baseStyles}>
            {/* Frame */}
            <path d="M20 90 V10 H80 V90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            {/* Person */}
            <circle cx="50" cy="25" r="8" fill="currentColor" opacity="0.2" />
            <path d="M50 33 V60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.2" />
            {/* Active Arms */}
            <path d="M20 40 Q35 35 50 33 Q65 35 80 40" fill="none" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" />
            <path d="M50 60 L40 85 M50 60 L60 85" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.2" />
            {/* Highlight Stretch */}
            <path d="M40 35 H60" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
    );

    const TrapStretch = () => (
        <svg viewBox="0 0 100 100" className={baseStyles}>
            {/* Head tilting */}
            <g transform="rotate(15 50 40)">
                <circle cx="50" cy="30" r="12" fill="currentColor" opacity="0.2" />
                <path d="M40 30 Q50 35 60 30" fill="none" stroke="currentColor" strokeWidth="1" />
            </g>
            {/* Body */}
            <path d="M20 80 Q50 70 80 80 L80 95 H20 Z" fill="currentColor" opacity="0.1" />
            {/* Action hand */}
            <path d="M75 50 Q60 20 50 20" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
            {/* Side of neck being stretched */}
            <path d="M38 55 Q35 45 40 35" fill="none" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" />
        </svg>
    );

    const ChinTuck = () => (
        <svg viewBox="0 0 100 100" className={baseStyles}>
            {/* Side Head */}
            <circle cx="60" cy="35" r="15" fill="currentColor" opacity="0.2" />
            <path d="M60 50 Q55 70 60 85" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.2" />
            {/* Chin */}
            <path d="M45 45 Q50 50 60 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.2" />
            {/* Action Arrow */}
            <path d="M40 50 H25 M30 45 L25 50 L30 55" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
            {/* Neck highlight */}
            <path d="M68 55 V75" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" />
        </svg>
    );

    const ScapularSqueeze = () => (
        <svg viewBox="0 0 100 100" className={baseStyles}>
            {/* Back Torso */}
            <path d="M30 30 Q50 25 70 30 L75 80 Q50 85 25 80 Z" fill="currentColor" opacity="0.1" />
            {/* Spine */}
            <path d="M50 35 V75" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
            {/* Scapulae (Shoulder Blades) */}
            <path d="M38 40 Q42 55 38 70" fill="none" stroke="var(--color-primary)" strokeWidth="5" strokeLinecap="round" />
            <path d="M62 40 Q58 55 62 70" fill="none" stroke="var(--color-primary)" strokeWidth="5" strokeLinecap="round" />
            {/* Squeeze Arrows */}
            <path d="M33 55 H43 M40 52 L43 55 L40 58" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
            <path d="M67 55 H57 M60 52 L57 55 L60 58" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );

    const illustrations = {
        'chest-stretch': <ChestStretch />,
        'trap-stretch': <TrapStretch />,
        'chin-tucks': <ChinTuck />,
        'scapular-squeezes': <ScapularSqueeze />,
    };

    return (
        <div className={`flex items-center justify-center bg-slate-50/50 ${className}`}>
            {illustrations[id] || (
                <div className="text-xs text-slate-300">No hay vista previa</div>
            )}
        </div>
    );
};

export default ExerciseIllustration;
