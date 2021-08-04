import React, {useState} from "react";
import './Tweetbox.css';
import ImageIcon from '@material-ui/icons/Image';
import db from './firebase';

function Tweetbox(){

const [tweetmessage, setTweetmessage]=useState(" ");
const [tweetimage, setTweetimage]=useState(" ");


const sendtweet=(e)=>{

    e.preventDefault();
    

db.collection('post').add({

    displayName:"Abhigyan Khaund",
    username:"abhigyankhaund",
    verified:true,
    text: tweetmessage,
    image: tweetimage,
    avatar: "https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg",

})

setTweetmessage("");
setTweetimage("");

};

    return(
<>
<div className="tweetbox">
<form>
    <div className="tweetbox-input">
<input type="text" placeholder="What's happening?" value={tweetmessage} id="tweet" onChange={(e)=>{setTweetmessage(e.target.value)}}/>

    <div className="img-tweet">
<div className="image-put">
<ImageIcon id="pic-upload"/><input type="text" id="img-field" value={tweetimage} placeholder="upload image if you want" onChange={(e)=>{setTweetimage(e.target.value)}}/>
</div>
<div className="tweet-yo">
<button id="tweet-man" onClick={sendtweet}>Tweet</button>
    </div>
    </div>
    

    </div>
   
</form>
</div>
</>
    );
}

export default Tweetbox;