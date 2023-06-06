
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "adminpanel-aaffe.firebaseapp.com",
  projectId: "adminpanel-aaffe",
  storageBucket: "adminpanel-aaffe.appspot.com",
  messagingSenderId: "679077512526",
  appId: "1:679077512526:web:c87d8489a10cbb24534a1f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);