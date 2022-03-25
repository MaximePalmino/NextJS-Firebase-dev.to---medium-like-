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



interface Post {
    postw: string,
}
const UserProfilPage : React.FC = () => {


    const [post, setPost] = useState([])

    const test = async () => {

        const querySnapshot = await getDocs(collection(firestore, "users"));
        const postData =  []
        querySnapshot.forEach((doc) => {
            postData.push({title: doc.id})
            console.log(postData,'POOOOOOOST')
            setPost(postData)

        });

        }

    useEffect(() => {

        test()
        console.log(post, "SETPOST");

    }, [setPost])



    return(
        <>
        <UserProfil   />
        {post.map((posts) => (
         <UserPosts postw={posts.title} />


        ))}
        </>
    )
}

export default UserProfilPage