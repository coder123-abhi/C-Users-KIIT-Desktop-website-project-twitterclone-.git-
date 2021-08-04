import React from 'react';
import './Post.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import {Avatar} from '@material-ui/core';

function Post({
displayName,
username,
verified,
text,
image,
avatar

})   {

    return(
<>
<div className="post">
    <div className="post-avatar">
    <Avatar src={avatar}/>
    </div>
    <div className="post-body">
        <div className="post-header">
            <div className="post-headertext">
        <h3>
      {displayName}{" "}
            <span className="post-headerspecial">{ verified&&< CheckCircleIcon id="verify"/>}  @{username}</span>
        </h3>
        
        <div className="post-headerdescription">
           <p> {text}</p>
        </div>
        <div className="post-image">
            <img id="postimage" src={image}/>
            </div>
            <div className="post-footer">
                < ChatBubbleOutlineIcon fontSize="small"/>
                < RepeatIcon fontSize="small"/>
                <FavoriteBorderIcon fontSize="small"/>
               < PublishIcon fontSize="small"/>
                </div>
        
                </div>
        </div>
   </div>

    
    </div>

</>
    );
}

export default Post;