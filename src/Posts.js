import React from 'react'
import {Avatar} from '@material-ui/core';
import "./Posts.css";
import FeedInput from './FeedInput';
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined" ;
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
function Posts({name,description,photoUrl,message}) {
    return (
        <div className="post">
            <div className="post-header">
               <Avatar src={photoUrl}>{name[0]}</Avatar>
               <div className="post-info">
                   <h2>{name}</h2>
                   <p>{description}</p>
               </div>
            </div>
            <div className="post-body">
                <p>{message}</p>
            </div>
            <div className="post-buttons">
                <FeedInput Icon={ThumbUpAltOutlinedIcon} title="like" color="gray"/>
                <FeedInput Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
                <FeedInput Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <FeedInput Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
}

export default Posts
