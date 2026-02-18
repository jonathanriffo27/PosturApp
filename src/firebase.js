import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDQT5_Dgi43Igtm7VxGiUPIiOrGNxZfuM",
  authDomain: "posturapp-4f68e.firebaseapp.com",
  projectId: "posturapp-4f68e",
  storageBucket: "posturapp-4f68e.firebasestorage.app",
  messagingSenderId: "864364974315",
  appId: "1:864364974315:web:66147d46289b0184e4aeae"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
