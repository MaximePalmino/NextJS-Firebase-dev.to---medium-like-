import { collection, doc, setDoc , getDoc} from "firebase/firestore"; 
import { firestore } from "../lib/firebase";
import { UserContext } from '../lib/context';
import { useContext, useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";




const UserProfil : React.FC = () => {

  
    const { user, username } = useContext(UserContext)



    return (
        <>
            <div className="box-center">
            <img src={user.photoURL || '/hacker.png'} className="card-img-center" />
            <p>
                <i>{user.username}</i>
            </p>
            <h1>{user.displayName || 'Anonymous User'}</h1>
            </div>

        </>
    )
}

export default UserProfil


