import React from 'react';
import {Avatar} from '@material-ui/core';
import './Sidebar.css';
import {useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user=useSelector(selectUser)
     const recentItem=(topic)=>(
         <div className="sidebar-hashtag">
             <span className="hashtags">#</span>
             <p>{topic}</p>
         </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar-top">
               <img src="https://images.unsplash.com/photo-1609986826541-063f1aa74219?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="background"/>
               <Avatar src={user.photoUrl}/>
               <h2>{user.displayName}</h2>
               <h4>{user.email}</h4>
            </div>
            <div className="sidebar-stats">
            <div className="sidebar-stat">
                <p>Who viewed you</p>
                <p className="stat-number">2345</p>
            </div>
            <div className="sidebar-stat">
                <p>Views on Posts</p>
                <p className="stat-number">1345</p>
            </div>
            </div>
            <div className="sidebar-bottom">
               <p>Recent</p>  
               {recentItem('reactjs')}
               {recentItem('development')}
               {recentItem('softwareEngineering')}
               {recentItem('vuejs')}
               {recentItem('design')}
            </div>
        </div>
    )
}

export default Sidebar
