// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7cpvFRvsBLoI040xNR1549i9STbHxNUE",
  authDomain: "userauthentication-ff037.firebaseapp.com",
  projectId: "userauthentication-ff037",
  storageBucket: "userauthentication-ff037.appspot.com",
  messagingSenderId: "405540849385",
  appId: "1:405540849385:web:3f3367bbf326503fd2d278",
  measurementId: "G-TRVYCCK0RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;