
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAj8eByVBgRszKRoL0aHZg9447X9OByMb4",
    authDomain: "react-app-7331c.firebaseapp.com",
    projectId: "react-app-7331c",
    storageBucket: "react-app-7331c.appspot.com",
    messagingSenderId: "693940439066",
    appId: "1:693940439066:web:34148c2c5ad7b0677f69a3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);