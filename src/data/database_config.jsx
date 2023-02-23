// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAESRqQLxo9Xli5HhvhulmqSFLNYwsjCq4",
  authDomain: "vtclubxctf.firebaseapp.com",
  projectId: "vtclubxctf",
  storageBucket: "vtclubxctf.appspot.com",
  messagingSenderId: "350959819512",
  appId: "1:350959819512:web:f6caa3ddb4e60cafa9390d",
  measurementId: "G-3RPELRN2E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);