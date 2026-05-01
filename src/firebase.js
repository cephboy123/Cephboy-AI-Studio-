import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TA CONFIG (inchangée)
const firebaseConfig = {
  apiKey: "AIzaSyDUUvq3caSsXbQLoHO7i6MqBymBblJAFZw",
  authDomain: "cephboy-ai-studio.firebaseapp.com",
  projectId: "cephboy-ai-studio",
  storageBucket: "cephboy-ai-studio.firebasestorage.app",
  messagingSenderId: "652729426664",
  appId: "1:652729426664:web:01d428d4a6b4752fd5df5d",
  measurementId: "G-CTKDXVG7BF"
};

// INIT
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// AUTH GOOGLE
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// FIRESTORE
const db = getFirestore(app);

// FONCTIONS
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// EXPORTS
export { auth, db };
