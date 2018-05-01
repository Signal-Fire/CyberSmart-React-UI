import React from 'react';
import { Panel } from '../../components/ControlPanel';
import { LocationsTable } from '../../components/Locations';

import '../Master.css';
import './rooms.css';

export default () => {
    return(
        <header className="page-body">
            <Panel name = 'Locations' />                        
                <LocationsTable />  
        </header>
    );
};
