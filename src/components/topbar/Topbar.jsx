import React from 'react'
import "./topbar.css"
import { NotificationsNone,Language,Settings }from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">adminpanel</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                 <NotificationsNone/>
                 <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                 <Language/>
                 <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                 <Settings/>
                </div>
                <img src="https://i.pinimg.com/474x/c1/ef/93/c1ef9380fd4853d3815b951b72b8546c--business-professional-business-women.jpg" alt="" className="topAvatar" />
            </div>
        </div>
        </div>
  )
}
