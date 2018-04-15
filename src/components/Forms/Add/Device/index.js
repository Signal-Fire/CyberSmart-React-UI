/* jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { withFormik } from 'formik';

import Yup from 'yup';
import { addDevice } from '../../../../containers/Devices/action';
import { SubmitButton } from '../Inputs';
import { getDeviceDropdown } from '../../../../containers/ConnectedDevices/reducer';
import { getLocationDropdown } from '../../../../containers/Location/reducer';

const AddDeviceForm = props => {
    const {
        values,
        errors,
        isSubmitting,
        handleChange,
        setFieldValue,
        handleSubmit
    } = props;

    const _handleSelect = (e, { value, name }) => {
        setFieldValue(name, value);
    }

    return (
        <Form
            loading = { isSubmitting }>
            <Form.Group widths = {2}>
                <Form.Input
                    fluid
                    placeholder = 'Device Name'
                    label =  { errors.deviceName ? 'Device Name is required' : 'Device Name' }
                    value = {values.name}
                    onChange = {handleChange}
                    name = 'deviceName'
                    error = { errors.deviceName ? true : false }
                />
                <Form.Select
                    fluid
                    label =  { errors.physical ? 'Physical Device is required' : 'Physical' }
                    placeholder = 'Select Location...'
                    onChange = { _handleSelect }
                    value = { values.physical }   
                    options = { getDeviceDropdown() }        
                    name = 'physical'
                    error = { errors.physical ? true : false }
                />             
            </Form.Group>
            <Form.Group widths = {2}>
                <Form.Select
                    fluid
                    label = { errors.location ? 'Location is required' : 'Location' }
                    onChange = { _handleSelect }
                    options = { getLocationDropdown() }
                    value = { values.location }     
                    placeholder = 'Select Location...'    
                    name = 'location'
                    error = { errors.location ? true : false }
                />        
            </Form.Group>
            <SubmitButton 
                handleSubmit = {handleSubmit}
                name = 'Add'
            />
        </Form>
    );
}

const deviceFormik = withFormik({
    mapPropsToValues : () => ({
        deviceName : '',
        location : '',
        physical : ''
    }),
    validationSchema : Yup.object().shape({
        location : Yup.string().required('Device Location is required!'),
        deviceName : Yup.string().required('Device Name is required!'),
        physical : Yup.string().required('Physical Device is required!')
    }),
    handleSubmit : (values, { props, setSubmitting }) => {
        props.addDevice(values);
        setSubmitting(false);
    },
    displayName : 'Add Device'
})(AddDeviceForm);

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    getLocationDropdown : () => { getLocationDropdown() },
    getDeviceDropdown : () => { getDeviceDropdown() },
    addDevice : (device) => { addDevice(device) }
})

export default connect(mapStateToProps, mapDispatchToProps)(deviceFormik)




