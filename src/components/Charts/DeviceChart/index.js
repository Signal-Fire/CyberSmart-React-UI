import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import { LineChartTemplate } from '../LineTemplate';

const BasicChart = ( { 
    header,
    devices,
    locations 
}) => {
    const data = [];  
    
    if (locations !== null && locations.filter(x => x.active).length > 0) {
        locations.filter(x => x.active).forEach(location => {        
            data.push({devices: devices.filter(x => x.location === location.name && x.active).length, room: location.name})
        })
    }
    
    return (
        <div>
            <Header as ='h3' textAlign='center'>{ header }</Header>
            <LineChartTemplate 
                data = {data} 
                dataKeys = {{
                    X : 'rooms',
                    Y : 'devices'  
                }}/>
        </div>
    );
}

const mapStateToProps = state => ({
    devices : state.devices.devices,
    locations : state.locations.locations
})

export default connect(mapStateToProps, null)(BasicChart);
