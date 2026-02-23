import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, LogIn, UserPlus } from 'lucide-react';

const LoginForm = ({ onClose }) => {
    const { loginWithEmail, signupWithEmail, error } = useAuth();
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [localError, setLocalError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setLocalError('');

        try {
            if (isSignup) {
                // Auto-generar nombre del email si no se proporciona
                const name = email.split('@')[0];
                await signupWithEmail(email, password, name);
            } else {
                await loginWithEmail(email, password);
            }
            if (onClose) onClose();
        } catch (err) {
            setLocalError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div 
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {isSignup ? <UserPlus className="w-8 h-8 text-primary" /> : <LogIn className="w-8 h-8 text-primary" />}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        {isSignup ? 'Crear Cuenta' : 'Iniciar Sesión'}
                    </h2>
                    <p className="text-slate-500 text-sm mt-2">
                        {isSignup ? 'Únete a PosturApp' : 'Bienvenido de nuevo'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            required
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="password"
                            placeholder="Contraseña (mínimo 6 caracteres)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            required
                            minLength={6}
                        />
                    </div>

                    {(error || localError) && (
                        <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium">
                            {localError || error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary/90 active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                    >
                        {loading ? 'Cargando...' : (isSignup ? 'Crear Cuenta' : 'Iniciar Sesión')}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => {
                            setIsSignup(!isSignup);
                            setLocalError('');
                        }}
                        className="text-primary text-sm font-medium hover:underline"
                    >
                        {isSignup ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Crea una'}
                    </button>
                </div>

                {onClose && (
                    <button
                        onClick={onClose}
                        className="mt-4 w-full text-slate-500 text-sm hover:text-slate-700 transition-colors"
                    >
                        Cancelar
                    </button>
                )}
            </div>
        </div>
    );
};

export default LoginForm;
