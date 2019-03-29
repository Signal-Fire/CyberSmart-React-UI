import React from 'react';
import { SideBarItem }from '../';

export default () => {
    return (
        <div>
            <SideBarItem 
                navPage = "/"               
                icon = 'home' 
                title = 'Home' />
            <SideBarItem 
                navPage = "/devices"                
                icon = 'plug' 
                title = 'Devices' />
            <SideBarItem 
                navPage = "/rooms"
                icon = 'map pin' 
                title = 'Rooms' />
            <SideBarItem 
                navPage = "/user"
                icon = 'user' 
                title = 'Users' />
            <SideBarItem 
                navPage = "/help"
                icon = 'info' 
                title = 'Help' />
        </div>
    )
}