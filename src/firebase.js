import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAFONI8CtUim3IzE7Il1Ubj6LzFRvL6wQo",
  authDomain: "instagram-clone-1bafa.firebaseapp.com",
  databaseURL: "https://instagram-clone-1bafa.firebaseio.com",
  projectId: "instagram-clone-1bafa",
  storageBucket: "instagram-clone-1bafa.appspot.com",
  messagingSenderId: "989939619409",
  appId: "1:989939619409:web:09e8ebc37bea1f2a09ca70",
  measurementId: "G-44QPQ3Z4LN"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }

