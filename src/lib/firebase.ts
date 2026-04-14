import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5M2YqNtVscKXdbK6gKW_MJY0JJ-L_iGc",
  authDomain: "aquafolio-qfdsb.firebaseapp.com",
  projectId: "aquafolio-qfdsb",
  storageBucket: "aquafolio-qfdsb.firebasestorage.app",
  messagingSenderId: "1043183838021",
  appId: "1:1043183838021:web:b474039f31da15a833142c"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
