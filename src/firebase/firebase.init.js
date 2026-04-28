// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNx0XnhmhHC0Pl4LHy89G-2nt-fBg7MwM",
  authDomain: "web-to-do-56d96.firebaseapp.com",
  projectId: "web-to-do-56d96",
  storageBucket: "web-to-do-56d96.firebasestorage.app",
  messagingSenderId: "1069799507334",
  appId: "1:1069799507334:web:888759ac0d986984ed5807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
