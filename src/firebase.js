import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAU0eRqvSbq9Xiq18C-mhbEpKRlK423YHE",
    authDomain: "todoapp-3987c.firebaseapp.com",
    databaseURL: "https://todoapp-3987c.firebaseio.com",
    projectId: "todoapp-3987c",
    storageBucket: "todoapp-3987c.appspot.com",
    messagingSenderId: "1095938924238",
    appId: "1:1095938924238:web:e18def3a1798cfa65f3a9f",
    measurementId: "G-EW2Q05ZH20",
});
// const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;