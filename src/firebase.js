import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABzWPxWx231IB3moi3KZvc3bD1Mt9vyb4",
  authDomain: "taskmanager-db.firebaseapp.com",
  projectId: "taskmanager-db",
  storageBucket: "taskmanager-db.appspot.com",
  messagingSenderId: "493707515262",
  appId: "1:493707515262:web:81b778bf7fc6b6233d0f2f",
  measurementId: "G-88CPR4DJRG"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore();

export default app;