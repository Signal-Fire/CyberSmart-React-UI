import React from 'react';
import { Modal } from 'semantic-ui-react';

const SemanticModal = ({ children, ...rest }) => (
    <Modal
    closeOnEscape = { true }
    closeOnRootNodeClick = { false }
    dimmer = { true }
    {...rest} 
    settings = {
        { 
            observeChanges: true 
        }
    }>
        {children}
    </Modal>
);

export default SemanticModal;