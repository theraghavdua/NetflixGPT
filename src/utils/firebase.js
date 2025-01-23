// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApP0AEo7WrB671XmU61BHgzJ7f3R_Wrfg",
  authDomain: "netflixgpt-f5888.firebaseapp.com",
  projectId: "netflixgpt-f5888",
  storageBucket: "netflixgpt-f5888.firebasestorage.app",
  messagingSenderId: "904336099751",
  appId: "1:904336099751:web:788c13e13fa944f7c38e82",
  measurementId: "G-5026E362P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 