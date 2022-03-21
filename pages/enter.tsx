import { auth } from "../lib/firebase"
import { signOut } from 'firebase/auth';
import { useEffect, useState, useContext } from "react";
// import { auth } from '../utils/firestore'; // update path to your firestore config
import { UserContext } from '../lib/context';
import { signInHandler, signOutHandler } from "../lib/auth";

const Enter: React.FC = ({}) => {
  const { user, username } = useContext(UserContext);




  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
      
    return (
        <>
          <main>
            {/* <Metatags title="Enter" description="Sign up for this amazing app!" /> */}
            {user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}
            <SignOutButton/>
          </main>
        </>
    )
}





function SignInButton() {

  return (
    <button className="btn-google" onClick={signInHandler} >
      <img src={'/google.png'} /> Sign in with Google
    </button>
  );
}
function SignOutButton() {


  return (
    <button className="btn-google" onClick={signOutHandler}>
      <img src={'/google.png'} /> Sign OUT with Google
    </button>
  );
}

// Username form

interface UsernameMessageProps {

  username: string,
  isValid: boolean,
  loading: boolean

}

function UsernameForm() {
  const [formValue, setFormValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { user, username } = useContext(UserContext);

  return (
    !username && (
      <section>
        <h3>Choose Username</h3>
        <form>
          <input name="username" placeholder="myname" value={formValue}  />
          <UsernameMessage username={formValue} isValid={isValid} loading={loading} />
          <button type="submit" className="btn-green" disabled={!isValid}>
            Choose
          </button>
          <h3>Debug State</h3>
          <div>
            Username: {formValue}
            <br />
            Loading: {loading.toString()}
            <br />
            Username Valid: {isValid.toString()}
          </div>
        </form>
      </section>
    )
  );
}

function UsernameMessage({ username, isValid, loading }: UsernameMessageProps) {
  if (loading) {
    return <p>Checking...</p>;
  } else if (isValid) {
    return <p className="text-success">{username} is available!</p>;
  } else if (username && !isValid) {
    return <p className="text-danger">That username is taken!</p>;
  } else {
    return <p></p>;
  }
}
  
export default Enter