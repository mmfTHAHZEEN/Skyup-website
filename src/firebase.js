// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 🔥 ADD THIS

// Your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDtOfl5J4cbpmMxasTsXxYVHiTtSDLXwAk",
  authDomain: "skyup-backend.firebaseapp.com",
  projectId: "skyup-backend",
  storageBucket: "skyup-backend.firebasestorage.app",
  messagingSenderId: "437087408568",
  appId: "1:437087408568:web:4c34aba1f66f62c1b1bf4d",
  measurementId: "G-56YB9VFPNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth instance
export const auth = getAuth(app);

// 🔥 Firestore Database (THIS FIXES YOUR ERROR)
export const db = getFirestore(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Phone Auth reCAPTCHA setup
export const setupRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    auth,
    "recaptcha-container",
    {
      size: "invisible",
    }
  );
};

// Send SMS for phone login
export const sendSMS = async (phoneNumber) => {
  return await signInWithPhoneNumber(
    auth,
    phoneNumber,
    window.recaptchaVerifier
  );
};

export default app;
