/* jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { withFormik } from 'formik';

import Yup from 'yup';
import { addDevice, setModalOpen } from '../../../../containers/Devices/action';
import { SubmitButton } from '../Inputs';

const AddDeviceForm = props => {
    const {
        values,
        errors,
        isSubmitting,
        handleChange,
        setFieldValue,
        handleSubmit,
        stateErrors,
        stateLoading,
        stateObjects
    } = props;

    const _handleSelect = (e, { value, name }) => {
        setFieldValue(name, value);
    }

    const _mapDropdown = (options) => {
        if (!options)
            return [];
       
        options.forEach(option => {
            option.key = option._id;
            option.id = option._id;
            option.name = option.name;
            option.value = option.name;
            option.text = option.name;
        });

        return options;
    }  
    
    const _mapConnectedDropdown = (options) => {
        if (!options)
            return [];

        options.forEach(option => {
            option.key = option.mac;
            option.id = option.mac;
            option.name = option.ip;
            option.value = option.ip;
            option.text = option.ip;
        })

        return options;
    }

    return (
        <Form
            loading = { isSubmitting || stateLoading.locations || stateLoading.connected }>
            <Form.Group widths = {2}>
                <Form.Input
                    fluid
                    placeholder = 'Device Name'
                    label =  { errors.name ? 'Device Name is required' : 'Device Name' }
                    value = {values.name}
                    onChange = {handleChange}
                    name = 'name'
                    error = { errors.name ? true : false }
                />
                <Form.Select
                    fluid
                    label =  { errors.address ? 'Physical Device is required' : 'Physical Device' }
                    placeholder = 'Select Location...'
                    onChange = { _handleSelect }
                    value = { values.address }   
                    options = { _mapConnectedDropdown(stateObjects.connected) }        
                    name = 'address'
                    error = { (errors.address || stateErrors.connected) ? true : false }
                />             
            </Form.Group>
            <Form.Group widths = {2}>
                <Form.Select
                    fluid
                    label = { errors.location ? 'Location is required' : 'Location' }
                    onChange = { _handleSelect }
                    options = { _mapDropdown(stateObjects.locations) }
                    value = { values.location }     
                    placeholder = 'Select Location...'    
                    name = 'location'
                    error = { (errors.location || stateErrors.locations) ? true : false }
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
        name : '',
        location : '',
        address : ''
    }),
    validationSchema : Yup.object().shape({
        location : Yup.string().required('Device Location is required!'),
        name : Yup.string().required('Device Name is required!'),
        //address : Yup.string().required('Physical Device is required!')
    }),
    handleSubmit : (values, { props, setSubmitting }) => {
        values.created_by_user = props.user.name;
        props.addDevice(values, props.user.auth);
        setTimeout(() => props.setModalOpen(false), 500);   
    },
    displayName : 'Add Device'
})(AddDeviceForm);

const mapStateToProps = state => ({
    user : {
        auth : state.login.token,
        name : state.user.first_name
    },
    stateLoading : {
        locations : state.locations.isLoading,
        connected : state.connected.isLoading
    },
    stateObjects : {
        locations : state.locations.locations,
        connected : state.connected.devices,
    },    
    stateErrors : {
        locations : state.locations.error,
        connected : state.connected.error
    }
})

const mapDispatchToProps = dispatch => ({
    addDevice : (device, auth) => { dispatch(addDevice(device, auth)) },
    setModalOpen : (modalState) => { dispatch(setModalOpen(modalState)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(deviceFormik)




