import UserProfil from "../../components/UserProfile"
import UserPosts from "../../components/UserPosts"
import { UserContext } from "../../lib/context";
import { useContext, useEffect, useState } from 'react';



export interface userProps {

user: any,
username: string,

}

const UserProfilPage : React.FC = () => {



    return(
        <>
        <UserProfil   />
        <UserPosts />
        </>
    )
}

export default UserProfilPage