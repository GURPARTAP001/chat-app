import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAIkNiYGRjvN_DcZGzduDH3YIyWl0debzM",
  authDomain: "chat-app-1c65d.firebaseapp.com",
  projectId: "chat-app-1c65d",
  storageBucket: "chat-app-1c65d.appspot.com",
  messagingSenderId: "981493875509",
  appId: "1:981493875509:web:b48a50902fda82294f427c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage();
export const db = getFirestore();