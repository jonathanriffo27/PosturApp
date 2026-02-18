import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, query, where, orderBy, limit, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { Send, AlertCircle, History, MessageSquare } from 'lucide-react';

const PostureLog = () => {
    const { user } = useAuth();
    const [painLevel, setPainLevel] = useState(3);
    const [focus, setFocus] = useState('');
    const [logs, setLogs] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!user) return;

        const q = query(
            collection(db, 'logs'),
            where('userId', '==', user.uid),
            orderBy('createdAt', 'desc'),
            limit(5)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const logsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setLogs(logsData);
        });

        return unsubscribe;
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user || isSubmitting) return;

        setIsSubmitting(true);
        try {
            await addDoc(collection(db, 'logs'), {
                userId: user.uid,
                painLevel: Number(painLevel),
                focus: focus || 'Sin foco específico',
                createdAt: serverTimestamp(),
            });
            setFocus('');
            setPainLevel(3);
        } catch (error) {
            console.error("Error saving log:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in duration-500">
            {/* Entry Form */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col h-fit">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <AlertCircle className="text-primary w-6 h-6" />
                    ¿Cómo te sientes?
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <label className="text-sm font-bold text-slate-500 uppercase tracking-wider flex justify-between">
                            Nivel de Dolor
                            <span className="text-primary font-black text-lg">{painLevel} / 10</span>
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="10"
                            value={painLevel}
                            onChange={(e) => setPainLevel(e.target.value)}
                            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-xs text-slate-400 font-medium italic">
                            <span>Sin dolor</span>
                            <span>Moderado</span>
                            <span>Intenso</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            Foco Actual
                        </label>
                        <input
                            type="text"
                            placeholder="Ej: Tensión en el lado derecho..."
                            value={focus}
                            onChange={(e) => setFocus(e.target.value)}
                            className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200"
                    >
                        <Send className="w-5 h-5" />
                        {isSubmitting ? 'Guardando...' : 'Registrar Estado'}
                    </button>
                </form>
            </section>

            {/* Recent History */}
            <section className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 px-2">
                    <History className="text-slate-400 w-6 h-6" />
                    Historial Reciente
                </h3>

                <div className="space-y-4">
                    {logs.length > 0 ? (
                        logs.map(log => (
                            <div key={log.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:border-primary/30 transition-all">
                                <div className="space-y-1">
                                    <p className="font-bold text-slate-800">{log.focus}</p>
                                    <p className="text-xs text-slate-400">
                                        {log.createdAt?.toDate().toLocaleString('es-ES', { weekday: 'short', hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-white ${log.painLevel > 6 ? 'bg-red-500' : log.painLevel > 3 ? 'bg-orange-500' : 'bg-primary'
                                    }`}>
                                    {log.painLevel}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-10 text-center space-y-2 opacity-50">
                            <History className="w-10 h-10 mx-auto text-slate-300" />
                            <p className="text-slate-500 font-medium">No hay registros aún.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PostureLog;
