import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBAJP-ICFWCh9ZcTKI9Koz7-S-qSckwhMQ",
    authDomain: "revents-8bd64.firebaseapp.com",
    databaseURL: "https://revents-8bd64.firebaseio.com",
    projectId: "revents-8bd64",
    storageBucket: "",
    messagingSenderId: "813145468895",
    appId: "1:813145468895:web:aefb6af1474d181babde6a"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.firestore()

  export default firebase