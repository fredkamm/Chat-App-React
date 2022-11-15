// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ_CCfLcErOZCeVrbUP69ECEfoEk6RDIw",
  authDomain: "chat-app-a9849.firebaseapp.com",
  projectId: "chat-app-a9849",
  storageBucket: "chat-app-a9849.appspot.com",
  messagingSenderId: "28714493615",
  appId: "1:28714493615:web:a62a8cbf1e84b3d4fa565a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const db = getFirestore(app);