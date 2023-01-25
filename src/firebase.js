import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";//new


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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);//new

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore();

export default app;
/*  apiKey: "AIzaSyB5qZ5WggXjpRoxsBsITW_bwOsHfROlhes",
  authDomain: "tgp-training-app.firebaseapp.com",
  projectId: "tgp-training-app",
  storageBucket: "tgp-training-app.appspot.com",
  messagingSenderId: "301312236239",
  appId: "1:301312236239:web:0077e4a7af7ac51fb475ba",
  measurementId: "G-HXV18M7GZB"*/