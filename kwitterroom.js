//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB54NJosfvf2KRAKkT-3iPc1hFanyop3W8",
  authDomain: "hw-91-4b504.firebaseapp.com",
  projectId: "hw-91-4b504",
  storageBucket: "hw-91-4b504.appspot.com",
  messagingSenderId: "1014712742564",
  appId: "1:1014712742564:web:f68921b048da32cf9c2c31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
