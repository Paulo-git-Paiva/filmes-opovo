import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAOw9T1JnLhOaW3lx8hxAToFg9BEqdeXU",
  authDomain: "filmes-povo.firebaseapp.com",
  projectId: "filmes-povo",
  storageBucket: "filmes-povo.firebasestorage.app",
  messagingSenderId: "968285471933",
  appId: "1:968285471933:web:e0c892d331d6cb685063d4",
  measurementId: "G-7M7T57Q7S4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
