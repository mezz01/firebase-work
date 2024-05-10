// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_6rDpz7fcIJpDsDZ-p5-zX8olmAQb6KU",
  authDomain: "survey-app-b5190.firebaseapp.com",
  projectId: "survey-app-b5190",
  storageBucket: "survey-app-b5190.appspot.com",
  messagingSenderId: "481680923015",
  appId: "1:481680923015:web:f3cb531b92bad5f3a79b22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);