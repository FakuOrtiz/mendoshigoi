import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  // FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQfscDnX4JILbHaJhdoXkpg20RZP55r5E",
  authDomain: "mendoshigoi-blog.firebaseapp.com",
  projectId: "mendoshigoi-blog",
  storageBucket: "mendoshigoi-blog.appspot.com",
  messagingSenderId: "722807559894",
  appId: "1:722807559894:web:0ceab326fae36f9d835b77",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// export const facebookProvider = new FacebookAuthProvider();
