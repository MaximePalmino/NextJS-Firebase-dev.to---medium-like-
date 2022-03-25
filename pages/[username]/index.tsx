import UserProfil from "../../components/UserProfile"
import UserPosts from "../../components/UserPosts"
import { UserContext } from "../../lib/context";
import { useContext, useEffect, useState } from 'react';
import { query, collection, where, getDocs, limit, orderBy, getFirestore, doc } from 'firebase/firestore';
import { firestore } from '../../lib/firebase';


// interface Post {
//     title: string,
//     content: string,
// }


const UserProfilPage : React.FC = () => {


    const [post, setPost] = useState<any>([])

    const test = async () => {
        
        const querySnapshot = await getDocs(collection(firestore, "users"));
        const postData =  []
        querySnapshot.forEach((doc) => {
            postData.push({title: doc.id})
            console.log(postData,'POOOOOOOST')
            setPost(postData)
            console.log(post, "SETPOST");

        });

        }

    useEffect(() => {

        test()
    }, [setPost])



    return(
        <>
        <UserProfil   />
        {/* {post.map((posts) => (
         <UserPosts postw={posts.id} />


        ))} */}
        </>
    )
}

export default UserProfilPage