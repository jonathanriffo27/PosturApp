import React from 'react';

const ExerciseIllustration = ({ id, className = "w-full h-full" }) => {
    const illustrations = {
        // Stretch (Tónicos/Estiramiento)
        'chin-tucks': (
            <svg viewBox="0 0 200 200" className={className}>
                <circle cx="100" cy="80" r="35" fill="#0d9488" opacity="0.2"/>
                <ellipse cx="100" cy="85" rx="25" ry="30" fill="#0d9488" opacity="0.3"/>
                <rect x="85" y="120" width="30" height="60" rx="8" fill="#0d9488" opacity="0.3"/>
                <line x1="70" y1="130" x2="60" y2="170" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <line x1="130" y1="130" x2="140" y2="170" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 100 50 L 100 30" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5" markerEnd="url(#arrow)"/>
                <path d="M 100 110 L 100 130" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5"/>
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 Z" fill="#0d9488"/>
                    </marker>
                </defs>
            </svg>
        ),
        'upper-trap-stretch': (
            <svg viewBox="0 0 200 200" className={className}>
                <circle cx="100" cy="70" r="30" fill="#0d9488" opacity="0.2"/>
                <ellipse cx="100" cy="75" rx="22" ry="28" fill="#0d9488" opacity="0.3"/>
                <path d="M 85 105 L 70 160" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 115 105 L 130 160" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 100 40 Q 130 50 140 80" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5" fill="none"/>
                <circle cx="140" cy="80" r="5" fill="#0d9488"/>
            </svg>
        ),
        'levator-scapulae': (
            <svg viewBox="0 0 200 200" className={className}>
                <circle cx="90" cy="70" r="28" fill="#0d9488" opacity="0.2"/>
                <ellipse cx="90" cy="75" rx="20" ry="26" fill="#0d9488" opacity="0.3"/>
                <path d="M 75 105 L 65 160" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 105 105 L 115 160" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 90 42 Q 70 60 60 90" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5" fill="none"/>
                <circle cx="60" cy="90" r="5" fill="#0d9488"/>
            </svg>
        ),
        'neck-side-stretch': (
            <svg viewBox="0 0 200 200" className={className}>
                <circle cx="100" cy="70" r="30" fill="#0d9488" opacity="0.2"/>
                <ellipse cx="100" cy="75" rx="22" ry="28" fill="#0d9488" opacity="0.3"/>
                <path d="M 85 105 L 75 160" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 115 105 L 125 160" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 100 40 L 100 25" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5"/>
                <path d="M 100 105 L 100 120" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5"/>
            </svg>
        ),
        'chest-stretch': (
            <svg viewBox="0 0 200 200" className={className}>
                <ellipse cx="100" cy="100" rx="50" ry="60" fill="#0d9488" opacity="0.2"/>
                <path d="M 60 80 Q 40 100 60 120" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 140 80 Q 160 100 140 120" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 100 50 L 100 35" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5"/>
                <path d="M 50 100 L 35 100" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5"/>
                <path d="M 150 100 L 165 100" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5"/>
            </svg>
        ),
        
        // Strengthen (Fásicos/Fortalecimiento)
        'shoulder-blade-squeeze': (
            <svg viewBox="0 0 200 200" className={className}>
                <ellipse cx="100" cy="100" rx="45" ry="55" fill="#0d9488" opacity="0.2"/>
                <circle cx="75" cy="90" r="12" fill="#0d9488" opacity="0.4"/>
                <circle cx="125" cy="90" r="12" fill="#0d9488" opacity="0.4"/>
                <path d="M 75 90 L 100 100 L 125 90" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5" fill="none"/>
                <path d="M 60 100 L 45 100" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5"/>
                <path d="M 140 100 L 155 100" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5"/>
            </svg>
        ),
        'wall-push': (
            <svg viewBox="0 0 200 200" className={className}>
                <rect x="140" y="40" width="20" height="120" fill="#0d9488" opacity="0.3"/>
                <ellipse cx="100" cy="100" rx="40" ry="50" fill="#0d9488" opacity="0.2"/>
                <path d="M 80 90 L 120 90" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 120 90 L 140 90" stroke="#0d9488" strokeWidth="6" strokeDasharray="5,5" opacity="0.5"/>
                <path d="M 100 60 L 100 45" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5"/>
            </svg>
        ),
        'prone-y': (
            <svg viewBox="0 0 200 200" className={className}>
                <ellipse cx="100" cy="110" rx="35" ry="50" fill="#0d9488" opacity="0.2"/>
                <circle cx="100" cy="70" r="25" fill="#0d9488" opacity="0.3"/>
                <path d="M 100 85 L 60 50" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.4"/>
                <path d="M 100 85 L 140 50" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.4"/>
                <circle cx="60" cy="50" r="8" fill="#0d9488" opacity="0.5"/>
                <circle cx="140" cy="50" r="8" fill="#0d9488" opacity="0.5"/>
            </svg>
        ),
        'prone-t': (
            <svg viewBox="0 0 200 200" className={className}>
                <ellipse cx="100" cy="110" rx="35" ry="50" fill="#0d9488" opacity="0.2"/>
                <circle cx="100" cy="70" r="25" fill="#0d9488" opacity="0.3"/>
                <path d="M 100 85 L 50 85" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.4"/>
                <path d="M 100 85 L 150 85" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.4"/>
                <circle cx="50" cy="85" r="8" fill="#0d9488" opacity="0.5"/>
                <circle cx="150" cy="85" r="8" fill="#0d9488" opacity="0.5"/>
            </svg>
        ),
        'deep-neck-flexor': (
            <svg viewBox="0 0 200 200" className={className}>
                <circle cx="100" cy="80" r="32" fill="#0d9488" opacity="0.2"/>
                <ellipse cx="100" cy="85" rx="24" ry="30" fill="#0d9488" opacity="0.3"/>
                <path d="M 85 115 L 80 160" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 115 115 L 120 160" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 100 50 Q 100 40 100 30" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5"/>
                <circle cx="100" cy="30" r="5" fill="#0d9488"/>
            </svg>
        ),
        'scapular-depression': (
            <svg viewBox="0 0 200 200" className={className}>
                <ellipse cx="100" cy="90" rx="40" ry="50" fill="#0d9488" opacity="0.2"/>
                <circle cx="100" cy="55" r="28" fill="#0d9488" opacity="0.3"/>
                <path d="M 80 70 L 70 130" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 120 70 L 130 130" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" opacity="0.3"/>
                <path d="M 70 130 L 70 150" stroke="#0d9488" strokeWidth="4" markerEnd="url(#arrowDown)"/>
                <path d="M 130 130 L 130 150" stroke="#0d9488" strokeWidth="4" markerEnd="url(#arrowDown)"/>
                <defs>
                    <marker id="arrowDown" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 Z" fill="#0d9488"/>
                    </marker>
                </defs>
            </svg>
        ),
    };

    return illustrations[id] || (
        <div className={`flex items-center justify-center bg-slate-100 rounded-lg ${className}`}>
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-300">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5"/>
                <text x="50" y="55" textAnchor="middle" fontSize="10" fill="currentColor">Ejercicio</text>
            </svg>
        </div>
    );
};

export default ExerciseIllustration;
