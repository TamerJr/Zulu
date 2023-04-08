import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: (import.meta.env.VITE_FIRE_BASE_API_KEY),
  authDomain: "zulu-711c7.firebaseapp.com",
  projectId: "zulu-711c7",
  storageBucket: "zulu-711c7.appspot.com",
  messagingSenderId:(import.meta.env.VITE_FIRE_BASE_MESSAGE_SENDER_ID),
  appId: (import.meta.env.VITE_FIRE_BASE_APP_ID),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db=getFirestore(app)