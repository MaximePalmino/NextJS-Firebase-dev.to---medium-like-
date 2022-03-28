import { doc, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, firestore } from "../lib/firebase";


const Feed: React.FC = () => {

    const [users, setUsers] = useState([])


    const getAllUsers = async () => {
        const querySnapshot = await getDocs(collection(firestore, "users"));
        const allUsers = []
        querySnapshot.forEach((doc) => {

            allUsers.push({
                id: doc.id
            })
        

        })
        setUsers(allUsers)
        console.log(users)
    }

    const getAllPosts = async () => {
        getAllUsers()
        const getAllPosts = doc(firestore, "users", users[0], "posts")
    }

    useEffect(() => {

        getAllUsers()
    
    }, [])

    return(
        <>
        <h1>Hello from posts</h1>
        </>
    )
}

export default Feed