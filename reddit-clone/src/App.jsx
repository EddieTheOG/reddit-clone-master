import { useEffect, useState } from "react";
import { db } from "./lib/firebase.config";


export default function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
  }, [])
  return (
    <>
      <div className="container">
        {posts.map(post => {
          <Post post={post} key={post.id}/>
        })}
      </div>
    </>
  )
}