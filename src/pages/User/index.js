import React from 'react'
import { UsersTable } from '../../components/Users';
import { Panel } from '../../components/ControlPanel';
import * as Styles from '../Styles';

const UserManagementPage = () => {
    return (
        <header style = { Styles.PageBody }>
            <Panel name = 'Users' />                             
            <UsersTable />
        </header>
    )
}

export default UserManagementPage;
