import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Config = {
    apiKey: "AIzaSyBieRTSW_G7HMtBxIVzb5x7G7QAFiFKwl0",
    authDomain: "fashion-center-db.firebaseapp.com",
    projectId: "fashion-center-db",
    storageBucket: "fashion-center-db.appspot.com",
    messagingSenderId: "538208673436",
    appId: "1:538208673436:web:d7851f1ca8cb0f558fd759",
    measurementId: "G-74DLF23HXM"
  };

  firebase.initializeApp(Config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;