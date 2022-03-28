
import UserProfil from "../../components/UserProfile"
import UserPosts from "../../components/UserPosts"
import { useEffect, useState } from 'react';
import {  collection, getDocs,getDoc, doc, deleteDoc, updateDoc} from 'firebase/firestore';
import { firestore, auth  } from '../../lib/firebase';
import { useRouter } from "next/router";





const singlePost: React.FC = () => {


    const router = useRouter()
    const id = router.query.post
    const [title, setTitle] = useState<string>()
    const [content, setContent] = useState<string>()
    const [isValid, setIsValid] = useState<boolean>(false)
    const [isID, setIsID] = useState<string>()

    const test = async () => {
        const getPosts = await getDocs(collection(firestore, 'users', auth.currentUser.uid, 'posts'))
        getPosts.forEach((doc) => {
            if (id == doc.id) {
                setTitle(doc.data().title)
                setContent(doc.data().content)
                setIsID(doc.id)

            } 
        })
    }

    const deletePost = () => {
        deleteDoc(doc(firestore, 'users', auth.currentUser.uid, 'posts', isID ))
        setTimeout(() => {
            window.location.href = `/username`
        }, 1000)
    }


    useEffect(() => {
        setTimeout(() => { 
            console.log(id)
            test()
        }, 500)
    }, [router])

const setTitleHandler = (e) => {
    setTitle(e.target.value)
}
const setContentHandler = (e) => {
    setContent(e.target.value)
}
const sendFormHandler = async (e) => {
    e.preventDefault()
    const washingtonRef = doc(firestore, "users", auth.currentUser.uid, "posts", isID);
    console.log(washingtonRef)

        await updateDoc(washingtonRef, {
        title: title,
        content: content
        });
    setIsValid(!isValid)

}
    return(
        <>
        <div className="box-center">
            <div className="card">
            {isValid && (
                    <>
                    <form>
                        <button onClick={sendFormHandler}>Confirm</button>
                        <button onClick={(() => {setIsValid(!isValid)})}>Cancel</button>
                        <input onChange={setTitleHandler}></input>
                        <input onChange={setContentHandler}></input>
                        
                    </form>
                    
                    </>
                
            )}
            {!isValid && (
                <>
                    <button onClick={(() => {setIsValid(!isValid)})}>Edit</button>
                    <button onClick={deletePost}>Delete</button>
                    <input disabled value={title}></input>
                    <input disabled value={content}></input>
                </>
            )}
            </div>
        </div>
        </>
    )
}
export default singlePost