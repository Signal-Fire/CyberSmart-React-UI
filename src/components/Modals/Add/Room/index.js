/* jshint esversion: 6 */
import React from 'react';
import { Menu, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { AddLocationForm } from '../../../Forms';
import { SemanticModal } from '../../';
import { operateModal } from '../../../../containers/Location/action';

const AddRoomModal = props => {
    const {
        modalOpen
    } = props;

    return (
        <SemanticModal
            open={modalOpen}
            onClose={props.operateModal()}
            size='small'
            trigger = {
                <Menu.Item icon = "plus" onClick = {props.operateModal()}/>
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
    modalOpen : state.modalOpen
})

const mapDispatchToProps = dispatch => ({
    operateModal : () => { dispatch(operateModal())}    
})

export default connect(mapStateToProps, mapDispatchToProps)(AddRoomModal);
