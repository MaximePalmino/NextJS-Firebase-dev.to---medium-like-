import { collection, doc, setDoc , getDocs} from "firebase/firestore"; 
import { firestore } from "../lib/firebase";
import {  useEffect, useState } from 'react';


interface UserData {
    photoURL: string,
    username: string,
    displayName: string,
}

const UserProfil : React.FC = () => {


    const [userData, setUserData] = useState<UserData>({
        photoURL: '',
        username: '',
        displayName: '',
    })

    const fetchPhoto = async () => {
        const querySnapshot = await getDocs(collection(firestore, "users"));
        querySnapshot.forEach((doc) => {
            if(doc.data().photoURL){
                setUserData({
                    photoURL: doc.data().photoURL,
                    username: doc.data().username,
                    displayName: doc.data().displayName
                })
            }
        });    
    }

    useEffect(() => {
 
        fetchPhoto()

    }, [setUserData])



    return (
       <>
            <div className="box-center">
            <img src={userData.photoURL} className="card-img-center" />
            <p>
            <i>{userData.username}</i>
            </p>
            <h1>{userData.displayName}</h1>
            </div>

        </>
    )
    }

export default UserProfil

