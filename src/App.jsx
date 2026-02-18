import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ExercisePlayer from './components/ExercisePlayer';
import PostureLog from './components/PostureLog';
import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const AppContent = () => {
  const { user, loading } = useAuth();
  const [activeExercise, setActiveExercise] = useState(null);
  const [view, setView] = useState('dashboard'); // 'dashboard' or 'logs'

  if (loading) return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );

  const handleStartExercise = (exercise) => {
    setActiveExercise(exercise);
  };

  const handleCompleteExercise = async (exercise) => {
    if (user) {
      try {
        await addDoc(collection(db, 'completions'), {
          userId: user.uid,
          exerciseId: exercise.id,
          exerciseName: exercise.name,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.error("Error saving completion:", error);
      }
    }
    setActiveExercise(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-inter text-slate-800">
      <Header />

      {!user ? (
        <div className="max-w-2xl mx-auto mt-20 p-10 bg-white rounded-[40px] shadow-2xl shadow-primary/5 text-center space-y-6">
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto">
            <ActivityIcon className="text-primary w-10 h-10" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Bienvenido a PosturApp</h2>
          <p className="text-xl text-slate-500 max-w-md mx-auto leading-relaxed">
            Inicia sesión para personalizar tu rutina de corrección postural y llevar un seguimiento de tu progreso.
          </p>
          <div className="pt-4 italic text-slate-400">
            "Tu postura de hoy es tu salud de mañana."
          </div>
        </div>
      ) : (
        <div className="pb-20">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex gap-4">
            <button
              onClick={() => setView('dashboard')}
              className={`px-6 py-2 rounded-full font-bold transition-all ${view === 'dashboard' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-slate-500 hover:bg-slate-100'
                }`}
            >
              Rutina
            </button>
            <button
              onClick={() => setView('logs')}
              className={`px-6 py-2 rounded-full font-bold transition-all ${view === 'logs' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-slate-500 hover:bg-slate-100'
                }`}
            >
              Registro de Dolor
            </button>
          </nav>

          {view === 'dashboard' ? (
            <Dashboard onStartExercise={handleStartExercise} />
          ) : (
            <PostureLog />
          )}
        </div>
      )}

      {activeExercise && (
        <ExercisePlayer
          exercise={activeExercise}
          onClose={() => setActiveExercise(null)}
          onComplete={handleCompleteExercise}
        />
      )}
    </div>
  );
};

const ActivityIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
