/* jshint esversion: 6 */
import React from 'react';
import { Modal } from 'semantic-ui-react';

const centered = {
};

const SemanticModal = ({ children, ...rest }) => (
    <Modal
    closeOnEscape = { true }
    closeOnRootNodeClick = { false }
    dimmer = { true }
    style= { centered } 
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