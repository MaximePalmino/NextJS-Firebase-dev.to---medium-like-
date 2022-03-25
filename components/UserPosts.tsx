
import { getUserWithUsername, postToJSON, firestore } from '../lib/firebase';
import { query, collection, where, getDocs, limit, orderBy, getFirestore, doc } from 'firebase/firestore';
import UserProfile from '../components/UserProfile';
import { useEffect, useState } from 'react';



const UserPosts : React.FC = () => {

    const [tests, setTest] = useState<string>()
    const test = async () => {
        const querySnapshot = await getDocs(collection(firestore, "users"));
        querySnapshot.forEach((doc) => {
            setTest(doc.id)
            // console.log(doc.id, " => ", doc.data());
        });
    }

    useEffect(() => {

        test()
    }, [setTest])

    return (
        <>
            <h1>{tests}</h1>
             <h1>Hi from Posts</h1>
        </>
    )
}

export default UserPosts