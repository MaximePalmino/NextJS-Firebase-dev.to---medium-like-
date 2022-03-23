import { collection, doc, setDoc , getDoc} from "firebase/firestore"; 
import { firestore } from "../lib/firebase";
import { UserContext } from '../lib/context';
import { useContext, useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";


interface MessageProps {
    message: string
}

const UserProfil : React.FC = () => {

  
    const { user, username } = useContext(UserContext)
    const [name, setName] = useState<string>('')


    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const docRef = doc(firestore, "users");
                  const docSnap = await getDoc(docRef);
                  if (docSnap.exists()) {
                     setName(docSnap.data().username) 
                     console.log('yes')
                     return name
                      } else {
                      // doc.data() will be undefined in this case
                      console.log("No such document!");
                    }
                }
    }     

    }, [])
 


    return (
        <>
            <h1>{name}</h1>
            <button>Click</button>
        </>
    )
}

export default UserProfil


