/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

export default class SideBarItems extends Component {
    render() {
        return (
            <div>   
                <div className="item">
                    <div className="header"><h3>Menu</h3></div>
                </div>             
                <div className="item">
                    <div className="header">Add Device</div>
                </div>
                <div className="item">
                    <div className="header">Add Room</div>
                </div>
                <div className="item">
                    <div className="header"><Icon name='mobile' />Devices</div>
                    <div className="menu">
                        <a className="item">Living Room Lamp</a>
                        <a className="item">Kitchen Toaster</a>
                    </div>
                </div>
                <div className="item">
                    <div className="header"><Icon name='home' />Rooms</div>
                        <div className="menu">
                            <a className="item">Living Room</a>
                            <a className="item">Kitchen</a>
                        </div>
                </div>  
            </div>     
        )
    }
}
