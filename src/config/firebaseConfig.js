// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO6K-z-ty6xtYSHVmrMLfYWep2v4nDxr4",
  authDomain: "login-vigia-86955.firebaseapp.com",
  projectId: "login-vigia-86955",
  storageBucket: "login-vigia-86955.firebasestorage.app",
  messagingSenderId: "405204157176",
  appId: "1:405204157176:web:7e5c3528c67f7fdb4bb10d",
  measurementId: "G-C818STPQ4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };