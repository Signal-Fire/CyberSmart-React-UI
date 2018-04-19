import React from 'react';
import { Grid } from 'semantic-ui-react';
import Widget from '../Widget';
import { connect } from 'react-redux';

const WidgetGrid = (props) => {
    const {
        devices
    } = props;

    return(
        <Grid stackable columns = {6}>                              
            {devices !== null ?
            devices.map((d) =>
                <Grid.Column key = {d._id}>  
                    <Widget name = {d.name} state = {d.state} address = {d.address}/>
                </Grid.Column>
            )
            :
            false}                        
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    devices : state.devices.devices
})

export default connect(mapStateToProps, null)(WidgetGrid);