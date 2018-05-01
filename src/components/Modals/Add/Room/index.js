/* jshint esversion: 6 */
import React from 'react';
import { Menu, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { AddLocationForm } from '../../../Forms';
import { SemanticModal } from '../../';
import { setModalOpen } from '../../../../containers/Location/action';

const AddRoomModal = ({
    modalOpen,
    setModalOpen
}) => {
    return (
        <SemanticModal
            open={modalOpen}
            onClose={ () => setModalOpen(false) }            
            size='small'
            trigger = {
                <Menu.Item icon = "plus" onClick = { () => { setModalOpen(true); } }/>
                }>
                <Modal.Header>Add a Location</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <AddLocationForm />
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
        </SemanticModal>
    );
}

const mapStateToProps = state => ({
    modalOpen : state.locations.modalOpen
})

const mapDispatchToProps = dispatch => ({
    setModalOpen : (modalState) => { dispatch(setModalOpen(modalState)); }    
})

export default connect(mapStateToProps, mapDispatchToProps)(AddRoomModal);
