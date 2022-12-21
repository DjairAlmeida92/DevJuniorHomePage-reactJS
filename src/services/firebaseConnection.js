

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyB-WmiiE7dmywrD7ZuP3SGMxt95z58II-E",
  authDomain: "linksdevdja.firebaseapp.com",
  projectId: "linksdevdja",
  storageBucket: "linksdevdja.appspot.com",
  messagingSenderId: "41595456056",
  appId: "1:41595456056:web:483c272a0e1cc62ccdb4cd",
  measurementId: "G-Y3N1X4Y2PS"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };


