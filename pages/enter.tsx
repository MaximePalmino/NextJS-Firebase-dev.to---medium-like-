import { auth, signIn } from '../lib/firebase'
import { useContext, useState, useEffect, useCallback } from "react";
import { UserContext } from "../lib/context";
import { firestore } from '../lib/firebase';
import { doc } from "firebase/firestore";
import debounce from 'lodash.debounce';



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
      const onChange = (e) => {
        // Force form value typed in form to match correct format
        const val = e.target.value.toLowerCase();
        const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    
        // Only set form value if length is < 3 OR it passes regex
        if (val.length < 3) {
          setFormValue(val);
          setLoading(false);
          setIsValid(false);
        }
    
        if (re.test(val)) {
          setFormValue(val);
          setLoading(true);
          setIsValid(false);
        }
      };


  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);

  // Hit the database for username match after each debounced change
  // useCallback is required for debounce to work
  const checkUsername = useCallback(
    debounce(async (username) => {
      if (username.length >= 3) {
        const ref = firestore.doc(`usernames/${username}`);
        const { exists } = await ref.get();
        console.log('Firestore read executed!');
        setIsValid(!exists);
        setLoading(false);
      }
    }, 500),
    []
  );


    return (
    !username && (
      <section>
        <h3>Choose Username</h3>
        <form onSubmit={onSubmit}>
          <input name="username" placeholder="myname" value={formValue} onChange={onChange} />
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
  

function UsernameMessage({ username, isValid, loading }) {
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