// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjerzLYsJSrH2YnElsaaGNgd4wh1lEGg0",
  authDomain: "airbnb-clone-45a60.firebaseapp.com",
  projectId: "airbnb-clone-45a60",
  storageBucket: "airbnb-clone-45a60.appspot.com",
  messagingSenderId: "817573395096",
  appId: "1:817573395096:web:8dd8bd9684c962455feeed"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };