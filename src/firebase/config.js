import * as firebase from 'fiebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAItdnErH6-XoXViCjTJGJ0V48opGzc-3g",
    authDomain: "jonah-gallery.firebaseapp.com",
    databaseURL: "https://jonah-gallery.firebaseio.com",
    projectId: "jonah-gallery",
    storageBucket: "jonah-gallery.appspot.com",
    messagingSenderId: "1033508732568",
    appId: "1:1033508732568:web:670cdd03e5b6a81df59aed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage(); //initializing the firebase storage
  const projectFireStore = firebase.firestore();

  export {projectStorage, projectFireStore};
  