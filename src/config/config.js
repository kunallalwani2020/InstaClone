import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBV-sza06Y-Rml5OKvKbOV8bQwguJI0ero",
    authDomain: "instagram-clone-2f5ed.firebaseapp.com",
    projectId: "instagram-clone-2f5ed",
    storageBucket: "instagram-clone-2f5ed.appspot.com",
    messagingSenderId: "100753997428",
    appId: "1:100753997428:web:785faa82fcd7a95b48db21",
    measurementId: "G-K554GH6FV0"
  };
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage =firebase.storage();
export {db , auth ,storage  } 