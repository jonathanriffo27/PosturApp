import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, User as UserIcon, Activity } from 'lucide-react';

const Header = () => {
    const { user, loginWithGoogle, logout, error } = useAuth();

    return (
        <header className="glass sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-2">
                <Activity className="text-primary w-8 h-8" />
                <h1 className="text-2xl font-bold text-primary tracking-tight">PosturApp</h1>
            </div>

            <div className="flex items-center gap-4">
                {user ? (
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex flex-col items-end">
                            <span className="text-sm font-medium text-slate-700">{user.displayName}</span>
                            <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden mt-1">
                                <div className="bg-primary h-full w-[40%]" title="Progreso Diario"></div>
                            </div>
                        </div>
                        {user.photoURL ? (
                            <img src={user.photoURL} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-primary/20" />
                        ) : (
                            <UserIcon className="w-10 h-10 p-2 bg-slate-100 rounded-full" />
                        )}
                        <button
                            onClick={logout}
                            className="p-2 text-slate-500 hover:text-red-500 transition-colors"
                            title="Cerrar Sesión"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={loginWithGoogle}
                        className="bg-primary text-white px-5 py-2 rounded-full font-medium active:scale-95 transition-all shadow-lg shadow-primary/20"
                    >
                        Iniciar Sesión
                    </button>
                )}
            </div>

            {/* Error Notification */}
            {error && (
                <div className="absolute top-full left-0 right-0 bg-red-50 text-red-600 px-6 py-2 text-center text-sm font-medium animate-in slide-in-from-top duration-300">
                    Error de autenticación: {error}. Intentando método alternativo...
                </div>
            )}
        </header>
    );
};

export default Header;
