import { auth } from "../lib/firebase"
import { signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
// import { auth } from '../utils/firestore'; // update path to your firestore config

import { signInHandler, signOutHandler } from "../lib/auth";

const Enter: React.FC = ({}) => {




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
    return (
        <>
            <h1>Hello from Enter</h1>
            <SignInButton /> <SignOutButton /> 
        </>
    )
}







  
export default Enter