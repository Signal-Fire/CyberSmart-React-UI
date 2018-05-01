import React from 'react';
import { connect } from 'react-redux';
import { Panel } from '../../components/ControlPanel';
import { LocationsTable } from '../../components/Locations';
import { AddMe } from '../../components/Messages';

import '../Master.css';
import './rooms.css';

const RoomsPage = ({
    locations
}) => {
    return(
        <header className="page-body">
            <Panel name = 'Locations' />   
            {
                locations !== null ?
                    locations.filter(x => x.active).length > 0 ?                     
                        <LocationsTable />  
                    : <AddMe objects = 'Locations' />
                : <AddMe objects = 'Locations' />
            }
        </header>
    );
};

const mapStateToProps = state => ({
    locations : state.locations.locations
})

export default connect(mapStateToProps, null)(RoomsPage);