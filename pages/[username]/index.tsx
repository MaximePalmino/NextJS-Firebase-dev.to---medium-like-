import UserProfil from "../../components/UserProfile"
import UserPosts from "../../components/UserPosts"
import { useEffect, useState } from 'react';
import { query, collection, where, getDocs,getDoc, limit, orderBy, getFirestore, doc } from 'firebase/firestore';
import { firestore, auth  } from '../../lib/firebase';



const UserProfilPage : React.FC = () => {

    const [post, setPost] = useState([])
    // const [userUid, setUserUid] = useState<string>()

    const test = async () => {
        if (auth.currentUser) {
            const getPosts = await getDocs(collection(firestore, 'users', auth.currentUser.uid, 'posts'))
            const postData =  []
            getPosts.forEach((doc) => {
                postData.push({
                    title: doc.data().title,
                    content: doc.data().content
                })
            })
            setPost(postData)
            } 
        }

    useEffect(() => {

        setTimeout(() => {
            test()
        }, 1000)

    }, [])



    return(
        <>
            <UserProfil />
            {post.map((posts) => (
            <UserPosts title={posts.title} content={posts.content}  key={Math.random()} />
            ))}
        </>
    )
}

export default UserProfilPage