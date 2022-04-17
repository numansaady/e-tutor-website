// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcIhcOrzRax3UratuqKYl2l5ntukfbGNU",
  authDomain: "e-tutor-c3aaa.firebaseapp.com",
  projectId: "e-tutor-c3aaa",
  storageBucket: "e-tutor-c3aaa.appspot.com",
  messagingSenderId: "580743785524",
  appId: "1:580743785524:web:06d94e36310272ac242e61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);