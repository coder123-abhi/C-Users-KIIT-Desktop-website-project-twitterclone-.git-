import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDuQh8T65rc8yREfeSb54Gj6Jt_8HU9n2k",
    authDomain: "twitter-clone-a996a.firebaseapp.com",
    projectId: "twitter-clone-a996a",
    storageBucket: "twitter-clone-a996a.appspot.com",
    messagingSenderId: "106430206040",
    appId: "1:106430206040:web:c091171c2ac46160427a2d",
    measurementId: "G-6PVPBGF3L0"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig); 

  const db=firebaseApp.firestore();

  export default db;