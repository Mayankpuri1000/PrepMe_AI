// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSWJ1LaqUp_t4y0IJVIfxPJGfzYADGuOs",
  authDomain: "prepme-e0a78.firebaseapp.com",
  projectId: "prepme-e0a78",
  storageBucket: "prepme-e0a78.firebasestorage.app",
  messagingSenderId: "360025266",
  appId: "1:360025266:web:7e6002aaa4d0fa9dc94dab",
  measurementId: "G-ENWQNM9J7X",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
