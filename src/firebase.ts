// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyB8bj3m1XjWq-DKEWTmrmHVzhq4HqT2wx4',

  authDomain: 'netflix-clone-private.firebaseapp.com',

  projectId: 'netflix-clone-private',

  storageBucket: 'netflix-clone-private.appspot.com',

  messagingSenderId: '368991522897',

  appId: '1:368991522897:web:e44190ad2ec6a841932870',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { auth };
export default db;
