import React from 'react';
import { EXERCISES } from '../constants/exercises';
import { Play, CheckCircle2, Trophy, Clock } from 'lucide-react';
import ExerciseIllustration from './ExerciseIllustration';

const Dashboard = ({ onStartExercise }) => {
    const stretches = EXERCISES.filter(ex => ex.type === 'Stretch');
    const strengthens = EXERCISES.filter(ex => ex.type === 'Strengthen');

    return (
        <main className="max-w-6xl mx-auto p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Welcome & Quick Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2">¡Hola! Es hora de enderezarse.</h2>
                    <p className="text-white/80 max-w-md">Completa tu rutina diaria basada en el síndrome cruzado superior de Janda para reducir el dolor de cuello y hombros.</p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-slate-800">Objetivo Diario</h3>
                        <Trophy className="text-yellow-500 w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Ejercicios</span>
                            <span className="font-bold text-primary">0 / 4</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[0%] transition-all duration-1000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exercise Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <section className="space-y-4">
                    <div className="flex items-center gap-2 px-2">
                        <Clock className="text-primary w-5 h-5" />
                        <h3 className="text-xl font-bold text-slate-800">Estiramientos (Tónicos)</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {stretches.map(ex => (
                            <ExerciseCard key={ex.id} exercise={ex} onClick={() => onStartExercise(ex)} />
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-2 px-2">
                        <Activity className="text-primary w-5 h-5" />
                        <h3 className="text-xl font-bold text-slate-800">Fortalecimiento (Fásicos)</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {strengthens.map(ex => (
                            <ExerciseCard key={ex.id} exercise={ex} onClick={() => onStartExercise(ex)} />
                        ))}
                    </div>
                </section>
            </div>

            {/* Manual Log Entry Shortcut */}
            <section className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-xl font-bold mb-1">¿Sientes dolor ahora mismo?</h3>
                    <p className="text-slate-400">Registra tu nivel de molestia para ver las tendencias.</p>
                </div>
                <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
                    Registrar Dolor
                </button>
            </section>
        </main>
    );
};

const ExerciseCard = ({ exercise, onClick }) => (
    <button
        onClick={onClick}
        className="bg-white group p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:border-primary/50 hover:shadow-md transition-all text-left w-full"
    >
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-50 relative border border-slate-100">
            <ExerciseIllustration id={exercise.id} className="w-full h-full p-2" />
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="text-primary fill-primary w-6 h-6" />
            </div>
        </div>
        <div className="flex-grow min-w-0">
            <h4 className="font-bold text-slate-800 group-hover:text-primary transition-colors truncate">{exercise.name}</h4>
            <p className="text-sm text-slate-500 line-clamp-1">{exercise.instructions}</p>
            <div className="flex items-center gap-3 mt-2">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">60 Seg</span>
                <CheckCircle2 className="w-4 h-4 text-slate-200" />
            </div>
        </div>
    </button>
);

const Activity = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

export default Dashboard;
