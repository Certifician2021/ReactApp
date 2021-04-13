import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap';


function Header() {
    return (
        <div className="header">
         <div className="header__left">
         <Dropdown>
            <Dropdown.Toggle variant="light" className="menu__icon" >
              <MenuIcon />
            </Dropdown.Toggle>

        <Dropdown.Menu>
        <Dropdown.Item href="/">Home</Dropdown.Item>
        <Dropdown.Item href="#/action-1">News</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Movies</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown> 
            <Link to="/"><img className="header__logo" src="https://i.pinimg.com/originals/31/23/9a/31239a2f70e4f8e4e3263fafb00ace1c.png" alt="" /></Link>
            <Link to="/"><h2 className="maintitle">MyTube</h2></Link>
         </div>
         <div className="header__center">  
            <input placeholder="Search" type="text" />
            <Link><SearchIcon className="searchicon"/></Link>
            </div>
            <div className="header__right">  
            <VideoCallSharpIcon className="header_icon"/>
            <AppsSharpIcon className="header_icon"/>
            <NotificationsRoundedIcon className="header_icon" />
            <Dropdown>
            <Dropdown.Toggle variant="light" className="menu__icon" >
            <AccountCircleIcon  />
            </Dropdown.Toggle>

        <Dropdown.Menu>
        <Dropdown.Item ><Link to="/signin">Sign-In</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/signup">Sign-Up</Link></Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown> 
            </div>
        </div>
    )
}

export default Header






























































































































































































































































































































































































































            
   
