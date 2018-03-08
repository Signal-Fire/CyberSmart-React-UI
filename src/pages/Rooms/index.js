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
            locations : [],
            isLoading : true
        };
        
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.fetchLocationData();
    }

    fetchLocationData() {
        axios.get(API_LOCATION_URL + "/combine/devices")
        .then(result => {
            this.handleLocationResult(result.data);
        }).catch(error => {
            console.log(error);
        });
    }

    handleLocationResult(locations) {
        console.log(locations);
        this.setState({
            locations : locations,
            isLoading : false
        });
    }

    render() {
        return (
            <header className="page-body ">
                <Grid stackable columns = {4}> 
                    {this.state.locations.map((location) =>                           
                        <Grid.Column key = {location.id}>  
                            <LocationWidget location = {location}/>
                        </Grid.Column>    
                    )}                  
                </Grid>
            </header>
        )
    }
}
