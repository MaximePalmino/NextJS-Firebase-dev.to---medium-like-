
import { getUserWithUsername, postToJSON, firestore } from '../lib/firebase';
import { query, collection, where, getDocs, limit, orderBy, getFirestore, doc } from 'firebase/firestore';
import UserProfile from '../components/UserProfile';
import { useEffect, useState } from 'react';



interface Prop {
    postw: string
}
const UserPosts : React.FC<Prop>= ({postw}) => {



    return (
        <>
             <h1>{postw}</h1>
        </>
    )
}

export default UserPosts