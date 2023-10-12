// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj8eByVBgRszKRoL0aHZg9447X9OByMb4",
    authDomain: "react-app-7331c.firebaseapp.com",
    projectId: "react-app-7331c",
    storageBucket: "react-app-7331c.appspot.com",
    messagingSenderId: "693940439066",
    appId: "1:693940439066:web:34148c2c5ad7b0677f69a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);