import {initializeApp} from "firebase/app";
/*import { getAnalytics } from "firebase/analytics";*/
import {collection, getDocs, getFirestore, addDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIp8d8v5LDH79mZDKQpn9WK_CewWJbzZo",
    authDomain: "delfininterior-62c0c.firebaseapp.com",
    projectId: "delfininterior-62c0c",
    storageBucket: "delfininterior-62c0c.appspot.com",
    messagingSenderId: "834420919601",
    appId: "1:834420919601:web:1e8b2d481d4e091de3f410",
    measurementId: "G-RYH5LT9ZKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*const analytics = getAnalytics(app);*/
const db = getFirestore(app);

addDoc(collection(db, "tester"), {
    title: "tester",
    price: 500,
}).then(docRef => {
    console.log(docRef.id)
}).catch(error => {
    console.log(error)
})

export default db;
