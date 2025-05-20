
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRvnryvvBejZy5D8xmkE_XJuyv93kTrI8",
  authDomain: "greennest-dd0be.firebaseapp.com",
  projectId: "greennest-dd0be",
  storageBucket: "greennest-dd0be.firebasestorage.app",
  messagingSenderId: "952292233440",
  appId: "1:952292233440:web:b642bd5fbfcbd5e1fc0085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);