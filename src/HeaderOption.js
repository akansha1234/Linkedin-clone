import React from 'react'
import './HeaderOption.css'
import {Avatar} from '@material-ui/core'
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'
function HeaderOption({avatar,Icon,title,onClick}) {
    const user=useSelector(selectUser)
    return (
        <div className="headeroption" onClick={onClick}>
            {Icon && <Icon className="headeroption-icon"/>}
            {avatar && <Avatar/>}
            <h3 className="headeroption-title">{title}</h3>
        </div>
    )
}

export default HeaderOption
