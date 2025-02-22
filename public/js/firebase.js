// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// import firebase from "firebase/app";
// import "firebase/firestore";
// import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyDS-nlvWNcRlF-TpVw2E1Bq1H8RggMIyyY",
  authDomain: "blogging-website-b94a3.firebaseapp.com",
  projectId: "blogging-website-b94a3",
  storageBucket: "blogging-website-b94a3.appspot.com",
  messagingSenderId: "926394430167",
  appId: "1:926394430167:web:9104eac2e10305ce29f692",
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service 
let db = getFirestore(app);



