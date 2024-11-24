
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3e50gwXSqjS_kpU44MXCGgX43nTcj9Tc",
  authDomain: "school-management-95d26.firebaseapp.com",
  projectId: "school-management-95d26",
  storageBucket: "school-management-95d26.firebasestorage.app",
  messagingSenderId: "156021235349",
  appId: "1:156021235349:web:519ff9e3f3634fa292c59c",
  measurementId: "G-823M0CBL55",
  databaseURL:"https://school-management-95d26-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

