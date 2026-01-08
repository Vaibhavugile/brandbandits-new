// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCeqK-QP_D2rtkO6kXTYga4A--G0o7BX80",
  authDomain: "brandbandits-44604.firebaseapp.com",
  projectId: "brandbandits-44604",
  storageBucket: "brandbandits-44604.firebasestorage.app",
  messagingSenderId: "599385100850",
  appId: "1:599385100850:web:532466920778c50d66222b",
  measurementId: "G-YY8VC288GT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;
