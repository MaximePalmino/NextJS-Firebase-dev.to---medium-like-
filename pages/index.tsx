import Feed from "../components/Feed"
import { firestore, postToJSON } from '../lib/firebase';
import { Timestamp, query, where, orderBy, limit, collectionGroup, getDocs, startAfter, getFirestore, collection, doc } from 'firebase/firestore';

import { useState, useEffect } from 'react';

interface Posts {
  title: string,
  content: string
}

const Home: React.FC = () => {

  const [posts, setPosts] = useState<Posts[]>([])
  console.log(posts)
  const getAllUsers = async () => {

      const querySnapshot = await getDocs(collection(firestore, "users"));
      const getAllPosts = []
      querySnapshot.forEach(async(doc) => {

      const getPosts = await getDocs(collection(firestore, 'users', doc.id, 'posts'))

      getPosts.forEach((posts) => {
          getAllPosts.push({
              title: posts.data().title,
              content: posts.data().content
          })
      })

      setPosts([...getAllPosts])
    })
  }

  useEffect(() => {

      getAllUsers()
    
  }, [])
  

  return (
    <div>
      {posts.map((post) => {
        console.log(post)
        return <Feed title={post.title} content={post.content} />
      })}
    </div>
  )
}

export default Home

