// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbI-CKu707xxviZJNBZWCtMkNc8vzLw2E",
  authDomain: "denta-dec78.firebaseapp.com",
  projectId: "denta-dec78",
  storageBucket: "denta-dec78.appspot.com",
  messagingSenderId: "550928686388",
  appId: "1:550928686388:web:4ce3a86774af53ece8d961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
