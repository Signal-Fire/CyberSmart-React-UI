/* jshint esversion: 6 */
import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

export default class AddDeviceModal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen : false
        };
    }

    render() {
        return (
            <Modal
            dimmer={true}
            open={this.state.isOpen}
            onClose={this.handleClick}
            size='small'
            closeOnEscape={true}
            closeOnRootNodeClick={false}>

            </Modal>
        )
    }
};
