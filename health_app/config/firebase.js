// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKefrnaxgfQUTZuas-YU_1nG7xJhPeMEE",
  authDomain: "healthapp-c1ca3.firebaseapp.com",
  projectId: "healthapp-c1ca3",
  storageBucket: "healthapp-c1ca3.appspot.com",
  messagingSenderId: "414902720016",
  appId: "1:414902720016:web:4aa63d086f76d3c9451c95",
  measurementId: "G-E41LK49Y70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
