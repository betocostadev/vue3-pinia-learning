// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_API_KEY,
  authDomain: 'noteballs-45b0d.firebaseapp.com',
  projectId: 'noteballs-45b0d',
  storageBucket: 'noteballs-45b0d.appspot.com',
  messagingSenderId: '1075066005742',
  appId: '1:1075066005742:web:86f0c2d81eb66d6428abff',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { auth, db }
