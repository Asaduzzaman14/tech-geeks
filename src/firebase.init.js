// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAH4xEMlmK9N5SSchLeN9dx08e8fSxSN5o",
    authDomain: "tech-geeks-cb13f.firebaseapp.com",
    projectId: "tech-geeks-cb13f",
    storageBucket: "tech-geeks-cb13f.appspot.com",
    messagingSenderId: "472239887318",
    appId: "1:472239887318:web:26b3c327f2cd07c3e24a77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;