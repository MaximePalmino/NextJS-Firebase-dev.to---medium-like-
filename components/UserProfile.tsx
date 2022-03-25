import { collection, doc, setDoc , getDoc} from "firebase/firestore"; 
import { firestore } from "../lib/firebase";
import { UserContext } from '../lib/context';
import { useContext, useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { getUserWithUsername } from "../lib/firebase";
import { userProps } from "../pages/[username]";

interface Props {

    user: any,
    username: userProps,
}


const UserProfil : React.FC<Props> = ({ user, username}: any) => {


    return (
       <>
            {/* <div className="box-center">
            <img src={user.photoURL} className="card-img-center" />
            <p>
            <i>{username}</i>
            </p>
            <h1>{user.displayName || 'Anonymous User'}</h1>
            </div> */}

        </>
    )
    }

export default UserProfil

