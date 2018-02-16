/* jshint esversion: 6*/
import React, { Component } from 'react';
import {  Sidebar, Segment, Menu } from 'semantic-ui-react';

import { SideBarItem } from '../Exports/Exports';
import { DevicePage } from '../../pages/Exports/Exports';

export default class SideBar extends Component {
    render() {
        return (
            <div>
                <Sidebar.Pushable as={ Segment }>
                    <Sidebar as={Menu} animation='push' direction='left' width='thin' visible={this.props.visible}icon='labeled' vertical inverted>
                        <SideBarItem icon = 'dashboard' title = 'Dashboard' />
                        <SideBarItem icon = 'plug' title = 'Devices' />
                        <SideBarItem icon = 'home' title = 'Rooms' />
                        <SideBarItem icon = 'info' title = 'Help' />   
                    </Sidebar>
                    <Sidebar.Pusher>
                        <div>
                            <DevicePage />
                        </div>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>   
            </div>         
        )
    }
}
