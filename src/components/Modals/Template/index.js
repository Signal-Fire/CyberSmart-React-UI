/* jshint esversion: 6 */
import React from 'react';
import { Modal } from 'semantic-ui-react';

const centered = {
    marginTop: '0px',
    marginLeft: 'auto',
    marginRight: 'auto'
};

const SemanticModal = ({ children, ...rest }) => (
    <Modal {...rest} style={centered} settings={{ observeChanges: true }}>
        {children}
    </Modal>
);

export default SemanticModal;