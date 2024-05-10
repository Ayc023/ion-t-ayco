// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyApR6esWp5nx6QV-k7GCBv3a_1cEbH-Etw",
    authDomain: "it35-ayco.firebaseapp.com",
    projectId: "it35-ayco",
    storageBucket: "it35-ayco.appspot.com",
    messagingSenderId: "738606036851",
    appId: "1:738606036851:web:a0b5b82c24e41de019b706",
    measurementId: "G-NH3SV3B0L1"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}