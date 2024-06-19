import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBIp8d8v5LDH79mZDKQpn9WK_CewWJbzZo",
    authDomain: "delfininterior-62c0c.firebaseapp.com",
    projectId: "delfininterior-62c0c",
    storageBucket: "delfininterior-62c0c.appspot.com",
    messagingSenderId: "834420919601",
    appId: "1:834420919601:web:1e8b2d481d4e091de3f410",
    measurementId: "G-RYH5LT9ZKW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const myDB = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export {myDB, storage};
