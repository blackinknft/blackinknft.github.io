import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzxDrrd4-9pPX8cXyOWqlaN2EPN-QC7C8",
    authDomain: "tinder-clone-c10d5.firebaseapp.com",
    projectId: "tinder-clone-c10d5",
    storageBucket: "tinder-clone-c10d5.appspot.com",
    messagingSenderId: "129125063869",
    appId: "1:129125063869:web:4b1864dad9d225bf8dabd4",
    measurementId: "G-5FK14BQWK9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();
  const auth = firebase.auth();

  export {database, auth};