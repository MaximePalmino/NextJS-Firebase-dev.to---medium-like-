
import { getUserWithUsername, postToJSON, firestore } from '../lib/firebase';
import { query, collection, where, getDocs, limit, orderBy, getFirestore, doc } from 'firebase/firestore';
import UserProfile from '../components/UserProfile';
import { useEffect, useState } from 'react';



const UserPosts : React.FC = ({postw}: any) => {



    return (
        <>
            <h1>{postw}</h1>
             <h1>Hi from Posts</h1>
        </>
    )
}

export default UserPosts