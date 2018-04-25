/*jshint esversion: 6*/
import React from 'react';


import { LocationWidget } from '../../components/Exports/Widgets';
import { Panel } from '../../components/ControlPanel';

import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import '../Master.css';
import './rooms.css';

const Page = ({
    locations
}) => {
    return(
        <header className="page-body">
            <Grid stackable columns = {1} divided = 'vertically'>
                        <Grid.Column verticalAlign = 'middle'>
                            <Panel name = 'Locations' />
                        </Grid.Column>                        
                    </Grid>      
                <Grid stackable columns = {6}> 
                    { locations === null ?
                        false
                        :
                        locations.map((location) =>                           
                        <Grid.Column key = {location._id}>  
                            <LocationWidget location = {location}/>
                        </Grid.Column>    
                    )}                  
                </Grid>
        </header>
    );
}

const mapStateToProps = state => ({
    locations : state.locations.locations
})

export default connect(mapStateToProps, null)(Page);
