/* jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormBody from './Form';

class AddDeviceForm extends Component {
    render() {
        return (
            <FormBody state = { this.props } />
        );
    }
}

const mapStateToProps = state => ({
    connected : state.connected,
    locations : state.locations
})

export default connect(mapStateToProps)(AddDeviceForm)




