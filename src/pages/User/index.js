import React from 'react'
import { UsersTable } from '../../components/Users';
import { Panel } from '../../components/ControlPanel';

import '../Master.css';
import './user.css';

const UserManagementPage = () => {
    return (
        <header className="page-body">
            <Panel name = 'Users' />                             
            <UsersTable />
        </header>
    )
}

export default UserManagementPage;
