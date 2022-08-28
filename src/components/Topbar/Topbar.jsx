import { NotificationsNone, Settings } from '@material-ui/icons';
import { Badge } from '@material-ui/core'
import React from 'react'
import './topbar.css';

function Topbar() {
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <div className="topLeft">
             <span className="logo">CuppieAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topIconContainer">
                    
                    <Badge badgeContent={4} color="primary">
                    <NotificationsNone/>
</Badge>
                    </div>
                    <div className="topIconContainer">
                    
                <span><Settings/></span>
                    </div>
               <img src=""  className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
