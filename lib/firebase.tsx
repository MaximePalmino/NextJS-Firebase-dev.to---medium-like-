import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, where} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration

interface Api {
  apiKey: string,
  authDomain: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string,
}

const firebaseConfig: Api = {
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



/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
 export async function getUserWithUsername(username) {
  const usersRef = collection(firestore, 'users');
  console.log(usersRef)
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}