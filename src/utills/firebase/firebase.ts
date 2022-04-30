import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GithubAuthProvider,
    GoogleAuthProvider
 } from 'firebase/auth'

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'



const FirebaseConfig = {
    apiKey: "AIzaSyA8Amox2zV7udD16UPSLBfg9IqpaAXstV4",
    authDomain: "crwn-clothing-db-7bf9f.firebaseapp.com",
    projectId: "crwn-clothing-db-7bf9f",
    storageBucket: "crwn-clothing-db-7bf9f.appspot.com",
    messagingSenderId: "665611210466",
    appId: "1:665611210466:web:28f7063ae7f12b671958bb"
  };
  
  const Firebaseapp = initializeApp(FirebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({

    prompt:'select_account',
  });

  export const auth = getAuth()

  export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

  export const db = getFirestore();



  export const createUser = async(userAuth:any) =>{


            const userDocRef = doc(db,'users',userAuth.uid)

            const userSnapshot = await getDoc(userDocRef)

            if(!userSnapshot.exists()){
                const {displayName, email} = userAuth
                const createdAt = new Date()
            
                try{
                    await setDoc(userDocRef,{
                        displayName,
                        email,
                        createdAt
                    });
                }
                catch (error:any) {
                    console.log('error creating the user', error.message);
                  }
                }
                
                return userDocRef
  }
  






