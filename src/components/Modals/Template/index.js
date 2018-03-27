/* jshint esversion: 6 */
import React from 'react';
import { Modal } from 'semantic-ui-react';

const centered = {
};

const SemanticModal = ({ children, ...rest }) => (
    <Modal {...rest} style={centered} settings={{ observeChanges: true }}>
        {children}
    </Modal>
);

export default SemanticModal;