import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Debug: verificar variables de entorno
console.log("VITE_FIREBASE_API_KEY:", import.meta.env.VITE_FIREBASE_API_KEY ? "SET" : "NOT SET");
console.log("VITE_FIREBASE_PROJECT_ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDDQT5_DGi43Igtm7VxGiUPIiOrGNxZfuM",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "posturapp-4f68e.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "posturapp-4f68e",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "posturapp-4f68e.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "864364974315",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:864364974315:web:66147d46289b0184e4aeae"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
