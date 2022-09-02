import firebase from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTCdBTw12MrfoGM-5eL2lQMp-vzXw2_2I",
  authDomain: "tenedores-da2e8.firebaseapp.com",
  projectId: "tenedores-da2e8",
  storageBucket: "tenedores-da2e8.appspot.com",
  messagingSenderId: "513901586840",
  appId: "1:513901586840:web:6a4f7a535c126f090723ed",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
