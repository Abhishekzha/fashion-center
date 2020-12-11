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

  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth)return;
    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();
    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try{
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
      }catch(error){
        console.log("error storing data to database",error)
      }
    }
    return userRef;
  };

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;