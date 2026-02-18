import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Clock, Volume2, Pause, Play, Info } from 'lucide-react';
import ExerciseIllustration from './ExerciseIllustration';

const ExercisePlayer = ({ exercise, onClose, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(exercise.duration);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((time) => time - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const progress = ((exercise.duration - timeLeft) / exercise.duration) * 100;

    return (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in zoom-in-95 duration-300">
            {/* Player Header */}
            <div className="p-6 flex justify-between items-center bg-slate-50 border-b border-slate-100">
                <div className="flex items-center gap-4">
                    <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                        <X className="w-6 h-6 text-slate-600" />
                    </button>
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">{exercise.name}</h2>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">
                            {exercise.type === 'Stretch' ? 'Estiramiento' : 'Fortalecimiento'}
                        </span>
                    </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-slate-400 font-medium">
                    <Info className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider">Modo Entrenamiento</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col lg:flex-row overflow-hidden">
                {/* Media Block */}
                <div className="flex-grow bg-white flex items-center justify-center p-6 relative group bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-50 to-white">
                    <div className="relative max-w-2xl w-full h-full flex items-center justify-center p-12">
                        <ExerciseIllustration id={exercise.id} className="w-full h-full transition-all duration-700 hover:scale-[1.05]" />
                        <div className="absolute inset-x-0 -bottom-4 flex justify-center">
                            <div className="px-4 py-1 bg-primary/5 rounded-full text-[10px] font-bold text-primary/40 uppercase tracking-widest border border-primary/10">
                                Guía Visual de Posición
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6">
                        <button
                            onClick={() => setIsActive(!isActive)}
                            className="bg-slate-900 text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
                        >
                            {isActive ? <Pause className="fill-current" /> : <Play className="fill-current ml-1" />}
                        </button>
                    </div>
                </div>

                {/* Instructions & Timer Block */}
                <div className="w-full lg:w-[450px] flex flex-col p-8 lg:p-12 space-y-10 bg-white border-l border-slate-100 shadow-[-20px_0_50px_-20px_rgba(0,0,0,0.05)] z-10 overflow-y-auto">
                    {/* Timer display */}
                    <div className="text-center space-y-4">
                        <div className="relative inline-block">
                            <div className="text-9xl font-black text-primary tabular-nums tracking-tighter">
                                {timeLeft}
                                <span className="text-2xl font-bold ml-1 text-slate-300 absolute -right-12 bottom-6">seg</span>
                            </div>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className="bg-primary h-full transition-all duration-1000 ease-linear shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Instructions Card */}
                    <div className="bg-slate-50 rounded-[32px] p-8 space-y-4 border border-slate-100">
                        <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                            <Volume2 className="w-5 h-5 text-primary" />
                            Instrucciones
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg font-medium italic">
                            "{exercise.instructions}"
                        </p>
                    </div>

                    {/* Completion Button */}
                    <div className="mt-auto pt-8">
                        <button
                            disabled={timeLeft > 0}
                            onClick={() => onComplete(exercise)}
                            className={`w-full py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all ${timeLeft === 0 ? 'bg-primary text-white shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 active:scale-95' : 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-60'}`}
                        >
                            {timeLeft === 0 ? <CheckCircle className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                            {timeLeft === 0 ? '¡He cumplido hoy!' : 'Mantén la Posición...'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExercisePlayer;
