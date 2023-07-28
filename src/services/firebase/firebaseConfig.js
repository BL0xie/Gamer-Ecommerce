// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBge8wl4E8LbyUCdyPRTp2cX8hyYXgX4H8",
  authDomain: "e-commerce-gamer.firebaseapp.com",
  projectId: "e-commerce-gamer",
  storageBucket: "e-commerce-gamer.appspot.com",
  messagingSenderId: "524246003776",
  appId: "1:524246003776:web:dc54fb4d763aac0e872fa5",
  measurementId: "G-4GNQXCTRR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)