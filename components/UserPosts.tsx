
import { getUserWithUsername, postToJSON, firestore} from '../lib/firebase';
import { query, collection, where, getDocs, limit, orderBy, getFirestore, doc } from 'firebase/firestore';
import UserProfile from '../components/UserProfile';
import { useEffect, useState } from 'react';


interface Prop {
    title: string,
    content: string
}
const UserPosts : React.FC<Prop>= ({title, content}) => {



    return (
        <>
             <h1>{title}</h1>
             <h1>{content}</h1>
        </>
    )
}

export default UserPosts