import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailIcon from '@material-ui/icons/Email';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './Sidebar.css';




function Sidebar()
{
return(
<>
<div className="sidebar">
    
   <div className="sidebar-main">
   
    <div className="twitter-icon">
    <TwitterIcon id="twiticon"/>
    </div>

    
    <div className="sidebar-tab">
    <div className="home-button">
        <a href="https://twitter.com/home"><button id="home"><HomeIcon/></button></a> 
        </div>
 
    <div className="explore-button">
 <a href="https://twitter.com/explore"><button id="explore"><SearchIcon/></button></a>
        </div>
 
        <div className="explore-button">
<a href="https://twitter.com/notifications"><button id="notification"><NotificationsNoneOutlinedIcon/></button></a>
        </div>
 
        <div className="mail-button">
<a href="https://twitter.com/messages"><button id="email"><EmailIcon/></button></a>
        </div>
 
        <div className="profile-button">
<a href=""><button id="person"><PersonOutlineOutlinedIcon/></button></a>
        </div>
 
        <div className="more-button">
            <button id="more"><MoreHorizIcon /></button>
            </div>
 
            <div className="tweet-display">
                <button id="add"><AddBoxIcon/></button>
                </div>


</div>
</div>

    </div>

</>
);
}

export default Sidebar;