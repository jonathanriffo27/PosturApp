import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
    onAuthStateChanged,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    GoogleAuthProvider,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check for redirect result on mount
        getRedirectResult(auth)
            .then((result) => {
                if (result?.user) setUser(result.user);
            })
            .catch((err) => {
                console.error("Firebase Redirect Auth Error:", err);
                setError(err.message);
            });

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const loginWithGoogle = async (method = 'popup') => {
        const provider = new GoogleAuthProvider();
        setError(null);
        try {
            if (method === 'redirect') {
                return await signInWithRedirect(auth, provider);
            }
            return await signInWithPopup(auth, provider);
        } catch (err) {
            console.error("Firebase Auth Error:", err);
            setError(err.message);

            // If popup is blocked or fails, try redirect automatically
            if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-closed-by-user') {
                console.log("Popup failed, falling back to redirect...");
                return await signInWithRedirect(auth, provider);
            }
            throw err;
        }
    };

    const loginWithEmail = async (email, password) => {
        setError(null);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            return result;
        } catch (err) {
            console.error("Firebase Email Auth Error:", err);
            setError(err.message);
            throw err;
        }
    };

    const signupWithEmail = async (email, password, displayName) => {
        setError(null);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            if (displayName && result.user) {
                await updateProfile(result.user, { displayName });
            }
            return result;
        } catch (err) {
            console.error("Firebase Signup Error:", err);
            setError(err.message);
            throw err;
        }
    };

    const logout = () => signOut(auth);

    return (
        <AuthContext.Provider value={{ user, loginWithGoogle, loginWithEmail, signupWithEmail, logout, loading, error }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
