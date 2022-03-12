import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsboqu96mBYaYGPf_yLdDcsmPGca8gGlk",
    authDomain: "fireblogs-6094c.firebaseapp.com",
    projectId: "fireblogs-6094c",
    storageBucket: "fireblogs-6094c.appspot.com",
    messagingSenderId: "14289382093",
    appId: "1:14289382093:web:ad53fb5c4ee13e017f1784"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export const firestore = getFirestore()
export const storage = getStorage(app)


// Sign in with Google provider popup
export const signIn = async () => {
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}