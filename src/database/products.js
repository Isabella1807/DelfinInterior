import { deleteDoc, doc, addDoc, collection, getDocs, where, query, updateDoc} from "firebase/firestore";
import db from "./initFirebase.js";

const colRef = collection(db, 'products')
getDocs(colRef) //Henter alle docuemnter inde i colRef collectionen
    .then ((snapshot) => {
        console.log(snapshot.docs)
    })