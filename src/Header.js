import React from 'react'
import {useDispatch} from 'react-redux'
import './Header.css'
import {logout} from './features/userSlice';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {auth} from './firebase';
export default function Header() {
  const dispatch=useDispatch()
  const logoutOfApp=()=>{
    dispatch(logout())
    auth.signOut();
  }
    return (
        <div className="header">
          <div className="header-left">
            <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo"/>
            <div className="header-search">
                <SearchIcon/>
                <input type="text"/>
            </div>
          </div>
          <div className="header-right">
              <HeaderOption title="Home" Icon={HomeIcon}/>
              <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
              <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
              <HeaderOption title="Messaging" Icon={ChatIcon}/>
              <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
              <HeaderOption avatar="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" onClick={logoutOfApp}/>
          </div>


        </div>
    )
}
