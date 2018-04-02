import React, { Component } from 'react';
import { SideBarItem }from '../SideBarManager';

export default class SideBarItems extends Component {
    render() {
           return (
           <div>
                <SideBarItem 
                    navPage = "/"
                    toggleVisibility = {this.props.toggleVisibility}
                    icon = 'home' 
                    title = 'Home' />
                <SideBarItem 
                    navPage = "/devices"
                    toggleVisibility = {this.props.toggleVisibility}
                    icon = 'plug' 
                    title = 'Devices' />
                <SideBarItem 
                    navPage = "/rooms"
                    toggleVisibility = {this.props.toggleVisibility}
                    icon = 'home' 
                    title = 'Rooms' />
                <SideBarItem 
                    navPage = "/user"
                    toggleVisibility = {this.props.toggleVisibility}
                    icon = 'user' 
                    title = 'Users' />
                <SideBarItem 
                    navPage = "/help"
                    toggleVisibility = {this.props.toggleVisibility}
                    icon = 'info' 
                    title = 'Help' />
            </div>)
            ;
    }
}