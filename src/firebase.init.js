// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZkiYIoMBbefj7rYtJy4HvzBRg_NZPA_c",
  authDomain: "todo-1eb06.firebaseapp.com",
  projectId: "todo-1eb06",
  storageBucket: "todo-1eb06.appspot.com",
  messagingSenderId: "662670395155",
  appId: "1:662670395155:web:394bd082daaf7b84a2bce6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;