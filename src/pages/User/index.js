import React from 'react';
import { connect } from 'react-redux';
import { UsersTable } from '../../components/Users';
import { Panel } from '../../components/ControlPanel';
import { AddMe } from '../../components/Messages';
import * as Styles from '../Styles';

const UserManagementPage = ({
    users
}) => {
    return (
        <header style = { Styles.PageBody }>
            <Panel name = 'Users' />   
                {
                    (users !== null && users !== undefined) ?           
                        users.length > 0 ?                        
                            <UsersTable />
                        : <AddMe objects = 'Users' />
                    : <AddMe objects = 'Users' />
                }
        </header>
    )
}

const mapStateToProps = state => ({
    users : state.user.users
})

export default connect(mapStateToProps, null)(UserManagementPage);
