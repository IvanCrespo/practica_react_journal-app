// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4jzBZNwO04D_3-p2Sb9flsZrKi46Om9Y",
    authDomain: "react-cursos-343fe.firebaseapp.com",
    projectId: "react-cursos-343fe",
    storageBucket: "react-cursos-343fe.appspot.com",
    messagingSenderId: "58171089531",
    appId: "1:58171089531:web:1add3165a612171b4bf8de"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);