// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log(import.meta.env.VITE_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-449db.firebaseapp.com",
  projectId: "mern-blog-449db",
  storageBucket: "mern-blog-449db.appspot.com",
  messagingSenderId: "1093341792806",
  appId: "1:1093341792806:web:738a4a655cc73debe474e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

