import firebase from "firebase/app";
import { getFirestore,enableIndexedDbPersistence, initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCe8BBPUiojOhJCZkHS17v4MLb4KqhEX8Y",
    authDomain: "srp-quickq.firebaseapp.com",
    projectId: "srp-quickq",
    storageBucket: "srp-quickq.appspot.com",
    messagingSenderId: "744022119301",
    appId: "1:744022119301:web:3551230213997c145eaaec"
  };

// Initialize Firebase

// Initialize Cloud Firestore and get a reference to the service
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()
// const db = initializeFirestore(app, {
//     cacheSizeBytes: CACHE_SIZE_UNLIMITED
//   });

  if(process.browser){
        enableIndexedDbPersistence(db)
        .catch((err) => {
            if (err.code == 'failed-precondition') {
                // Multiple tabs open, persistence can only be enabled
                // in one tab at a a time.
                // ...
                console.log("1")
            } else if (err.code == 'unimplemented') {
                // The current browser does not support all of the
                // features required to enable persistence
                // ...
                console.log("2")
            }
            else {console.log("3")}
        });
}
export {db,app,auth}

// export default function initFirebase()
// {
//     if(getApps().length === 0 )
//     {
//         initializeApp(firebaseConfig);
//         console.log("firebase initialized successfully - pl ")
//     }
//     else
//     {getApp();}
// }