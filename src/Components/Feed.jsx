import React , {useState, useEffect} from 'react';
import './Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post.jsx';
import db from  './firebase';
function Feed()
{

const [post, setPost]=useState([]);

useEffect(() => {
    db.collection("post").onSnapshot((snapshot) =>
      setPost(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);



return(
<>
<div className="feed">
    <div className="feed-title">
<h1>Home</h1>
</div>
<div className="feed-twitterbox">
    <Tweetbox/>
    </div>
<div className="feed-post">

{post.map(post=>(
    <Post
    displayName={post.displayName}
    username={post.username}
     verified={post.verified}
     text={post.text}
     avatar={post.avatar}
     image={post.image}
   
    
    />

))}


   

    </div>



</div>

</>
);

}

export default Feed;