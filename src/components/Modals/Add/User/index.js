import React from 'react';
import { Menu, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { AddUserForm } from '../../../Forms';
import { SemanticModal } from '../../';
import { setCreateModalOpen } from '../../../../containers/User/action';

const AddRoomModal = (props) => {
    const {
        modalOpen 
    } = props;

    return (
        <SemanticModal
            open={modalOpen}
            onClose={ () => props.setCreateModalOpen(false) }            
            size='small'
            trigger = {
                <Menu.Item icon = "plus" onClick = { () => { props.setCreateModalOpen(true); } }/>
                }>
                <Modal.Header>Add a User</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <AddUserForm />
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
        </SemanticModal>
    );
}

const mapStateToProps = state => ({
    createMoalOpen : state.user.createModalOpen
})

const mapDispatchToProps = dispatch => ({
    setCreateModalOpen : (modalState) => { dispatch(setCreateModalOpen(modalState)); }    
})

export default connect(mapStateToProps, mapDispatchToProps)(AddRoomModal);
