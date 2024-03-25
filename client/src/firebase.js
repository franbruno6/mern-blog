// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4ce7b.firebaseapp.com",
  projectId: "mern-blog-4ce7b",
  storageBucket: "mern-blog-4ce7b.appspot.com",
  messagingSenderId: "906333943453",
  appId: "1:906333943453:web:7f14664f81285a982e4674"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
