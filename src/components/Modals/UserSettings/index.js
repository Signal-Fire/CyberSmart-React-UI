/* jshint esversion: 6 */
import React from 'react';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';

import MenuIcon from '../../MenuBar/Icons';
import { UserSettingsForm } from '../../Forms';
import { SemanticModal } from '../';
import { setModalOpen } from '../../../containers/User/action';

const UserSettingsModal = ({
    isOpen,
    setModalOpen
}) => {
    return (
        <SemanticModal 
            trigger = { 
                <MenuIcon 
                    title = "User Settings" 
                    icon = "user" 
                    onClick = { () => setModalOpen(true) } 
                    />
            }
            open = { isOpen }
            onClose = { () => setModalOpen(false) }
            size='small'
        >
            <Modal.Header>Edit your User Settings</Modal.Header>
                <Modal.Content>                       
                    <UserSettingsForm />
                </Modal.Content>
                <Modal.Actions>                                      
            </Modal.Actions>
        </SemanticModal>
    );
}

const mapStateToProps = state => ({
    isOpen : state.user.modalOpen
})

const mapDispatchToProps = dispatch => ({
    setModalOpen : (modalState) => { dispatch(setModalOpen(modalState)) } 
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsModal);