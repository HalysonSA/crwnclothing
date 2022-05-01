import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
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

  const GoogleProvider = new GoogleAuthProvider();

  GoogleProvider.setCustomParameters({

    prompt:'select_account',
  });

  export const auth = getAuth()

  export const signInWithGooglePopUp = () => signInWithPopup(auth, GoogleProvider);

  export const db = getFirestore();



  export const createUserGoogle = async (userAuth:any,additionalInfo = {}) =>{
        if(!userAuth) return;

            const userDocRef = doc(db,'users',userAuth.uid);

            const userSnapshot = await getDoc(userDocRef);

            if(!userSnapshot.exists()){
                const {displayName, email} = userAuth;
                const createdAt = new Date();
            
                try{
                    await setDoc(userDocRef,{
                        displayName,
                        email,
                        createdAt,
                        ...additionalInfo,
                    });
                }
                catch (error:any) {
                    console.log('error creating the user', error.message);
                  }
                }
                
                return userDocRef
  }
  

export const createUserEmail = async(email:any,password:any) => {

    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);

};
 



