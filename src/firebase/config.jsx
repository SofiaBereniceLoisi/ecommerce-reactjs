import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHxGdzvvkmBCz6rqv2aZb0sW-TgmpoEkA",
    authDomain: "fb-47220-d07ce.firebaseapp.com",
    projectId: "fb-47220-d07ce",
    storageBucket: "fb-47220-d07ce.appspot.com",
    messagingSenderId: "121367245958",
    appId: "1:121367245958:web:b528214dbe09d492734d07"
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);