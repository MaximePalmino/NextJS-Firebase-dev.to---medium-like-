import { auth, signIn } from '../lib/firebase'
import { useContext } from "react";
import { UserContext } from "../lib/context";

const Enter = (props) => {


const {user, username} = useContext(UserContext)

    // 1. user signed out <SignInButton />
    // 2. user signed in, but missing username <UsernameForm />
    // 3. user signed in, has username <SignOutButton />
    return (
      <main>
        {user ? 
          !username ? <UsernameForm /> : <SignOutButton /> 
          : 
          <SignInButton />
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
    return null;
  }

