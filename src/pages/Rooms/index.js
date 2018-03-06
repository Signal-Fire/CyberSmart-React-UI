/*jshint esversion: 6*/
import React, { Component } from 'react';

import { API_LOCATION_URL } from '../../config';

import { LocationWidget } from '../../components/Exports/Widgets';

import { Grid } from 'semantic-ui-react';

import '../Master.css';
import './rooms.css';

import axios from 'axios';

export default class RoomPage extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentWillMount() {

    }

    componentDidMount() {
        axios.get(API_LOCATION_URL + "/combine/devices")
        .then(result => {
            this.handleLocationResult(result);
        }).catch(error => {

        });
    }

    handleLocationResult(locations) {
        this.setState({
            locations : locations
        });
    }

    render() {
        return (
            <header className="page-body">
                <Grid stackable columns = {4}>                           
                    <Grid.Column>  
                        <LocationWidget name = 'Kitchen' roomDevices = '0'/>
                    </Grid.Column>                      
                </Grid>
            </header>
        )
    }
}
