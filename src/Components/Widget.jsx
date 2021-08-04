import React from "react";
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

import './Widget.css';

function Widget()
{

    return(
<>
<div className="widget">
 <div className="widget-input">
     <SearchIcon/>
     <input id="search-bar" type="text" placeholder="Search Twitter"/>
     </div>
     <div className="widget-container">
         <h2>What's Happening</h2>
         <TwitterTweetEmbed tweetId={"1420079478504558597"} />
         <TwitterTweetEmbed tweetId={"1422254877217107974"} />
         <TwitterTweetEmbed 
         sourceType="profile"
         ScreenName="cleverquazi"
         options={{height:400}}

         />
         <TwitterShareButton
         url={"https://Github.com/coder123-abhi"}
         options={{text:"I am a full stack developer", via:"abhigyankhaund" }}
         />
         
     </div>
     <div className="topics">
        <h2>Topics to follow</h2>
        <div className="topic-description">
            <div className="kpop">
            <h4>K-POP</h4><a href="https://twitter.com/i/topics/888105153038958593"><button id="k">Follow</button></a>
            </div>
            <div className="bit-coin">
            <h4>Bitcoin Currency</h4><a href="https://twitter.com/i/topics/1007360414114435072"><button id="b">Follow</button></a>
            </div>
            <div className="science">
            <h4>Science and Technology</h4><a href="https://twitter.com/TechScienceand1"><button id="s">Follow</button></a>
            </div>
            <div className="business">
            <h4>Business Insiders</h4><a href="https://twitter.com/BiIndia"><button id="bus">Follow</button></a>
            </div>

            </div>
         </div>
    
    </div>
</>

    );
}

export default Widget;