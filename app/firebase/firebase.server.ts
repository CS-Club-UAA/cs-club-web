import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { firebaseConfig } from './firebase.config';

// Initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = firebase.app();
// const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// return firebase components
export { db, storage, app };

console.log(
  app.name
    ? 'Connected to firebase 😎😎😎'
    : "Couldn't connect to firebase 😫😪🤔"
);
