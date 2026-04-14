import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArKQAyh5xvsZE3UGhYOcvKWivSquDsN5Y",
  authDomain: "myportfolio-7b1e5.firebaseapp.com",
  projectId: "myportfolio-7b1e5",
  storageBucket: "myportfolio-7b1e5.firebasestorage.app",
  messagingSenderId: "271929953451",
  appId: "1:271929953451:web:b711367e1e16ef7d637bee",
  measurementId: "G-9MJPCQ98JV"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
