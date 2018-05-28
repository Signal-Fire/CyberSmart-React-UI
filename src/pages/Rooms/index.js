import React from 'react';
import { connect } from 'react-redux';
import { Panel } from '../../components/ControlPanel';
import { LocationsTable } from '../../components/Locations';
import { AddMe } from '../../components/Messages';
import * as Styles from '../Styles';

const RoomsPage = ({
    locations
}) => {
    return(
        <header style = { Styles.PageBody }>
            <Panel name = 'Locations' />   
            {
                locations !== null ?
                    locations.filter(x => x.active).length > 0 ?                     
                        <LocationsTable />  
                    : <AddMe objects = 'Rooms' />
                : <AddMe objects = 'Rooms' />
            }
        </header>
    );
};

const mapStateToProps = state => ({
    locations : state.locations.locations
})

export default connect(mapStateToProps, null)(RoomsPage);