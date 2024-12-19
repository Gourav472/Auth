// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_U-71Cs17eLT-VHzv9eiUvrUfn0-JQW4",
  authDomain: "auth-a73f0.firebaseapp.com",
  projectId: "auth-a73f0",
  storageBucket: "auth-a73f0.firebasestorage.app",
  messagingSenderId: "39384776417",
  appId: "1:39384776417:web:dea59a286ec5f6b13001a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };