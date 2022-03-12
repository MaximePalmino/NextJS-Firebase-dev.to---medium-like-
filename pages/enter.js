import { auth, signIn } from '../lib/firebase'

export default function Enter(props) {
    const user = null;
    const username = null;

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