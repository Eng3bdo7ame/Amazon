import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBFzP0Fe3b9f1ZSnTgz1eDmMnhbhqzynO8",
    authDomain: "clone-76f33.firebaseapp.com",
    projectId: "clone-76f33",
    storageBucket: "clone-76f33.appspot.com",
    messagingSenderId: "938423449432",
    appId: "1:938423449432:web:f3eecac3ce94a379d1572d",
    measurementId: "G-YR34114HGH",
};

// const app = !firebase.app.length ?
//     firebase.initializeApp(firebaseConfig) :
//     firebase.app();

const firebaseApp = firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);

// firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const storage = firebase.storage();

// firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { db, auth };

// Get a list of cities from your database
// async function getCities(db) {
//     const citiesCol = collection(db, "cities");
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map((doc) => doc.data());
//     return cityList;
// }