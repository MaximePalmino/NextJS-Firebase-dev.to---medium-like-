import { doc, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, firestore } from "../lib/firebase";


const Feed: React.FC<any> = ({title, content}: any) => {



    return(
        <>
            <div className="box-center">
                <div className="card">
                    <h1>{title.title}</h1>
                    <p>{content.content}</p>
                    <button>See the post</button>
                </div>
            </div>       
         </>
    )
}

export default Feed