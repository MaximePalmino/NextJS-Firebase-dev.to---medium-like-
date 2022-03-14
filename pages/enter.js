import { auth, signIn } from '../lib/firebase'
import { useContext, useState } from "react";
import { UserContext } from "../lib/context";
import { firestore } from '../lib/firebase';
import { doc, collection } from "firebase/firestore";
const Enter = (props) => {

const {user, username} = useContext(UserContext)


    // 1. user signed out <SignInButton />
    // 2. user signed in, but missing username <UsernameForm />
    // 3. user signed in, has username <SignOutButton />
    return (
      <main>
      {user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />
      }
    </main>
    );
  }

export default Enter


// Sign in with Google button
  function SignInButton() {

    return (
      <button className="btn-google" onClick={signIn}>
        <img src={'/google.png'} /> Sign in with Google
      </button>
    );
  }
  // Sign out button
  function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign Out</button>;
  }
  
  function UsernameForm() {

    const [formValue, setFormValue] = useState('Heeee');
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const { user, username } = useContext(UserContext);


      const onSubmit = async (e) => {
        e.preventDefault();
        
        // Create refs for both documents
        const userDoc = doc(firestore, `users/${user.uid}`);
        const usernameDoc = doc(firestore, `usernames/${formValue}`);
        
        console.log(userDoc,'USER', usernameDoc,'USERNAME')

      }
    return <h1 onClick={onSubmit}>Heee</h1>;
  }
  

