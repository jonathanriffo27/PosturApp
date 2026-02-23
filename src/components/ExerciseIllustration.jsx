import React from 'react';

const ExerciseIllustration = ({ id, className = "w-full h-full" }) => {
    const illustrations = {
        // ============== STRETCH (TÓNICOS) ==============
        
        'chin-tucks': (
            <svg viewBox="0 0 300 300" className={className}>
                {/* Fondo */}
                <rect width="300" height="300" fill="#f0fdfa" rx="16"/>
                
                {/* Línea de postura correcta */}
                <line x1="20" y1="150" x2="280" y2="150" stroke="#0d9488" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
                
                {/* Figura humana - Perfil */}
                <g transform="translate(50, 50)">
                    {/* Cuerpo */}
                    <path d="M 100 80 L 100 180" stroke="#0d9488" strokeWidth="12" strokeLinecap="round" fill="none"/>
                    {/* Hombros */}
                    <path d="M 70 90 L 130 90" stroke="#0d9488" strokeWidth="10" strokeLinecap="round" fill="none"/>
                    {/* Brazos */}
                    <path d="M 75 95 L 60 140" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" fill="none"/>
                    <path d="M 125 95 L 140 140" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" fill="none"/>
                    
                    {/* Cabeza - Posición inicial (fantasma) */}
                    <circle cx="100" cy="55" r="28" fill="#0d9488" opacity="0.2" stroke="#0d9488" strokeWidth="2" strokeDasharray="5,5"/>
                    
                    {/* Cabeza - Posición final (chin tuck) */}
                    <circle cx="85" cy="55" r="28" fill="#0d9488" opacity="0.8"/>
                    <circle cx="92" cy="50" r="4" fill="#14b8a6"/>
                    <circle cx="100" cy="50" r="4" fill="#14b8a6"/>
                    
                    {/* Flecha de movimiento */}
                    <path d="M 100 55 L 85 55" stroke="#0d9488" strokeWidth="4" markerEnd="url(#arrowLeft)" fill="none"/>
                </g>
                
                {/* Texto */}
                <text x="150" y="270" textAnchor="middle" fill="#0d9488" fontSize="14" fontWeight="bold">Retraer la barbilla</text>
                
                {/* Marker flecha */}
                <defs>
                    <marker id="arrowLeft" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                        <path d="M 0 5 L 10 0 L 10 10 Z" fill="#0d9488"/>
                    </marker>
                </defs>
            </svg>
        ),
        
        'upper-trap-stretch': (
            <svg viewBox="0 0 300 300" className={className}>
                <rect width="300" height="300" fill="#f0fdfa" rx="16"/>
                
                <g transform="translate(50, 40)">
                    {/* Cuerpo */}
                    <path d="M 100 100 L 100 200" stroke="#0d9488" strokeWidth="12" strokeLinecap="round" fill="none"/>
                    <path d="M 70 110 L 130 110" stroke="#0d9488" strokeWidth="10" strokeLinecap="round" fill="none"/>
                    
                    {/* Cabeza */}
                    <circle cx="100" cy="65" r="30" fill="#0d9488" opacity="0.8"/>
                    <circle cx="93" cy="60" r="4" fill="#14b8a6"/>
                    <circle cx="101" cy="60" r="4" fill="#14b8a6"/>
                    
                    {/* Brazo derecho estirado */}
                    <path d="M 125 115 L 150 180" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" fill="none"/>
                    <circle cx="150" cy="180" r="10" fill="#0d9488" opacity="0.5"/>
                    
                    {/* Mano izquierda en cabeza */}
                    <path d="M 75 115 L 60 70" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" fill="none"/>
                    <circle cx="60" cy="70" r="8" fill="#0d9488"/>
                    
                    {/* Flecha de inclinación */}
                    <path d="M 100 35 Q 70 50 60 70" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5" markerEnd="url(#arrow)" fill="none"/>
                    
                    {/* Músculo trapecio resaltado */}
                    <path d="M 100 65 Q 120 80 130 110" stroke="#14b8a6" strokeWidth="4" fill="none" opacity="0.6"/>
                </g>
                
                <text x="150" y="270" textAnchor="middle" fill="#0d9488" fontSize="14" fontWeight="bold">Inclinar cabeza lateralmente</text>
                
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                        <path d="M 0 5 L 10 0 L 10 10 Z" fill="#0d9488"/>
                    </marker>
                </defs>
            </svg>
        ),
        
        'levator-scapulae': (
            <svg viewBox="0 0 300 300" className={className}>
                <rect width="300" height="300" fill="#f0fdfa" rx="16"/>
                
                <g transform="translate(50, 40)">
                    {/* Cuerpo */}
                    <path d="M 100 100 L 100 200" stroke="#0d9488" strokeWidth="12" strokeLinecap="round" fill="none"/>
                    <path d="M 70 110 L 130 110" stroke="#0d9488" strokeWidth="10" strokeLinecap="round" fill="none"/>
                    
                    {/* Cabeza rotada */}
                    <ellipse cx="85" cy="60" rx="28" ry="32" fill="#0d9488" opacity="0.8"/>
                    <circle cx="78" cy="55" r="4" fill="#14b8a6"/>
                    
                    {/* Brazo derecho abajo */}
                    <path d="M 125 115 L 135 170" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" fill="none"/>
                    <circle cx="135" cy="170" r="8" fill="#0d9488" opacity="0.5"/>
                    
                    {/* Mano izquierda en cabeza */}
                    <path d="M 75 115 L 55 65" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" fill="none"/>
                    <circle cx="55" cy="65" r="8" fill="#0d9488"/>
                    
                    {/* Flecha rotación */}
                    <path d="M 100 30 Q 70 45 55 65" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5" markerEnd="url(#arrow)" fill="none"/>
                </g>
                
                <text x="150" y="270" textAnchor="middle" fill="#0d9488" fontSize="13" fontWeight="bold">Rotar y flexionar cuello</text>
                
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                        <path d="M 0 5 L 10 0 L 10 10 Z" fill="#0d9488"/>
                    </marker>
                </defs>
            </svg>
        ),
        
        'neck-side-stretch': (
            <svg viewBox="0 0 300 300" className={className}>
                <rect width="300" height="300" fill="#f0fdfa" rx="16"/>
                
                <g transform="translate(50, 50)">
                    {/* Cuerpo */}
                    <path d="M 100 90 L 100 190" stroke="#0d9488" strokeWidth="12" strokeLinecap="round" fill="none"/>
                    <path d="M 70 100 L 130 100" stroke="#0d9488" strokeWidth="10" strokeLinecap="round" fill="none"/>
                    
                    {/* Cabeza - posición neutra (fantasma) */}
                    <circle cx="100" cy="60" r="28" fill="#0d9488" opacity="0.15" stroke="#0d9488" strokeWidth="2" strokeDasharray="5,5"/>
                    
                    {/* Cabeza - inclinada */}
                    <circle cx="100" cy="60" r="28" fill="#0d9488" opacity="0.8"/>
                    <circle cx="93" cy="55" r="4" fill="#14b8a6"/>
                    <circle cx="101" cy="55" r="4" fill="#14b8a6"/>
                    
                    {/* Flecha lateral */}
                    <path d="M 100 30 L 100 20" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5"/>
                    <path d="M 100 90 L 100 100" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,5"/>
                    
                    {/* Línea de alineación */}
                    <line x1="100" y1="32" x2="100" y2="88" stroke="#14b8a6" strokeWidth="2" opacity="0.5"/>
                </g>
                
                <text x="150" y="270" textAnchor="middle" fill="#0d9488" fontSize="14" fontWeight="bold">Inclinación lateral suave</text>
            </svg>
        ),
        
        'chest-stretch': (
            <svg viewBox="0 0 300 300" className={className}>
                <rect width="300" height="300" fill="#f0fdfa" rx="16"/>
                
                <g transform="translate(50, 50)">
                    {/* Cuerpo */}
                    <ellipse cx="100" cy="140" rx="45" ry="60" fill="#0d9488" opacity="0.3"/>
                    
                    {/* Brazos abiertos */}
                    <path d="M 55 120 L 20 100" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" fill="none"/>
                    <path d="M 145 120 L 180 100" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" fill="none"/>
                    <circle cx="20" cy="100" r="9" fill="#0d9488" opacity="0.6"/>
                    <circle cx="180" cy="100" r="9" fill="#0d9488" opacity="0.6"/>
                    
                    {/* Cabeza */}
                    <circle cx="100" cy="75" r="28" fill="#0d9488" opacity="0.8"/>
                    <circle cx="93" cy="70" r="4" fill="#14b8a6"/>
                    <circle cx="101" cy="70" r="4" fill="#14b8a6"/>
                    
                    {/* Flechas de apertura */}
                    <path d="M 40 110 L 20 100" stroke="#0d9488" strokeWidth="3" markerEnd="url(#arrow)" fill="none"/>
                    <path d="M 160 110 L 180 100" stroke="#0d9488" strokeWidth="3" markerEnd="url(#arrow)" fill="none"/>
                    
                    {/* Pecho resaltado */}
                    <ellipse cx="100" cy="130" rx="30" ry="35" fill="#14b8a6" opacity="0.2"/>
                </g>
                
                <text x="150" y="270" textAnchor="middle" fill="#0d9488" fontSize="14" fontWeight="bold">Abrir brazos lateralmente</text>
                
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                        <path d="M 0 5 L 10 0 L 10 10 Z" fill="#0d9488"/>
                    </marker>
                </defs>
            </svg>
        ),
        
        // ============== STRENGTHEN (FÁSICOS) ==============
        
        'shoulder-blade-squeeze': (
            <svg viewBox="0 0 300 300" className={className}>
                <rect width="300" height="300" fill="#f0fdfa" rx="16"/>
                
                <g transform="translate(50, 50)">
                    {/* Cuerpo - vista posterior */}
                    <ellipse cx="100" cy="140" rx="50" ry="65" fill="#0d9488" opacity="0.3"/>
                    
                    {/* Cabeza */}
                    <circle cx="100" cy="65" r="30" fill="#0d9488" opacity="0.8"/>
                    
                    {/* Brazos a los lados */}
                    <path d="M 55 100 L 45 160" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" fill="none"/>
                    <path d="M 145 100 L 155 160" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" fill="none"/>
                    <circle cx="45" cy="160" r="9" fill="#0d9488" opacity="0.6"/>
                    <circle cx="155" cy="160" r="9" fill="#0d9488" opacity="0.6"/>
                    
                    {/* Escápulas convergiendo */}
                    <path d="M 65 90 Q 85 110 100 110" stroke="#14b8a6" strokeWidth="4" fill="none" markerEnd="url(#arrow)"/>
                    <path d="M 135 90 Q 115 110 100 110" stroke="#14b8a6" strokeWidth="4" fill="none" markerEnd="url(#arrow)"/>
                    
                    {/* Círculos en escápulas */}
                    <circle cx="70" cy="95" r="12" fill="#14b8a6" opacity="0.4"/>
                    <circle cx="130" cy="95" r="12" fill="#14b8a6" opacity="0.4"/>
                </g>
                
                <text x="150" y="270" textAnchor="middle" fill="#0d9488" fontSize="14" fontWeight="bold">Juntar escápulas atrás</text>
                
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                        <path d="M 0 5 L 10 0 L 10 10 Z" fill="#14b8a6"/>
                    </marker>
                </defs>
            </svg>
        ),
        
        'wall-push': (
            <svg viewBox="0 0 300 300" className={className}>
                <rect width="300" height="300" fill="#f0fdfa" rx="16"/>
                
                <g transform="translate(40, 50)">
                    {/* Pared */}
                    <rect x="180" y="40" width="30" height="180" fill="#0d9488" opacity="0.3"/>
                    <line x1="185" y1="40" x2="185" y2="220" stroke="#0d9488" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
                    
                    {/* Cuerpo */}
                    <ellipse cx="90" cy="140" rx="45" ry="65" fill="#0d9488" opacity="0.3"/>
                    
                    {/* Cabeza */}
                    <circle cx="90" cy="65" r="28" fill="#0d9488" opacity="0.8"/>
                    <circle cx="83" cy="60" r="4" fill="#14b8a6"/>
                    <circle cx="91" cy="60" r="4" fill="#14b8a6"/>
                    
                    {/* Brazos extendidos hacia pared */}
                    <path d="M 120 100 L 175 100" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" fill="none"/>
                    <path d="M 120 130 L 175 130" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" fill="none"/>
                    <circle cx="175" cy="100" r="8" fill="#0d9488" opacity="0.6"/>
                    <circle cx="175" cy="130" r="8" fill="#0d9488" opacity="0.6"/>
                    
                    {/* Flecha de empuje */}
                    <path d="M 100 150 L 160 150" stroke="#0d9488" strokeWidth="4" markerEnd="url(#arrow)" fill="none"/>
                </g>
                
                <text x="150" y="270" textAnchor="middle" fill="#0d9488" fontSize="14" fontWeight="bold">Empujar pared con brazos</text>
                
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                        <path d="M 0 5 L 10 0 L 10 10 Z" fill="#0d9488"/>
                    </marker>
                </defs>
            </svg>
        ),
        
        'prone-y': (
            <svg viewBox="0 0 300 300" className={className}>
                <rect width="300" height="300" fill="#f0fdfa" rx="16"/>
                
                <g transform="translate(50, 60)">
                    {/* Cuerpo acostado boca abajo */}
                    <ellipse cx="100" cy="130" rx="40" ry="60" fill="#0d9488" opacity="0.3"/>
                    
                    {/* Cabeza */}
                    <circle cx="100" cy="55" r="28" fill="#0d9488" opacity="0.8"/>
                    <ellipse cx="100" cy="60" rx="20" ry="15" fill="#0d9488" opacity="0.6"/>
                    
                    {/* Brazos en Y */}
                    <path d="M 100 75 L 60 30" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" fill="none"/>
                    <path d="M 100 75 L 140 30" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" fill="none"/>
                    <circle cx="60" cy="30" r="9" fill="#0d9488" opacity="0.6"/>
                    <circle cx="140" cy="30" r="9" fill="#0d9488" opacity="0.6"/>
                    
                    {/* Flechas de elevación */}
                    <path d="M 60 30 L 60 15" stroke="#14b8a6" strokeWidth="3" markerEnd="url(#arrowUp)" fill="none"/>
                    <path d="M 140 30 L 140 15" stroke="#14b8a6" strokeWidth="3" markerEnd="url(#arrowUp)" fill="none"/>
                </g>
                
                <text x="150" y="270" textAnchor="middle" fill="#0d9488" fontSize="14" fontWeight="bold">Brazos en Y, elevar</text>
                
                <defs>
                    <marker id="arrowUp" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                        <path d="M 5 0 L 10 10 L 0 10 Z" fill="#14b8a6"/>
                    </marker>
                </defs>
            </svg>
        ),
        
        'prone-t': (
            <svg viewBox="0 0 300 300" className={className}>
                <rect width="300" height="300" fill="#f0fdfa" rx="16"/>
                
                <g transform="translate(50, 60)">
                    {/* Cuerpo acostado boca abajo */}
                    <ellipse cx="100" cy="130" rx="40" ry="60" fill="#0d9488" opacity="0.3"/>
                    
                    {/* Cabeza */}
                    <circle cx="100" cy="55" r="28" fill="#0d9488" opacity="0.8"/>
                    <ellipse cx="100" cy="60" rx="20" ry="15" fill="#0d9488" opacity="0.6"/>
                    
                    {/* Brazos en T */}
                    <path d="M 100 80 L 30 80" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" fill="none"/>
                    <path d="M 100 80 L 170 80" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" fill="none"/>
                    <circle cx="30" cy="80" r="9" fill="#0d9488" opacity="0.6"/>
                    <circle cx="170" cy="80" r="9" fill="#0d9488" opacity="0.6"/>
                    
                    {/* Flechas de elevación */}
                    <path d="M 30 80 L 30 60" stroke="#14b8a6" strokeWidth="3" markerEnd="url(#arrowUp)" fill="none"/>
                    <path d="M 170 80 L 170 60" stroke="#14b8a6" strokeWidth="3" markerEnd="url(#arrowUp)" fill="none"/>
                </g>
                
                <text x="150" y="270" textAnchor="middle" fill="#0d9488" fontSize="14" fontWeight="bold">Brazos en T, elevar</text>
                
                <defs>
                    <marker id="arrowUp" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                        <path d="M 5 0 L 10 10 L 0 10 Z" fill="#14b8a6"/>
                    </marker>
                </defs>
            </svg>
        ),
        
        'deep-neck-flexor': (
            <svg viewBox="0 0 300 300" className={className}>
                <rect width="300" height="300" fill="#f0fdfa" rx="16"/>
                
                <g transform="translate(50, 50)">
                    {/* Cuerpo acostado */}
                    <ellipse cx="100" cy="160" rx="45" ry="55" fill="#0d9488" opacity="0.3"/>
                    
                    {/* Cabeza - posición inicial (fantasma) */}
                    <circle cx="100" cy="80" r="30" fill="#0d9488" opacity="0.15" stroke="#0d9488" strokeWidth="2" strokeDasharray="5,5"/>
                    
                    {/* Cabeza - flexión */}
                    <circle cx="100" cy="85" r="30" fill="#0d9488" opacity="0.8"/>
                    <circle cx="93" cy="80" r="4" fill="#14b8a6"/>
                    <circle cx="101" cy="80" r="4" fill="#14b8a6"/>
                    
                    {/* Flecha de movimiento */}
                    <path d="M 100 50 Q 100 40 100 30" stroke="#0d9488" strokeWidth="3" markerEnd="url(#arrowDown)" fill="none"/>
                    
                    {/* Línea de base */}
                    <line x1="40" y1="110" x2="160" y2="110" stroke="#0d9488" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
                </g>
                
                <text x="150" y="270" textAnchor="middle" fill="#0d9488" fontSize="14" fontWeight="bold">Flexión profunda de cuello</text>
                
                <defs>
                    <marker id="arrowDown" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                        <path d="M 5 0 L 10 10 L 0 10 Z" fill="#0d9488"/>
                    </marker>
                </defs>
            </svg>
        ),
        
        'scapular-depression': (
            <svg viewBox="0 0 300 300" className={className}>
                <rect width="300" height="300" fill="#f0fdfa" rx="16"/>
                
                <g transform="translate(50, 50)">
                    {/* Cuerpo */}
                    <ellipse cx="100" cy="130" rx="45" ry="60" fill="#0d9488" opacity="0.3"/>
                    
                    {/* Cabeza */}
                    <circle cx="100" cy="65" r="28" fill="#0d9488" opacity="0.8"/>
                    <circle cx="93" cy="60" r="4" fill="#14b8a6"/>
                    <circle cx="101" cy="60" r="4" fill="#14b8a6"/>
                    
                    {/* Brazos a los lados */}
                    <path d="M 60 95 L 55 150" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" fill="none"/>
                    <path d="M 140 95 L 145 150" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" fill="none"/>
                    <circle cx="55" cy="150" r="9" fill="#0d9488" opacity="0.6"/>
                    <circle cx="145" cy="150" r="9" fill="#0d9488" opacity="0.6"/>
                    
                    {/* Flechas de depresión */}
                    <path d="M 65 90 L 65 120" stroke="#14b8a6" strokeWidth="4" markerEnd="url(#arrowDown)" fill="none"/>
                    <path d="M 135 90 L 135 120" stroke="#14b8a6" strokeWidth="4" markerEnd="url(#arrowDown)" fill="none"/>
                    
                    {/* Escápulas */}
                    <ellipse cx="70" cy="85" rx="12" ry="18" fill="#14b8a6" opacity="0.3"/>
                    <ellipse cx="130" cy="85" rx="12" ry="18" fill="#14b8a6" opacity="0.3"/>
                </g>
                
                <text x="150" y="270" textAnchor="middle" fill="#0d9488" fontSize="14" fontWeight="bold">Depresión escapular</text>
                
                <defs>
                    <marker id="arrowDown" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                        <path d="M 5 0 L 10 10 L 0 10 Z" fill="#14b8a6"/>
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
