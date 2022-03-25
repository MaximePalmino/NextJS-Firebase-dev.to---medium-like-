import UserProfil from "../../components/UserProfile"
import UserPosts from "../../components/UserPosts"
import { UserContext } from "../../lib/context";
import { useContext, useEffect, useState } from 'react';



export interface userProps {

user: any,
username: string,

}

const UserProfilPage : React.FC = () => {

    const { user, username } = useContext<any>(UserContext)


    return(
        <>
        <UserProfil user={user} username={username}  />
        <UserPosts />
        </>
    )
}

export default UserProfilPage