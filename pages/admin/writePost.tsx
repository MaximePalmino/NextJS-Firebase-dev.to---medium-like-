import { setDoc , doc, addDoc, collection} from "firebase/firestore";
import { useState } from "react";
import { firestore, auth } from "../../lib/firebase";

const writePost: React.FC = () => {


const [title, setTitle] = useState<string>()
const [content, setContent] = useState<string>()

const setTitleHandler = (e) => {
    e.preventDefault()
    setTitle(e.target.value)

}
const setContentHandler = (e) => {
    setContent(e.target.value)

}

const addPostHandler = async(e) => {
    e.preventDefault()
// Add a new document with a generated id.
    const docRef: any = await setDoc(doc(collection(doc(collection(firestore, "users"), auth.currentUser.uid), "posts")), {

    title: title,
    content: content,

  });

  console.log("Document written with ID: ", docRef);


}
                    

    return <>
        <h1>Hello</h1>
        <form>
        <input onChange={setTitleHandler} placeholder="title"></input>
        <input onChange={setContentHandler} placeholder="content"></input>
        <button onClick={addPostHandler}>Faire un post</button>
        </form>
    </>
}
export default writePost