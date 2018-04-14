import React from 'react';
import { connect } from 'react-redux';
import { Modal, Menu } from 'semantic-ui-react';
import { AddDeviceForm } from '../../../Forms';
import { SemanticModal } from '../../';
import { setModalOpen } from '../../../../containers/Devices/action';

const AddDeviceModal = props => {
    const {
        modalOpen
    } = props;

    return (
        <SemanticModal
            open={modalOpen}
            onClose={ props.setModalOpen(false) }
            size='small'
            trigger = { <Menu.Item icon = "plus" onClick = { props.setModalOpen(true) } /> }
        >
            <Modal.Header>Add a Device</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <AddDeviceForm />
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    
                </Modal.Actions>
        </SemanticModal>
    );
}

const mapDispatchToProps = dispatch => ({
    setModalOpen : (modalState) => { setModalOpen(modalState) }
})

const mapStateToProps = state => ({    
    modalOpen : state.devices.modalOpen
})

export default connect(mapStateToProps, mapDispatchToProps)(AddDeviceModal);
