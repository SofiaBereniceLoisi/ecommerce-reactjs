import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgPBGAdZotWeI5HZ-8zUt4jGCJexmEcsA",
    authDomain: "frida-app-b8f7e.firebaseapp.com",
    projectId: "frida-app-b8f7e",
    storageBucket: "frida-app-b8f7e.appspot.com",
    messagingSenderId: "661486758277",
    appId: "1:661486758277:web:6522b9614c7c511ab7bcec"
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);