// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4G8TrOQk8y8_ZFTT9EBYo9paAiFgOJo0",
  authDomain: "tikoteco-ff45a.firebaseapp.com",
  projectId: "tikoteco-ff45a",
  storageBucket: "tikoteco-ff45a.appspot.com",
  messagingSenderId: "907643564922",
  appId: "1:907643564922:web:5f510679c72b2723e9dcc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;