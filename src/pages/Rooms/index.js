/*jshint esversion: 6*/
import React, { Component } from 'react';

import { API_LOCATION_URL } from '../../config';

import { LocationWidget, LocationControlPanel } from '../../components/Exports/Widgets';

import { Grid, Segment } from 'semantic-ui-react';

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
        axios.get(API_LOCATION_URL + "/find/all")
        .then(result => {
            console.log(result.data.length);
            if (result.data.length > 0) {
                this.handleLocationResult(result.data);
            } else {
                this.forceUpdate();
            }
        }).catch(error => {
            console.log(error);
        });
    }

    handleLocationResult(locations) {
        this.setState({
            locations : locations,
            isLoading : false
        });
    }

    render() {
        return (
          <Segment inverted tertiary='true' style={{ minHeight: 600, padding: '1em 0em' }}>
            <header className="page-body ">
                <Grid stackable columns = {1} divided = 'vertically'>
                        <Grid.Column verticalAlign = 'middle'>
                            <LocationControlPanel />
                        </Grid.Column>
                    </Grid>
                <Grid stackable columns = {6}>
                    {this.state.locations.map((location) =>
                        <Grid.Column key = {location._id}>
                            <LocationWidget location = {location}/>
                        </Grid.Column>
                    )}
                </Grid>
            </header>
            </Segment>
        )
    }
}
