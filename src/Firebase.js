import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAcgI5r8UGPEl_Ssv8I14m-DMr6FxWOTUA",
    authDomain: "taskrunner-67223.firebaseapp.com",
    projectId: "taskrunner-67223",
    storageBucket: "taskrunner-67223.appspot.com",
    messagingSenderId: "603314529256",
    appId: "1:603314529256:web:0f89ab82244ff0c3d67a5d",
    measurementId: "G-FXQCFTW3HE"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);
  const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

export const authh = getAuth(app);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const db = getFirestore();    

export default firebase;

